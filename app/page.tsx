import EnquiryForm from "./EnquiryForm";
export default function Home() {
  const highlights = [
    { title: "Built for remote work", text: "Gigabit Wi-Fi, a dedicated desk, and a monitor on request." },
    { title: "Stay your way", text: "Book three nights or three months, with flexible check-in either way." },
    { title: "By the water", text: "Waterfront views and a ten-minute tram into central Manchester." },
    { title: "Move-in ready", text: "Fully furnished, linens and kitchen included, cleaned before every stay." },
  ];

  const photos = ["Living area", "Main bedroom", "Kitchen", "Desk and workspace", "Waterfront view", "Bathroom"];

  const pricing = [
    { plan: "Short stay", price: "£120", per: "per night", note: "Minimum three nights." },
    { plan: "Weekly", price: "£700", per: "per week", note: "Cleaning included." },
    { plan: "Monthly", price: "£2,200", per: "per month", note: "Bills included." },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="bg-slate-900 text-white px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-slate-400 mb-3">The Wharfside Loft</p>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">Your Manchester base, for a weekend or a season.</h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl">
            A two-bedroom waterfront loft in Salford Quays, with fast Wi-Fi, a proper desk, and everything sorted for short and mid-term stays.
          </p>
          <a href="#enquire" className="inline-block mt-8 bg-white text-slate-900 font-semibold px-6 py-3 rounded-lg hover:bg-slate-100">
            Check availability
          </a>
        </div>
      </section>

      {/* Highlights */}
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {highlights.map((h) => (
            <div key={h.title}>
              <h3 className="text-lg font-semibold text-slate-900">{h.title}</h3>
              <p className="mt-1 text-slate-600">{h.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Photo grid */}
      <section className="px-6 pb-16 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">A look around</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {photos.map((caption) => (
            <div key={caption} className="rounded-lg overflow-hidden bg-slate-100 border border-slate-200">
              <div className="h-32 bg-slate-200" />
              <p className="text-sm text-slate-600 px-3 py-2">{caption}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="px-6 py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Pricing</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {pricing.map((p) => (
              <div key={p.plan} className="bg-white rounded-xl border border-slate-200 p-6">
                <p className="text-sm font-medium text-slate-500">{p.plan}</p>
                <p className="text-3xl font-bold mt-1">{p.price}</p>
                <p className="text-sm text-slate-500">{p.per}</p>
                <p className="text-sm text-slate-600 mt-3">{p.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* Enquiry form */}
      <section id="enquire" className="px-6 py-16 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-2">Enquire</h2>
        <p className="text-slate-600 mb-6">Tell us your dates and we&apos;ll come back with availability.</p>
        <EnquiryForm />
      </section>
      {/* Footer */}
      <footer className="px-6 py-10 bg-slate-900 text-slate-300">
        <div className="max-w-4xl mx-auto">
          <p className="font-semibold text-white">The Wharfside Loft</p>
          <p className="text-sm mt-1">Salford Quays, Manchester. Short and mid-term stays, managed start to finish.</p>
        </div>
      </footer>
    </main>
  );
}