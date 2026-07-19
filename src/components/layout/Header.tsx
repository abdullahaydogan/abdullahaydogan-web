import { ArrowUpRight, Menu, X } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "motion/react";
import { useEffect, useState } from "react";
import { Link } from "react-router";

import profilePhoto from "@/assets/photos/photo1.jpeg";
import Container from "@/components/ui/Container";
import { navigationItems } from "@/constants/navigation";
import { cn } from "@/utils/cn";

interface NavItem {
  href: string;
  label: string;
}

interface NavigationLinkProps {
  item: NavItem;
  onClick?: () => void;
  mobile?: boolean;
}

function NavigationLink({
  item,
  onClick,
  mobile = false,
}: NavigationLinkProps) {
  return (
    <a
      href={item.href}
      onClick={onClick}
      className={cn(
        "group relative font-medium text-ink-soft transition-colors duration-300",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/40",
        mobile
          ? "flex min-h-12 items-center rounded-xl px-4 text-[15px] hover:bg-surface-soft hover:text-ink"
          : "inline-flex h-10 items-center rounded-lg px-3 text-sm hover:text-ink",
      )}
    >
      <span>{item.label}</span>

      {!mobile ? (
        <span
          aria-hidden="true"
          className={cn(
            "absolute inset-x-3 bottom-1.5 h-px origin-center scale-x-0",
            "bg-brand-600 transition-transform duration-300",
            "group-hover:scale-x-100 group-focus-visible:scale-x-100",
          )}
        />
      ) : null}
    </a>
  );
}

interface ContactButtonProps {
  mobile?: boolean;
  onClick?: () => void;
}

