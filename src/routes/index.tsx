import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "meuimóvel.com — A revolução imobiliária está chegando" },
      {
        name: "description",
        content:
          "Os portais de imóveis morreram. Algo radicalmente novo está sendo construído. Garanta seu Acesso Antecipado Alfa — vagas limitadas aos 500 primeiros pioneiros.",
      },
      { property: "og:title", content: "meuimóvel.com — A revolução imobiliária está chegando" },
      {
        property: "og:description",
        content:
          "Os portais de imóveis morreram. Algo radicalmente novo está sendo construído. Garanta seu Acesso Antecipado Alfa — vagas limitadas aos 500 primeiros pioneiros.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !phone.trim()) return;

    setLoading(true);

    const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbzslzI4pySgUVfyXREcbEhEfNdA5fv1bmOZWrOLjhZHmj1o2d2FhhF5KbRURwnEL2AW/exec";

    try {
      await fetch(WEB_APP_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({ nome: name, email: email, telefone: phone }),
      });

      setSubmitted(true);
    } catch (error) {
      console.error("Erro ao enviar:", error);
      alert("Erro ao enviar dados. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative flex h-[100dvh] w-full items-center justify-center overflow-hidden bg-background px-4 sm:px-6">
      {/* City Background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.06] mix-blend-luminosity grayscale"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2622&auto=format&fit=crop')"
        }}
      />
      {/* Background tech glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "var(--gradient-glow)" }}
      />
      <div
        aria-hidden
        className="float-slow pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full blur-[150px]"
        style={{ background: "color-mix(in oklab, var(--brand-secondary) 26%, transparent)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-52 right-[-6rem] h-[30rem] w-[30rem] rounded-full bg-accent/20 blur-[150px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(60% 60% at 50% 45%, black, transparent)",
        }}
      />

      {/* Content */}
      <section className="relative z-10 mx-auto flex w-full max-w-2xl flex-col items-center text-center">
        {/* Logo */}
        <img
          src="/logo.png"
          alt="meuimóvel.com"
          className="mb-4 h-9 w-auto sm:mb-6 sm:h-11"
        />

        {/* Curiosity / eyebrow */}
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-[10px] sm:text-xs font-medium uppercase tracking-[0.25em] text-primary backdrop-blur">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Em construção
        </span>

        {/* Headline */}
        <h1 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl">
          O jeito de comprar imóvel
          <br className="hidden sm:block" />{" "}
          <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
            acabou de ficar obsoleto.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:mt-5 sm:text-base">
          Esqueça filtros infinitos, corretores lentos e burocracia sem fim.
          Estamos construindo algo que vai tornar os portais tradicionais peças
          de museu. Ainda não podemos revelar <em className="text-foreground/90 not-italic font-semibold">como</em> mas quem
          entrar agora será o primeiro a saber.
        </p>

        {/* FOMO line */}
        <p className="mt-4 text-xs sm:text-sm font-medium text-accent">
          O <strong>Acesso Antecipado Alfa</strong> abre para pouquíssimas
          pessoas. Depois disso, a fila fecha.
        </p>

        {/* Form */}
        {submitted ? (
          <div className="mt-4 w-full max-w-md rounded-xl border border-primary/40 bg-card/70 px-6 py-4 backdrop-blur">
            <p className="font-display text-base sm:text-lg font-bold text-primary">
              Você está dentro. Bem-vindo(a), pioneiro(a).
            </p>
            <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
              Fique de olho no seu e-mail — o acesso Alfa chega antes de todo
              mundo.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-4 flex w-full max-w-md flex-col gap-2 sm:gap-3"
          >
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Seu nome completo"
              className="h-11 w-full rounded-xl border border-input bg-card/60 px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none backdrop-blur transition focus:border-primary focus:ring-2 focus:ring-ring/40"
            />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@melhoremail.com"
              className="h-11 w-full rounded-xl border border-input bg-card/60 px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none backdrop-blur transition focus:border-primary focus:ring-2 focus:ring-ring/40"
            />
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => {
                let v = e.target.value.replace(/\D/g, "");
                if (v.length > 11) v = v.slice(0, 11);
                if (v.length > 2) v = `(${v.slice(0, 2)}) ${v.slice(2)}`;
                if (v.length > 9) v = `${v.slice(0, 10)}-${v.slice(10)}`;
                setPhone(v);
              }}
              placeholder="Seu WhatsApp (com DDD)"
              className="h-11 w-full rounded-xl border border-input bg-card/60 px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none backdrop-blur transition focus:border-primary focus:ring-2 focus:ring-ring/40"
            />
            <button
              type="submit"
              disabled={loading}
              className="glow-cta h-11 w-full shrink-0 rounded-xl bg-primary px-6 py-2 font-display text-sm font-bold text-primary-foreground transition hover:brightness-110 active:scale-[0.98] disabled:opacity-70 disabled:pointer-events-none"
            >
              {loading ? "Enviando..." : "Quero entrar antes de todos"}
            </button>
          </form>
        )}

        {/* Micro-copy proof/security */}
        <p className="mt-3 text-[10px] sm:text-xs text-muted-foreground">
          Apenas para os <strong className="text-foreground/80">primeiros 500 pioneiros</strong>. Zero
          spam. Você sai quando quiser.
        </p>
      </section>
    </main>
  );
}
