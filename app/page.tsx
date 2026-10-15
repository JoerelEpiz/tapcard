const products = [
  {
    name: "NFC Business Cards",
    description:
      "Share your contact details and professional profile with a simple tap.",
    price: "Coming soon",
    icon: "▣",
  },
  {
    name: "NFC Stickers",
    description:
      "Turn compatible phones and surfaces into gateways to your digital profile.",
    price: "Coming soon",
    icon: "◉",
  },
  {
    name: "Digital Business Cards",
    description:
      "Create a personal page with your contact details, social links, and business information.",
    price: "Free to get started",
    icon: "↗",
  },
];

const features = [
  {
    number: "01",
    title: "Tap to share",
    description:
      "Let people open your digital business card by tapping a compatible phone on your NFC product.",
  },
  {
    number: "02",
    title: "Make it yours",
    description:
      "Customize your profile with your name, photo, contact information, and social media links.",
  },
  {
    number: "03",
    title: "Stay connected",
    description:
      "Give people an easy way to save your contact information and connect with your business.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-warm-white text-graphite">
      <header className="border-b border-slate-200">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <a href="#" className="text-2xl font-bold tracking-tight">
            Tap<span className="text-brand">Card</span>
          </a>

          <div className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#products" className="hover:text-brand">
              Products
            </a>
            <a href="#how-it-works" className="hover:text-brand">
              How it works
            </a>
            <a href="#features" className="hover:text-brand">
              Features
            </a>
          </div>

          <a
            href="#products"
            className="rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
          >
            Explore TapCard
          </a>
        </nav>
      </header>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28 lg:px-8">
        <div>
          <p className="mb-6 inline-flex rounded-full bg-teal-50 px-4 py-2 text-sm font-medium text-brand">
            A smarter way to connect
          </p>

          <h1 className="max-w-2xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
            One tap.
            <br />
            <span className="text-brand">Endless connections.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Share your contact details, social profiles, and business
            information with a TapCard digital business card. Make every
            introduction easier.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#products"
              className="rounded-full bg-teal-800 px-7 py-4 font-semibold text-white transition hover:bg-teal-900"
            >
              Explore products →
            </a>

            <a
              href="#how-it-works"
              className="rounded-full border border-slate-300 px-7 py-4 font-semibold transition hover:bg-slate-50"
            >
              How it works
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-600">
            <span>✓ Easy contact sharing</span>
            <span>✓ Customizable profiles</span>
            <span>✓ NFC-powered connections</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute inset-8 rounded-full bg-teal-100 blur-3xl" />

          <div className="relative rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-xl sm:p-8">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-brand">
                TAPCARD PROFILE
              </span>
              <span className="rounded-full bg-white px-3 py-1 text-xs text-slate-500">
                Digital card
              </span>
            </div>

            <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 text-2xl font-bold text-brand">
                  JD
                </div>

                <div>
                  <h2 className="text-xl font-bold">Juan Dela Cruz</h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Business Owner
                  </p>
                </div>
              </div>

              <p className="mt-6 text-sm leading-6 text-slate-600">
                Building connections and making every introduction count.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-xs text-slate-500">CONTACT</p>
                  <p className="mt-2 font-semibold">Save my details</p>
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-xs text-slate-500">CONNECT</p>
                  <p className="mt-2 font-semibold">Social profiles</p>
                </div>
              </div>

              <div className="mt-5 rounded-xl bg-teal-800 p-4 text-center font-semibold text-white">
                Save Contact
              </div>
            </div>

            <p className="mt-5 text-center text-sm text-slate-500">
              Your identity. Your connections. One tap.
            </p>
          </div>
        </div>
      </section>

      <section id="products" className="bg-mint/30 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-brand">
              Our products
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Meet your new way to connect.
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Physical NFC products and digital profiles designed to make
              sharing your information easier.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.name}
                className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-2xl text-brand">
                  {product.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold">{product.name}</h3>

                <p className="mt-3 min-h-20 leading-7 text-slate-600">
                  {product.description}
                </p>

                <div className="mt-6 flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold text-brand">
                    {product.price}
                  </span>

                  <a
                    href="#how-it-works"
                    className="text-sm font-semibold hover:text-brand"
                  >
                    Learn more →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="how-it-works"
        className="mx-auto max-w-7xl px-6 py-20 lg:px-8"
      >
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-brand">
            How it works
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Three steps. One simple connection.
          </h2>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.number}>
              <span className="text-sm font-bold text-brand">
                STEP {feature.number}
              </span>

              <h3 className="mt-4 text-xl font-bold">{feature.title}</h3>

              <p className="mt-3 leading-7 text-slate-600">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="features" className="bg-teal-900 px-6 py-20 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-teal-200">
              Make your next introduction count
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Your business deserves a smarter card.
            </h2>

            <p className="mt-4 leading-7 text-teal-100">
              Start building your digital identity with TapCard.
            </p>
          </div>

          <a
            href="#products"
            className="shrink-0 rounded-full bg-white px-7 py-4 font-semibold text-brand-dark transition hover:bg-teal-50"
          >
            Discover TapCard →
          </a>
        </div>
      </section>

      <footer className="bg-graphite px-6 py-8 text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-white/70 sm:flex-row">
          <p>
            © 2026 TapCard. All rights reserved.
          </p>

          <p>Connecting people, one tap at a time.</p>
        </div>
      </footer>
    </main>
  );
}