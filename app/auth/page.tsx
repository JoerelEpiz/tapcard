import Link from "next/link";
import Navbar from "../components/Navbar";

export default function AuthPage() {
  return (
    <div className="min-h-screen bg-warm-white text-graphite">
      {/* Navigation */}
      <Navbar />

      {/* Authentication Section */}
      <main className="flex min-h-[calc(100vh-80px)] items-center justify-center px-6 py-12">
        <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-lg sm:p-10">
          {/* Logo */}
          <Link
            href="/"
            className="mb-8 block text-center text-3xl font-bold tracking-tight"
          >
            Tap<span className="text-brand">Card</span>
          </Link>

          {/* Heading */}
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold text-graphite">
              Welcome to TapCard
            </h1>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Create your account or log in to manage your digital business
              card.
            </p>
          </div>

          {/* Log In */}
          <Link
            href="/login"
            className="block w-full rounded-full bg-brand px-6 py-3 text-center font-semibold text-white transition hover:bg-brand-dark"
          >
            Log In
          </Link>

          {/* Sign Up */}
          <Link
            href="/signup"
            className="mt-4 block w-full rounded-full border-2 border-brand px-6 py-3 text-center font-semibold text-brand transition hover:bg-mint"
          >
            Create an Account
          </Link>

          {/* Back to Home */}
          <p className="mt-8 text-center text-sm text-slate-500">
            <Link href="/" className="font-medium text-brand hover:underline">
              ← Back to Home
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}