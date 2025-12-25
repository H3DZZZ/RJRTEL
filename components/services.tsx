import { Globe, ShieldCheck, Database, Cpu } from "lucide-react";

const services = [
  {
    title: "Global Telecommunications",
    desc: "Connecting 700+ operators across 200 countries with absolute reliability[cite: 17].",
    icon: <Globe className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "Healthcare Data Migration",
    desc: "Healing and moving legacy HIS and PACS data with 100% integrity[cite: 21, 22].",
    icon: <Database className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "AI & Risk Management",
    desc: "Utilizing Generative AI for fraud detection and claims automation[cite: 34].",
    icon: <Cpu className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "Careverse HIS",
    desc: "IoT-driven EMR and end-to-end automation for a paperless future[cite: 25, 27].",
    icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {services.map((s, idx) => (
            <div
              key={idx}
              className="flex gap-6 p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex-shrink-0">{s.icon}</div>
              <div>
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
