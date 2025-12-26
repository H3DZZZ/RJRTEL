export default function GlobalReach() {
  return (
    <section id="global-reach" className="py-24 bg-[#0a0a0b] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-8">
              Always-On 24/7 <br /> Proactive Support
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/5">
                <div className="text-blue-500 font-bold">24/7</div>
                <p className="text-slate-400">
                  Round-the-clock monitoring and technical expertise across all
                  time zones.
                </p>
              </div>
              <div className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/5">
                <div className="text-blue-500 font-bold">0%</div>
                <p className="text-slate-400">
                  Downtime for critical systems. We enable continuous global
                  operations.
                </p>
              </div>
              <p className="text-slate-500 italic mt-4">
                &quot;We provide reliable international carrier infrastructure
                for SMS hubbing and wholesale voice.&quot;
              </p>
            </div>
          </div>

          <div className="relative">
            {/* Background map graphic would go here */}
            <div className="p-10 rounded-[2.5rem] bg-linear-to-br from-blue-600 to-blue-800 text-white shadow-2xl shadow-blue-900/20">
              <h3 className="text-xl font-bold mb-8 italic">
                &quot;Every second matters&quot;
              </h3>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold mb-1">700+</div>
                  <div className="text-blue-200 text-xs uppercase tracking-widest">
                    Global Operators
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">650+</div>
                  <div className="text-blue-200 text-xs uppercase tracking-widest">
                    Interconnections
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">200</div>
                  <div className="text-blue-200 text-xs uppercase tracking-widest">
                    Countries
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">3</div>
                  <div className="text-blue-200 text-xs uppercase tracking-widest">
                    Strategic Hubs
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
