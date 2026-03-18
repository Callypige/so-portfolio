export default function Footer() {
  return (
    <footer className="border-t border-[#f0ece4] pt-6 flex justify-between items-center">
      <span className="text-xs text-gray-300">So&apos; Nourry Payn &copy; 2025</span>
      <div className="flex gap-6">
        <a href="https://github.com/callypige" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-400 hover:text-violet-600 transition-colors">github</a>
        <a href="https://linkedin.com" className="text-xs text-gray-400 hover:text-violet-600 transition-colors">linkedin</a>
        <a href="mailto:contact@example.com" className="text-xs text-gray-400 hover:text-violet-600 transition-colors">contact</a>
      </div>
    </footer>
  );
}