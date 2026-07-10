import { Readable } from "node:stream";
import type { IncomingMessage, ServerResponse } from "node:http";

// TanStack Start's SSR build normally targets Cloudflare Workers (see vite.config.ts).
// On Vercel we build the plain Node SSR bundle instead (dist/server/server.js, a
// standard Request -> Response fetch handler) and adapt it to Vercel's Node.js
// Serverless Function signature here.
type FetchHandler = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let handlerPromise: Promise<FetchHandler> | undefined;

async function getHandler(): Promise<FetchHandler> {
  if (!handlerPromise) {
    handlerPromise = import("../dist/server/server.js").then((m) => (m as { default: FetchHandler }).default);
  }
  return handlerPromise;
}

function toHeaders(rawHeaders: IncomingMessage["headers"]): Headers {
  const headers = new Headers();
  for (const [key, value] of Object.entries(rawHeaders)) {
    if (value === undefined) continue;
    if (Array.isArray(value)) {
      for (const v of value) headers.append(key, v);
    } else {
      headers.set(key, value);
    }
  }
  return headers;
}

export default async function handler(req: IncomingMessage, res: ServerResponse) {
  const host = req.headers.host ?? "localhost";
  const protocol = (req.headers["x-forwarded-proto"] as string | undefined) ?? "https";
  const url = new URL(req.url ?? "/", `${protocol}://${host}`);

  const hasBody = req.method !== "GET" && req.method !== "HEAD";
  const request = new Request(url, {
    method: req.method,
    headers: toHeaders(req.headers),
    body: hasBody ? Readable.toWeb(req) : undefined,
    duplex: hasBody ? "half" : undefined,
  } as RequestInit);

  const server = await getHandler();
  const response = await server.fetch(request, {}, {});

  res.statusCode = response.status;
  response.headers.forEach((value, key) => {
    res.setHeader(key, value);
  });

  if (!response.body) {
    res.end();
    return;
  }

  const reader = response.body.getReader();
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      res.write(value);
    }
  } finally {
    res.end();
  }
}
