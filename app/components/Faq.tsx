const faqs = [
  {
    question: "What is TapCard?",
    answer:
      "TapCard connects your physical NFC card to a digital business profile that people can open on their phones.",
  },
  {
    question: "Does my customer need an app?",
    answer:
      "No dedicated TapCard app is required to view your profile. Customers can open your profile in their phone browser.",
  },
  {
    question: "Can I edit my digital profile?",
    answer:
      "The Basic plan has a static profile. Pro subscribers can manage and update their profile through their account.",
  },
  {
    question: "What happens if I stop my subscription?",
    answer:
      "Subscription access and profile availability will follow the cancellation policy established by TapCard. Make sure this policy is clearly explained before accepting payments.",
  },
];

export default function Faq() {
    return (
        <section id="faq" className="scroll-mt-24 px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand">
              FAQ
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Frequently asked questions
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-slate-200 bg-white p-6"
              >
                <summary className="cursor-pointer font-semibold marker:text-brand">
                  {faq.question}
                </summary>

                <p className="mt-4 leading-7 text-gray-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    );
}