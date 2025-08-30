export default function Footer() {
  return (
    <footer id="join" className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div>
            <h3 className="text-xl font-semibold">Join Spacy</h3>
            <p className="mt-2 text-sm text-white/70">Engineers, scientists, and dreamers — help us build a multi-planetary future.</p>
          </div>
          <form className="md:col-span-2 flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-md bg-white/5 px-4 py-3 text-sm outline-none ring-1 ring-inset ring-white/10 focus:ring-fuchsia-500/60 placeholder:text-white/50"
              aria-label="Email address"
            />
            <button type="submit" className="shrink-0 rounded-md bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-6 py-3 text-sm font-semibold hover:from-fuchsia-500 hover:to-indigo-500 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Spacy. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white/80">Privacy</a>
            <a href="#" className="hover:text-white/80">Terms</a>
            <a href="#" className="hover:text-white/80">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
