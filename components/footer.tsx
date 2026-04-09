export function Footer() {
  return (
    <footer className="bg-charcoal px-6 sm:px-10 py-10 border-t border-cream/5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <a href="/" className="text-xs tracking-[3px] uppercase text-cream/25 transition-colors duration-300 hover:text-cream/40">
          Scripted / AV
        </a>
        <div className="hidden sm:flex items-center gap-6 text-xs text-cream/15">
          <a href="/experiential" className="transition-colors duration-300 hover:text-cream/30">Experiential</a>
          <a href="/installations" className="transition-colors duration-300 hover:text-cream/30">Installations</a>
          <a href="/corporate" className="transition-colors duration-300 hover:text-cream/30">Corporate</a>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-xs text-cream/15">
            &copy; {new Date().getFullYear()} Toronto
          </p>
          <a href="https://www.instagram.com/" className="text-xs text-cream/20 transition-colors duration-300 hover:text-cream/40">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
