export default function CTA() {
  return (
    <section
    id="cta"
    className="relative overflow-hidden bg-brand px-6 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-4xl text-center">
        {/* Small label */}
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-mint">
          Your next connection starts here
        </p>

        {/* Main heading */}
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
          Make Every Connection Count.
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
          Share your contact details, social media, and business information
          with a single tap. Create your digital business card and make
          networking easier with TapCard.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#products"
            className="inline-flex w-full items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-brand transition hover:bg-mint sm:w-auto"
          >
            Explore NFC Products
          </a>
          <a
            href="#plan"
            className="inline-flex w-full items-center justify-center rounded-full border border-white/40 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
          >
            Avail Us
          </a>
        </div>

        {/* Supporting text */}
        <p className="mt-6 text-sm text-white/60">
          One tap. Endless connections.
        </p>
      </div>
    </section>  
  );  
}