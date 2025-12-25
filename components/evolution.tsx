const milestones = [
  {
    year: "2010",
    title: "Telecom Hub",
    desc: "Launched as a specialized telecom hub, becoming a major player in the global market.",
  },
  {
    year: "2019",
    title: "Health Tech Pivot",
    desc: "Specialized into healthcare with Data Migration for hospital HIS and PACS systems.",
  },
  {
    year: "2021",
    title: "Caresoft HIS",
    desc: "Partnered with Caresoft to deploy advanced Hospital Information Systems (HIS).",
  },
  {
    year: "2022",
    title: "Secant Healthcare",
    desc: "Partnered with Secant Healthcare for industry-leading medical imaging and archiving.",
  },
  {
    year: "2025",
    title: "Consint AI",
    desc: "Strategic partnership with Consint AI for GenAI fraud detection and clinical intelligence.",
  },
];

export default function Evolution() {
  return (
    <section
      id="evolution"
      className="py-24 bg-background border-t border-white/5"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-16">
          Strategic Evolution
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {milestones.map((m, idx) => (
            <div
              key={idx}
              className="group relative p-8 rounded-2xl border border-white/5 bg-white/2 hover:bg-white/5 transition-all"
            >
              <div className="text-blue-500 font-mono text-sm mb-4 tracking-widest">
                {m.year}
              </div>
              <h3 className="text-white text-lg font-semibold mb-2">
                {m.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">{m.desc}</p>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-600 transition-all group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
