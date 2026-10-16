const features = [
  {
    number: "01",
    title: "One Tap Sharing",
    description:
      "Share your digital business card using an NFC card or a QR code.",
  },
  {
    number: "02",
    title: "Your Digital Profile",
    description:
      "Bring your contact information, social media, and business links together in one place.",
  },
  {
    number: "03",
    title: "Easy to Share",
    description:
      "Make it easier for customers, clients, and new contacts to find your information.",
  },
];

export default function Feature(){
    return (
        <section id="features" className="scroll-mt-24 px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand">
              Features
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Everything you need to connect.
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Make sharing your professional information simple and convenient.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.number}
                className="rounded-2xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-sm font-bold text-brand">
                  {feature.number}
                </p>

                <h3 className="mt-5 text-xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
}