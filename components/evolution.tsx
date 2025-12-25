const milestones = [
  { year: "2010", detail: "Launched as a specialized telecom hub[cite: 7]." },
  {
    year: "2019",
    detail:
      "Transitioned into healthcare with HIS and PACS Data Migration[cite: 8].",
  },
  {
    year: "2021",
    detail:
      "Partnered with Caresoft for advanced Hospital Information Systems[cite: 9].",
  },
  {
    year: "2025",
    detail:
      "Partnered with Consint AI for Generative AI-driven fraud detection[cite: 12].",
  },
];

export default function Evolution() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-16">
          Our Strategic Evolution [cite: 5]
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {milestones.map((m, idx) => (
            <div
              key={idx}
              className="relative p-6 border-l-4 border-blue-600 bg-slate-50 rounded-r-lg"
            >
              <span className="text-2xl font-bold text-blue-600">{m.year}</span>
              <p className="mt-2 text-slate-600 leading-snug">{m.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
