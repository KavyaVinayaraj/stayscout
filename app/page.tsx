import EnquiryForm from "./EnquiryForm";

export default function Home() {
  const highlights = [
    {
      title: "Built for remote work",
      text: "Gigabit Wi-Fi, a dedicated desk, and a monitor on request.",
    },
    {
      title: "Stay your way",
      text: "Book three nights or three months with flexible check-in.",
    },
    {
      title: "By the water",
      text: "Waterfront views and a ten-minute tram into central Manchester.",
    },
    {
      title: "Move-in ready",
      text: "Fully furnished, linens and kitchen included, cleaned before every stay.",
    },
  ];

  const photos = [
    { caption: "Living area", img: "/living-room.jpg" },
    { caption: "Main bedroom", img: "/bedroom.jpg" },
    { caption: "Kitchen", img: "/kitchen.jpg" },
    { caption: "Desk and workspace", img: "/workspace.jpg" },
    { caption: "Waterfront view", img: "/waterfront.jpg" },
    { caption: "Bathroom", img: "/bathroom.jpg" },
  ];

  const pricing = [
    {
      plan: "Short stay",
      price: "£120",
      per: "per night",
      note: "Minimum three nights.",
    },
    {
      plan: "Weekly",
      price: "£700",
      per: "per week",
      note: "Cleaning included.",
    },
    {
      plan: "Monthly",
      price: "£2,200",
      per: "per month",
      note: "Bills included.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* Hero */}

      <section className="relative h-[550px]">

        <img
          src="/hero.jpg"
          alt="The Wharfside Loft"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 py-28 text-white">

          <p className="text-sm uppercase tracking-widest text-slate-300 mb-3">

            The Wharfside Loft

          </p>

          <h1 className="text-5xl font-bold leading-tight">

            Your Manchester base, for a weekend or a season.

          </h1>

          <p className="mt-5 text-lg max-w-2xl text-slate-200">

            A two-bedroom waterfront loft in Salford Quays,
            with fast Wi-Fi, a proper desk,
            and everything sorted for short and mid-term stays.

          </p>

          <a
            href="#enquire"
            className="inline-block mt-8 bg-white text-slate-900 font-semibold px-6 py-3 rounded-lg hover:bg-slate-100"
          >

            Check availability

          </a>

        </div>

      </section>

      {/* Highlights */}

      <section className="px-6 py-16 max-w-5xl mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

          {highlights.map((h) => (

            <div key={h.title}>

              <h3 className="text-xl font-semibold">

                {h.title}

              </h3>

              <p className="mt-2 text-slate-600">

                {h.text}

              </p>

            </div>

          ))}

        </div>

      </section>

      {/* Photo Grid */}

      <section className="px-6 pb-16 max-w-5xl mx-auto">

        <h2 className="text-3xl font-bold mb-8">

          A look around

        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">

          {photos.map((p) => (

            <div
              key={p.caption}
              className="rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition"
            >

              <img
                src={p.img}
                alt={p.caption}
                className="h-48 w-full object-cover"
              />

              <p className="px-4 py-3 text-sm text-slate-600 bg-slate-50">

                {p.caption}

              </p>

            </div>

          ))}

        </div>

      </section>

      {/* Pricing */}

      <section className="px-6 py-16 bg-slate-50">

        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl font-bold mb-8">

            Pricing

          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

            {pricing.map((p) => (

              <div
                key={p.plan}
                className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm"
              >

                <p className="text-sm font-medium text-slate-500">

                  {p.plan}

                </p>

                <p className="text-4xl font-bold mt-2">

                  {p.price}

                </p>

                <p className="text-sm text-slate-500">

                  {p.per}

                </p>

                <p className="text-sm text-slate-600 mt-4">

                  {p.note}

                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Enquiry Form */}

      <section
        id="enquire"
        className="px-6 py-16 max-w-4xl mx-auto"
      >

        <h2 className="text-3xl font-bold mb-2">

          Enquire

        </h2>

        <p className="text-slate-600 mb-6">

          Tell us your dates and we&apos;ll come back with availability.

        </p>

        <EnquiryForm />

      </section>

      {/* Footer */}

      <footer className="px-6 py-10 bg-slate-900 text-slate-300">

        <div className="max-w-5xl mx-auto">

          <p className="font-semibold text-white">

            The Wharfside Loft

          </p>

          <p className="text-sm mt-2">

            Salford Quays, Manchester.
            Short and mid-term stays, managed start to finish.

          </p>

          <p className="text-xs text-slate-500 mt-5">

            Demo project for portfolio purposes only.
            Images are stock photography and this is not a real rental listing.

          </p>

        </div>

      </footer>

    </main>
  );
} 