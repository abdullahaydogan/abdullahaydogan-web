import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";

import Container from "@/components/ui/Container";
import { getButtonClassName } from "@/components/ui/button.styles";

function NotFoundPage() {
  return (
    <main className="relative isolate flex min-h-screen items-center overflow-hidden bg-canvas py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -top-40 left-1/2 size-[34rem] -translate-x-1/2 rounded-full bg-brand-200/40 blur-3xl" />

        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgb(148 163 184 / 0.16) 1px, transparent 1px), linear-gradient(to bottom, rgb(148 163 184 / 0.16) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "linear-gradient(to bottom, black, transparent 85%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black, transparent 85%)",
          }}
        />
      </div>

      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-[0.24em] text-brand-600 uppercase">
            Error 404
          </p>

          <h1 className="mt-5 text-5xl font-semibold tracking-[-0.045em] text-ink sm:text-6xl">
            This page does not exist.
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-ink-soft sm:text-lg">
            The page may have been moved, removed or the address may
            be incorrect.
          </p>

          <div className="mt-9 flex justify-center">
            <Link
              to="/"
              className={getButtonClassName({
                variant: "primary",
                size: "lg",
              })}
            >
              <ArrowLeft aria-hidden="true" size={18} />
              Return home
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}

export default NotFoundPage;