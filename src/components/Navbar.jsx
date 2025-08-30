import { Rocket } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-600 to-indigo-600 shadow-lg shadow-fuchsia-700/30">
              <Rocket className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-semibold tracking-wide">Spacy</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#mission" className="hover:text-white transition-colors">Mission</a>
            <a href="#tech" className="hover:text-white transition-colors">Technology</a>
            <a href="#join" className="hover:text-white transition-colors">Join</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="#join" className="inline-flex items-center rounded-md bg-white/10 hover:bg-white/20 transition-colors px-4 py-2 text-sm font-medium">
              Explore
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
