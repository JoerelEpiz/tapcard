export default function Contact() {
    return (
        <section
        id="contact"
        className="scroll-mt-24 bg-brand px-6 py-20 text-white sm:py-24"
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-mint">
            Contact
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to get started?
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-white/80">
            Have questions about TapCard or need help choosing a plan?
            Get in touch with us.
          </p>

          <a
            href="mailto:hello@tapcard.ph"
            className="mt-8 inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-brand transition hover:bg-mint"
          >
            Email Us
          </a>

          <p className="mt-4 text-sm text-white/60">
            Replace hello@tapcard.ph with your actual business email before
            publishing.
          </p>
        </div>
      </section>
    );
}