import {
  Database,
  ShieldCheck,
  BrainCircuit,
  Globe2,
  Scan,
} from "lucide-react";

const pillars = [
  {
    icon: <Globe2 className="w-6 h-6" />,
    name: "Global Telecom",
    edge: "Connecting 700+ operators across 200 countries.",
    detail:
      "Reliable international carrier infrastructure for SMS hubbing, bulk messaging, and wholesale voice.",
  },
  {
    icon: <Database className="w-6 h-6" />,
    name: "Data Migration",
    edge: "Healing and moving legacy data with 100% integrity.",
    detail:
      "Specialized transition services for hospitals moving sensitive HIS and PACS data to modern platforms.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    name: "Careverse HIS",
    edge: "End-to-end automation for a paperless healthcare future.",
    detail:
      "IoT-driven EMR, digital IPD records, and full module integration (OPD, Pharmacy, Billing).",
  },
  {
    icon: <Scan className="w-6 h-6" />,
    name: "Medical Imaging",
    edge: "Seamless access and precision archiving for every diagnostic record.",
    detail:
      "Advanced PACS solutions and vendor-neutral archiving (VNA) with Secant Healthcare.",
  },
  {
    icon: <BrainCircuit className="w-6 h-6" />,
    name: "AI & Risk Mgmt",
    edge: "Predictive intelligence for a safer, smarter clinical journey.",
    detail:
      "GenAI powered by Consint AI for fraud detection (Risk.ai) and claims automation (AutoClaim.ai).",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-32 bg-background relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-blue-900/5 pointer-events-none" />
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-20 relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">
            Departments & Services
          </h2>
          <p className="text-slate-400">
            Tailored strengths to fit the changing needs of the global industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="p-10 rounded-3xl bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-all border border-white/10 hover:border-blue-500/30 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-600/20 flex items-center justify-center text-blue-400 mb-6 shadow-[0_0_15px_rgba(37,99,235,0.2)] group-hover:scale-110 transition-transform duration-300">
                {p.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{p.name}</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <span className="text-blue-400 font-bold text-sm uppercase tracking-tighter">
                    The Edge:
                  </span>
                  <p className="text-slate-300 font-medium">
                    {p.edge.replace(/\[cite: \d+\]/g, "")}
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="text-slate-500 font-bold text-sm uppercase tracking-tighter">
                    Mission:
                  </span>
                  <p className="text-slate-400">
                    {p.detail.replace(/\[cite: [\d, ]+\]/g, "")}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
