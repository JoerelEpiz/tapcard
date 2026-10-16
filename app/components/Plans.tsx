const plans = [
    {
        name: "One Time",
        price: "$9",
        description: "For individuals and small teams just getting started.",
        features: [
        "Everything in Pro",
        "Multiple team profiles",
        "Business branding",
        "Lead management",
        "Team profile management",
        "Priority support",
        ],
    },{
        name: "Monthly",
        price: "$29",
        description: "For growing businesses that need more features.",
        features: [
        "Everything in Pro",
        "Multiple team profiles",
        "Business branding",
        "Lead management",
        "Team profile management",
        "Priority support",
        ],
    },{
        name: "Annual",
        price: "$99",
        description: "For large organizations with complex needs.",
        features: [
        "Everything in Pro",
        "Multiple team profiles",
        "Business branding",
        "Lead management",
        "Team profile management",
        "Priority support",
        ],
    },
];

export default function Plans() {
    return (
        <section id="plan" className="bg-white py-20 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="sm:text-center">
                    <h2 className="text-lg font-semibold leading-8 text-brand">Pricing Plans</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Choose the plan that fits your needs
                    </p>
                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                        Whether you're an individual or a large organization, we have a plan for you.
                    </p>
                </div>

                <div className="mt-16 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
                    {plans.map((plan) => (
                        <div key={plan.name} className="flex flex-col rounded-3xl bg-white p-8 shadow-lg ring-1 ring-gray-200 sm:p-10">
                            <div className="flex items-center justify-between gap-x-4">
                                <h3 className="text-lg font-semibold leading-8 text-gray-900">{plan.name}</h3>
                                <p className="text-sm font-semibold leading-6 text-gray-600">{plan.description}</p>
                            </div>
                            <p className="mt-4 text-5xl font-bold tracking-tight text-gray-900">{plan.price}</p>
                            <ul role="list" className="mt-6 space-y-6">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex gap-x-3">
                                        <svg className="h-6 w-5 flex-none text-brand" viewBox="0 0 20 20" fill="currentColor" aria-hidden="     true">
                                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-sm leading-6 text-gray-600">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <a href="#" className="mt-8 block rounded-md bg-brand px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-mint focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
                                Get Started
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>  
    );
}