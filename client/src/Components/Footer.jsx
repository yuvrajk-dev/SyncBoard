const Footer = () => {
  return (
    <footer className="w-full border-t border-(--border-muted) bg-(--bg) px-6 py-3 flex items-center justify-between text-sm text-[var(--text-muted)]">
      {/* Left */}
      <div>© {new Date().getFullYear()} SyncBoard</div>

      {/* Center */}
      <div className="hidden md:flex gap-4">
        <span className="hover:text-(--text) cursor-pointer transition">
          About
        </span>
        <span className="hover:text-(--text) cursor-pointer transition">
          Privacy
        </span>
        <span className="hover:text-(--text) cursor-pointer transition">
          Terms
        </span>
      </div>

      {/* Right */}
      <div className="flex gap-3">
        <span className="hover:text-(--text) cursor-pointer transition">
          GitHub
        </span>
        <span className="hover:text-(--text) cursor-pointer transition">
          Contact
        </span>
      </div>
    </footer>
  );
};

export default Footer;
