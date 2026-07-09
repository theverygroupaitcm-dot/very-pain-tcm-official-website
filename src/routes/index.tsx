import { createFileRoute } from "@tanstack/react-router";
import {
  Heart,
  Flower2,
  Hand,
  Sparkles,
  Zap,
  Wind,
  Phone,
  Mail,
  MapPin,
  Calendar,
  ShieldCheck,
  Target,
  Award,
  ArrowRight,
  Star,
  Menu,
  Crown,
  Smile,
} from "lucide-react";
import heroDoctor from "@/assets/dhermis.jpeg";
import aboutClinic from "@/assets/room.jpeg";
import logoHorizontal from "@/assets/logo-horizontal-transparent.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Very Pain TCM" },
      {
        name: "description",
        content:
          "Very Pain TCM a place that to recover your health",
      },
      { property: "og:title", content: "Very Pain TCM" },
      {
        property: "og:description",
        content: "Very Pain TCM a place that to recover your health",
      },
    ],
  }),
  component: Index,
});

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 bg-primary/90 backdrop-blur-md border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-2 flex items-center justify-between">
        <a href="#" className="flex items-center py-1" aria-label="Very Pain TCM">
          <img src={logoHorizontal} alt="Very Pain TCM" className="h-20 sm:h-24 w-auto object-contain" />
        </a>
        {/* <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/85">
          <a href="#services" className="hover:text-accent transition-colors">Services</a>
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#doctors" className="hover:text-accent transition-colors">Doctors</a>
          <a href="#testimonials" className="hover:text-accent transition-colors">Testimonials</a>
          <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
        </nav> */}
        <div className="flex items-center gap-3">
          <a
            href="https://wa.link/vtd72d"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground shadow-[var(--shadow-soft)] hover:opacity-90 transition"
          >
            <Calendar className="w-4 h-4" /> 在线预约
          </a>
          <button className="md:hidden p-2 rounded-lg border border-white/20 text-white" aria-label="Menu">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <div className="absolute inset-0 -z-0 opacity-30 [background-image:radial-gradient(circle_at_1px_1px,oklch(0.85_0.14_85/0.25)_1px,transparent_0)] [background-size:24px_24px]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-1.5 text-xs font-medium text-accent border border-white/15">
            <ShieldCheck className="w-3.5 h-3.5" /> 深受 2,000+ 名患者的信赖
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.05]">
            没<span className="text-accent">痛</span>， 别<span className="text-accent">来</span>
          </h1>
          <p className="mt-6 text-lg text-white/75 max-w-xl">
            治疗专科医生都治不好的病痛
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="https://wa.link/vtd72d"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium text-accent-foreground shadow-[var(--shadow-glow)] hover:opacity-95 transition"
              style={{ background: "var(--gradient-gold)" }}
            >
              在线预约  <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-6 py-3.5 text-sm font-medium text-white border border-white/20 hover:border-accent/60 transition"
            >
              探索服务
            </a>
          </div>
          {/* <div className="mt-10 grid grid-cols-3 max-w-md gap-6">
            {[
              { k: "120+", v: "Specialists" },
              { k: "25k+", v: "Happy Patients" },
              { k: "24/7", v: "Emergency" },
            ].map((s) => (
              <div key={s.v}>
                <div className="text-2xl font-semibold text-accent">{s.k}</div>
                <div className="text-xs text-white/70 mt-1">{s.v}</div>
              </div>
            ))}
          </div> */}
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-primary/10 blur-2xl" />
          <div className="relative rounded-[2rem] overflow-hidden shadow-[var(--shadow-glow)] bg-card">
            <img
              src={heroDoctor}
              alt="dhermis"
              width={1000}
              height={1380}
              className="w-full h-[500px] object-cover object-top"
            />
          </div>
          <div className="absolute -left-6 bottom-10 hidden sm:flex items-center gap-3 bg-card rounded-2xl px-4 py-3 shadow-[var(--shadow-soft)] border border-border">
            <div className="grid place-items-center w-10 h-10 rounded-xl bg-accent text-primary">
              <Smile className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-semibold">98% 康复率</div>
              {/* <div className="text-xs text-muted-foreground">Across specialties</div> */}
            </div>
          </div>
          {/* <div className="absolute -right-4 top-10 hidden sm:flex items-center gap-3 bg-card rounded-2xl px-4 py-3 shadow-[var(--shadow-soft)] border border-border">
            <div className="grid place-items-center w-10 h-10 rounded-xl bg-accent text-primary">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-semibold">Open today</div>
              <div className="text-xs text-muted-foreground">8:00 — 22:00</div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

const services = [
  { icon: Sparkles, title: "宫廷理经术", desc: "源自宫廷古法，疏通经络、温养气血，调理女性月经不调与体寒。" },
  { icon: Zap, title: "针灸调理", desc: "传统针灸技法，缓解疼痛、改善循环，调和脏腑阴阳平衡。" },
  { icon: Flower2, title: "妇科推拿", desc: "专为女性设计的温柔推拿手法，舒缓妇科不适，呵护身心健康。" },
  { icon: Hand, title: "经络疏通", desc: "全身经络梳理，疏通气血淤堵，释放压力与僵硬，恢复轻盈状态。" },
  { icon: Heart, title: "气血调理", desc: "以中草药与食疗结合，补益气血、改善气色，调养亚健康体质。" },
  { icon: Wind, title: "物理治疗", desc: "结合艾灸、拔罐与现代理疗，针对腰颈酸痛与运动损伤进行康复。" },
];

function Services() {
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">我们的服务</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight max-w-2xl">
              中医治本，内外兼治
            </h2>
          </div>
          {/* <p className="text-muted-foreground max-w-md">
            Multi-disciplinary teams collaborate on every case — so you get a complete, joined-up
            plan rather than scattered visits.
          </p> */}
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ icon: Icon, title, desc }) => (
            <article
              key={title}
              className="group rounded-3xl bg-card border border-border p-7 hover:border-primary/30 hover:shadow-[var(--shadow-soft)] transition"
            >
              <div
                className="grid place-items-center w-14 h-14 rounded-2xl text-primary-foreground mb-6"
                style={{ background: "var(--gradient-primary)" }}
              >
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold">{title}</h3>
              {/* <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:gap-2.5 transition-all"
              >
                Learn more <ArrowRight className="w-4 h-4" />
              </a> */}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const points = [
    { icon: Award, title: "御医推拿", desc: "我们不整骨，我们遵守卫生部条例" },
    { icon: ShieldCheck, title: "我们不忽悠", desc: "不夸大，不虚假，真实疗效，说到做到" },
    { icon: Target, title: "我们的宗旨", desc: "一定治好你，我们能够做到" },
    { icon: Crown, title: "专治精英客户", desc: "有权有势有信仰，我们懂你 治好你" },
  ];
  return (
    <section id="about" className="py-24 lg:py-32 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative">
          <div className="rounded-[2rem] overflow-hidden shadow-[var(--shadow-soft)]">
            <img
              src={aboutClinic}
              alt="Insove clinic interior"
              width={1280}
              height={960}
              loading="lazy"
              className="w-full h-[480px] object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-4 sm:right-8 bg-card rounded-2xl p-6 shadow-[var(--shadow-glow)] border border-border max-w-[260px]">
            <div className="flex items-center gap-1 text-primary">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="mt-3 text-sm text-foreground">
              "A very good experience and treatment, i have lower back pain for a month, and finally been heal with 1st-time treatement"
            </p>
            <p className="mt-2 text-xs text-muted-foreground">— Scott Liew</p>
          </div>
        </div>

        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">关于非常痛中医</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
            中医西医不医你，才来咨询治疗方案
          </h2>
          {/* <p className="mt-5 text-muted-foreground leading-relaxed">
            For over fifteen years, Insove has combined evidence-based medicine with the warmth
            of community care. Our integrated model means your specialists, lab, and pharmacy all
            speak to each other — so nothing falls through the cracks.
          </p> */}
          <div className="mt-8 space-y-5">
            {points.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-4">
                <div className="grid place-items-center w-11 h-11 rounded-xl bg-accent text-primary shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold">{title}</h4>
                  <p className="text-sm text-muted-foreground mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { k: "15+", v: "Years of experience" },
    { k: "120+", v: "Expert specialists" },
    { k: "25k+", v: "Patients served" },
    { k: "98%", v: "Patient satisfaction" },
  ];
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div
          className="rounded-[2rem] p-10 lg:p-14 text-primary-foreground grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          style={{ background: "var(--gradient-primary)" }}
        >
          {stats.map((s) => (
            <div key={s.v}>
              <div className="text-4xl lg:text-5xl font-semibold tracking-tight">{s.k}</div>
              <div className="mt-2 text-sm opacity-80">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    {
      quote:
        "多年的腰酸背痛在几次针灸和推拿后明显改善，师傅手法专业，讲解也很细心，整个人都轻松了。",
      name: "陈女士",
      role: "针灸调理顾客",
    },
    {
      quote:
        "月经不调困扰我很久，做了宫廷理经术之后，整个人气色变好，痛经也减轻了很多，真心推荐！",
      name: "Lim S.",
      role: "宫廷理经术顾客",
    },
    {
      quote:
        "环境干净舒适，师傅耐心专业，每次做完经络疏通都感觉身体轻盈，睡眠也好了。会一直回来。",
      name: "黄先生",
      role: "经络疏通常客",
    },
  ];
  return (
    <section id="testimonials" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">顾客感言</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
            深受全市家庭信赖
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {items.map((t) => (
            <figure
              key={t.name}
              className="rounded-3xl bg-card border border-border p-7 hover:shadow-[var(--shadow-soft)] transition"
            >
              <div className="flex items-center gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-foreground leading-relaxed">"{t.quote}"</blockquote>
              <figcaption className="mt-6 pt-6 border-t border-border">
                <div className="font-semibold">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="rounded-[2rem] bg-card border border-border p-10 lg:p-14 grid lg:grid-cols-2 gap-10 items-center shadow-[var(--shadow-soft)]">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Ready to feel better? Let's get you booked in.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Same-day appointments available. Walk-ins welcome for emergencies.
            </p>
            <div className="mt-8 space-y-4 text-sm">
              <div className="flex items-center gap-3"><Phone className="w-4 h-4 text-primary" /> +1 (555) 010-2040</div>
              <div className="flex items-center gap-3"><Mail className="w-4 h-4 text-primary" /> care@insove.health</div>
              <div className="flex items-center gap-3"><MapPin className="w-4 h-4 text-primary" /> 24 Wellness Avenue, Mid-City</div>
            </div>
          </div>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4">
              <input className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="Full name" />
              <input className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="Phone number" />
            </div>
            <input className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="Email address" />
            <select className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30">
              <option>Choose a department</option>
              <option>Cardiology</option><option>Neurology</option><option>Pediatrics</option>
              <option>General Medicine</option><option>Diagnostics</option>
            </select>
            <textarea rows={3} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="Briefly describe your concern" />
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] hover:opacity-95 transition"
              style={{ background: "var(--gradient-primary)" }}
            >
              Request Appointment <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <img src={logoHorizontal} alt="Very Pain TCM" className="h-24 w-auto" loading="lazy" />
          <p className="mt-4 text-sm text-white/70 max-w-xs">
            Modern medical care with a human heart. Open 7 days a week.
          </p>
        </div>
        {/* <div>
          <h5 className="text-sm font-semibold text-accent">Services</h5>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>Cardiology</li><li>Neurology</li><li>Pediatrics</li><li>Diagnostics</li>
          </ul>
        </div> */}
        {/* <div>
          <h5 className="text-sm font-semibold text-accent">Company</h5>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>About</li><li>Doctors</li><li>Careers</li><li>Press</li>
          </ul>
        </div> */}
        <div>
          <h5 className="text-sm font-semibold text-accent">Contact</h5>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>011-62403193</li>
            {/* <li>care@insove.health</li> */}
            <li>Jalan Metro Pudu 2, Fraser Business Park</li>
            <li>55200 Kuala Lumpur</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-5 text-xs text-white/60 flex flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} Very Pain TCM Sdn. Bhd. All rights reserved.</span>
          {/* <span>Privacy · Terms · Accessibility</span> */}
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        {/* <Stats /> */}
        <Testimonials />
        {/* <CTA /> */}
      </main>
      <Footer />
    </div>
  );
}
