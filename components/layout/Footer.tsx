export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-8">
      <div className="container mx-auto px-6 text-center">

        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Divyashree Nagaraj
        </p>

        <p className="mt-2 text-sm text-slate-600">
          Built with{" "}
          <span className="text-slate-400">Next.js</span>
          {" • "}
          <span className="text-slate-400">TypeScript</span>
          {" • "}
          <span className="text-slate-400">Tailwind CSS</span>
        </p>

      </div>
    </footer>
  );
}