function ContactButton({
  mobile = false,
  onClick,
}: ContactButtonProps) {
  return (
    <a
      href="#contact"
      onClick={onClick}
      aria-label="Contact Abdullah Aydoğan"
      className={cn(
        "group inline-flex shrink-0 items-center justify-center gap-2",
        "rounded-xl bg-ink font-medium !text-white",
        "shadow-[0_10px_30px_-14px_rgba(15,23,42,0.65)]",
        "transition-[transform,background-color,box-shadow] duration-300",
        "hover:-translate-y-0.5 hover:bg-brand-600 hover:!text-white",
        "hover:shadow-[0_14px_34px_-14px_rgba(79,70,229,0.6)]",
        "focus-visible:outline-none focus-visible:ring-2",
        "focus-visible:ring-brand-500 focus-visible:ring-offset-2",
        "focus-visible:ring-offset-canvas",
        mobile
          ? "mt-3 min-h-12 w-full px-5 text-[15px]"
          : "h-10 min-w-[124px] px-5 text-sm",
      )}
    >
      <span className="whitespace-nowrap !text-white">
        Let&apos;s talk
      </span>

      <ArrowUpRight
        aria-hidden="true"
        strokeWidth={2}
        className={cn(
          "size-4 shrink-0 !text-white",
          "transition-transform duration-300",
          "group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
        )}
      />
    </a>
  );
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 24);
  });

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function toggleMenu() {
    setIsMenuOpen((current) => !current);
  }

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <Container>
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="pointer-events-auto pt-3 sm:pt-4"
        >
          <div
            className={cn(
              "relative flex h-16 items-center justify-between rounded-2xl px-3",
              "border transition-all duration-500 sm:px-4",
              isScrolled || isMenuOpen
                ? [
                    "border-line/80 bg-canvas/88",
                    "shadow-[0_18px_50px_-24px_rgba(15,23,42,0.24)]",
                    "backdrop-blur-2xl",
                  ]
                : [
                    "border-transparent bg-canvas/55",
                    "shadow-[0_12px_40px_-30px_rgba(15,23,42,0.18)]",
                    "backdrop-blur-lg",
                  ],
            )}
          >
            <Link
              to="/"
              aria-label="Abdullah Aydoğan homepage"
              onClick={closeMenu}
              className={cn(
                "group inline-flex items-center gap-3 rounded-xl",
                "focus-visible:outline-none focus-visible:ring-2",
                "focus-visible:ring-brand-500/40",
              )}
            >
              <span
                className={cn(
                  "relative size-11 shrink-0 overflow-hidden rounded-full",
                  "border border-white/80 bg-surface",
                  "ring-1 ring-line/60",
                  "shadow-[0_10px_24px_-12px_rgba(15,23,42,0.45)]",
                  "transition-[transform,box-shadow,ring-color] duration-300",
                  "group-hover:scale-[1.04]",
                  "group-hover:shadow-[0_14px_30px_-14px_rgba(79,70,229,0.45)]",
                  "group-hover:ring-brand-300/80",
                )}
              >
                <img
                  src={profilePhoto}
                  alt="Abdullah Aydoğan"
                  width={44}
                  height={44}
                  loading="eager"
                  decoding="async"
                  draggable={false}
                  className="size-full object-cover object-[center_20%]"
                />

                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-ink/10 via-transparent to-white/25"
                />
              </span>

              <span className="hidden flex-col sm:flex">
                <span className="text-sm font-semibold leading-tight tracking-[-0.02em] text-ink">
                  Abdullah Aydoğan
                </span>

                <span className="mt-0.5 text-[11px] font-medium leading-tight text-ink-muted">
                  Full Stack Software Engineer
                </span>
              </span>
            </Link>

            <nav
              aria-label="Primary navigation"
              className={cn(
                "absolute left-1/2 hidden -translate-x-1/2 items-center",
                "rounded-xl border border-line/60 bg-surface/65 p-1",
                "shadow-[0_6px_18px_-14px_rgba(15,23,42,0.3)]",
                "backdrop-blur-xl lg:flex",
              )}
            >
              {navigationItems.map((item) => (
                <NavigationLink key={item.href} item={item} />
              ))}
            </nav>

            <div className="hidden lg:block">
              <ContactButton />
            </div>

            <button
              type="button"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              onClick={toggleMenu}
              className={cn(
                "relative inline-flex size-10 items-center justify-center",
                "rounded-xl border border-line/70 bg-surface/80",
                "text-ink-soft shadow-sm transition-all duration-300",
                "hover:border-line hover:bg-surface-soft hover:text-ink",
                "focus-visible:outline-none focus-visible:ring-2",
                "focus-visible:ring-brand-500/40 lg:hidden",
              )}
            >
              <AnimatePresence initial={false} mode="wait">
                {isMenuOpen ? (
                  <motion.span
                    key="close-icon"
                    initial={
                      shouldReduceMotion
                        ? false
                        : { opacity: 0, rotate: -45, scale: 0.8 }
                    }
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={
                      shouldReduceMotion
                        ? undefined
                        : { opacity: 0, rotate: 45, scale: 0.8 }
                    }
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.2,
                    }}
                    className="absolute"
                  >
                    <X aria-hidden="true" className="size-5" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu-icon"
                    initial={
                      shouldReduceMotion
                        ? false
                        : { opacity: 0, rotate: 45, scale: 0.8 }
                    }
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={
                      shouldReduceMotion
                        ? undefined
                        : { opacity: 0, rotate: -45, scale: 0.8 }
                    }
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.2,
                    }}
                    className="absolute"
                  >
                    <Menu aria-hidden="true" className="size-5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>

          <AnimatePresence>
            {isMenuOpen ? (
              <motion.div
                id="mobile-navigation"
                initial={
                  shouldReduceMotion
                    ? { opacity: 1 }
                    : { opacity: 0, y: -10, scale: 0.98 }
                }
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={
                  shouldReduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, y: -8, scale: 0.98 }
                }
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.25,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={cn(
                  "mt-2 overflow-hidden rounded-2xl border border-line/80",
                  "bg-canvas/95 p-2",
                  "shadow-[0_24px_60px_-28px_rgba(15,23,42,0.32)]",
                  "backdrop-blur-2xl lg:hidden",
                )}
              >
                <nav
                  aria-label="Mobile navigation"
                  className="flex flex-col"
                >
                  {navigationItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={
                        shouldReduceMotion
                          ? false
                          : { opacity: 0, x: -8 }
                      }
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: shouldReduceMotion ? 0 : 0.25,
                        delay: shouldReduceMotion ? 0 : index * 0.035,
                      }}
                    >
                      <NavigationLink
                        item={item}
                        mobile
                        onClick={closeMenu}
                      />
                    </motion.div>
                  ))}

                  <div className="mt-2 border-t border-line/70 px-2 pt-1">
                    <ContactButton mobile onClick={closeMenu} />
                  </div>
                </nav>

                <div className="mt-3 flex items-center justify-between border-t border-line/70 px-4 py-3">
                  <span className="text-xs font-medium text-ink-muted">
                    Available for opportunities
                  </span>

                  <span className="flex items-center gap-2 text-xs font-medium text-ink-soft">
                    <span className="relative flex size-2">
                      <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-50" />
                      <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                    </span>

                    Open to work
                  </span>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </motion.div>
      </Container>
    </header>
  );
}

export default Header;