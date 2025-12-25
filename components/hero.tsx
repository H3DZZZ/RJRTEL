"use client";

import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Techy Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-blue-900/20 via-background to-background" />
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      <div className="absolute -top-[20%] -left-[10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute top-[40%] -right-[10%] w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse delay-1000" />

      <div className="container relative z-10 mx-auto px-6 text-center">
        <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-400 mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.5)]">
          <span className="relative flex h-2 w-2 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Established 2010
        </div>

        <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-white mb-8 drop-shadow-2xl">
          The{" "}
          <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(0,255,255,0.3)]">
            Full Circle
          </span>{" "}
          <br />
          Technology Ecosystem
        </h1>

        <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-300 mb-12 leading-relaxed opacity-90">
          From a global telecom leader connecting 700+ operators to a visionary
          provider of integrated healthcare technology and Generative AI. We
          bridge the gap between complex legacy systems and the data-driven
          future with absolute precision.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-500 text-white rounded-full px-10 h-16 text-lg shadow-[0_0_20px_rgba(37,99,235,0.5)] hover:shadow-[0_0_35px_rgba(37,99,235,0.7)] transition-all duration-300 border border-blue-400/50"
            onClick={() =>
              document
                .getElementById("services")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Our Solutions <MoveRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            size="lg"
            variant="ghost"
            className="text-white hover:bg-white/10 rounded-full px-10 h-16 text-lg border border-white/20 backdrop-blur-sm hover:border-white/40 transition-all duration-300"
            onClick={() =>
              document
                .getElementById("global-reach")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Global Network
          </Button>
        </div>
      </div>
    </section>
  );
}
