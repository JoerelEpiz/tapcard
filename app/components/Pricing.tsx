const plans = [
  {
    id: "basic",
    name: "Basic",
    price: "₱150",
    billing: "One-time payment",
    description: "For people who want a simple digital business card.",
    features: [
      "One static digital profile",
      "Up to 3 links",
      "Contact information",
      "QR code",
      "NFC card included",
      "No customer account",
    ],
  },
  {
    id: "pro-monthly",
    name: "Pro Monthly",
    price: "₱199",
    billing: "First month, then ₱99/month",
    description: "For people who want to manage their own profiles.",
    features: [
      "One editable digital profile",
      "Unlimited links",
      "Customer account",
      "Update your information anytime",
      "QR code",
      "NFC card included",
    ],
  },
  {
    id: "pro-annual",
    name: "Pro Annual",
    price: "₱899",
    billing: "First year, then ₱799/year",
    description: "For people who prefer paying annually.",
    features: [
      "One editable digital profile",
      "Unlimited links",
      "Customer account",
      "Update your information anytime",
      "QR code",
      "NFC card included",
    ],
  },
];

export default function Pricing() {
    return (
        <section id="plan" className="scroll-mt-24 bg-white px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand">
              Pricing
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Choose your TapCard plan.
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Start with a static profile or choose a subscription to manage
              your information yourself.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {plans.map((plan) => (
              <article
                key={plan.id}
                className="flex flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <h3 className="text-xl font-semibold">{plan.name}</h3>

                <p className="mt-3 text-4xl font-bold">{plan.price}</p>

                <p className="mt-2 text-sm font-medium text-brand">
                  {plan.billing}
                </p>

                <p className="mt-4 min-h-12 leading-6 text-gray-600">
                  {plan.description}
                </p>

                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm">
                      <span
                        className="font-bold text-brand"
                        aria-hidden="true"
                      >
                        ✓
                      </span>

                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="mt-8 rounded-full bg-brand px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-brand-dark"
                >
                  Choose {plan.name}
                </a>
              </article>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-gray-500">
            Subscription renewals and profile availability are subject to
            the final TapCard service terms.
          </p>
        </div>
      </section>
    );
}