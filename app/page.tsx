import Navbar from "./components/Navbar";
import CTA from "./components/CTA";
import Plan from "./components/Plans";


export default function Home() {
  return (
    <main className="min-h-screen bg-warm-white text-graphite">
      <header className="border-b border-slate-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <a href="#" className="text-2xl font-bold tracking-tight">
            Tap<span className="text-brand">Card</span>
          </a>
          <Navbar />
        </div>
      </header>
      <CTA />
      <Plan />
      <footer className="bg-graphite px-6 py-8 text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-white/70 sm:flex-row">
          <p>
            © 2026 TapCard. All rights reserved.
          </p>
          <p>Connecting people, one tap at a time.</p>
        </div>
      </footer>
    </main>
  );
}