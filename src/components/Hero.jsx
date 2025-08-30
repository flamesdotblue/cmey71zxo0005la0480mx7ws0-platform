import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.25),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(236,72,153,0.18),transparent_45%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="pointer-events-none flex min-h-[90vh] flex-col justify-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-6xl font-bold leading-tight tracking-tight drop-shadow-[0_2px_20px_rgba(168,85,247,0.25)]">
              Spacy — charting the next era of human space exploration
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/80">
              We build cybernetic spacecraft and autonomous systems to extend humanity's reach across the solar system. Join us as we launch beyond the possible.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 pointer-events-auto">
              <a href="#mission" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-6 py-3 text-sm font-semibold shadow-lg shadow-fuchsia-700/30 hover:from-fuchsia-500 hover:to-indigo-500 transition-colors">
                Our Mission
              </a>
              <a href="#tech" className="inline-flex items-center justify-center rounded-md bg-white/10 hover:bg-white/20 px-6 py-3 text-sm font-semibold transition-colors">
                Explore Technology
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
