import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative bg-slate-900 py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Bridging the Gap Between Legacy Systems and the Data-Driven Future
          </h1>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            Founded in 2010, RJRTEL has evolved from a global telecom leader
            into a visionary provider of integrated healthcare technology and
            Generative AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8"
            >
              Explore Our Solutions
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-slate-900"
            >
              Global Connectivity [cite: 86]
            </Button>
          </div>
        </div>
      </div>
      {/* Decorative background element representing global network */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 to-transparent"></div>
      </div>
    </section>
  );
}
