import { Rocket, Stars, SatelliteDish, Shield, Cpu, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Reusable Heavy-Lift',
    desc: 'Next-gen launch vehicles with autonomous landing and rapid reflight to lower access-to-orbit costs.',
  },
  {
    icon: SatelliteDish,
    title: 'Deep-Space Comms',
    desc: 'Quantum-safe, high-bandwidth relays enabling resilient communications across cislunar and beyond.',
  },
  {
    icon: Cpu,
    title: 'Autonomous Ops',
    desc: 'Onboard AI copilots for guidance, navigation, and control in extreme environments.',
  },
  {
    icon: Shield,
    title: 'Radiation Shielding',
    desc: 'Metamaterial hulls and active fields safeguarding crews and critical payloads.',
  },
];

export default function Features() {
  return (
    <section id="tech" className="relative py-24 bg-gradient-to-b from-black via-black to-[#08070d]">
      <div className="absolute inset-0 pointer-events-none opacity-40" aria-hidden>
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full blur-3xl bg-fuchsia-600/20" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
            <Stars className="h-6 w-6 text-fuchsia-400" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold">Technology forged for the frontier</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            From propulsion to protection, Spacy integrates breakthrough hardware and software to unlock sustainable exploration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <article key={i} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-fuchsia-500/40 transition-colors">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-fuchsia-600/10 to-indigo-600/10" />
              <div className="relative">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-white/10">
                  <f.icon className="h-5 w-5 text-fuchsia-400" />
                </div>
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-white/70">{f.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div id="mission" className="mt-20 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="p-8 md:col-span-2">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-fuchsia-400" />
                Our Mission
              </h3>
              <p className="mt-4 text-white/80">
                Spacy exists to make the cosmos accessible, safe, and inspiring. We are building an end-to-end space stack that connects Earth to orbit and beyond: launch, in-space transport, surface systems, and infrastructure. Through radical reuse and autonomous operations, we aim to reduce cost by orders of magnitude and increase cadence for scientific discovery and human presence off-world.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs">Cislunar logistics</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs">Mars cargo</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs">Planetary science</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs">Crew systems</span>
              </div>
            </div>
            <div className="p-8 bg-white/[0.03] border-t md:border-t-0 md:border-l border-white/10">
              <h4 className="text-sm font-semibold text-white/80">Next Launch</h4>
              <div className="mt-3 text-3xl font-bold tracking-tight">SP-07 Asteria</div>
              <p className="mt-1 text-sm text-white/70">Window opens Q4 — Cislunar demonstration flight.</p>
              <div className="mt-5">
                <a href="#join" className="inline-flex items-center rounded-md bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-5 py-2 text-sm font-semibold shadow-lg shadow-fuchsia-700/30 hover:from-fuchsia-500 hover:to-indigo-500 transition-colors">
                  Get Updates
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
