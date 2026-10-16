export default function Hero() {
    return (
        <section className="bg-brand px-6 py-24 text-white sm:py-32">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-mint">
            Your next connection starts here
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Make Every Connection Count.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/80">
            Share your contact information, social media, and business
            details with a single tap.
          </p>

          <a
            href="#plan"
            className="mt-10 inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-brand transition hover:bg-mint"
          >
            Explore Pricing
          </a>
        </div>
      </section>
    );
}