import { Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

import Container from "@/components/ui/Container";
import { navigationItems } from "@/constants/navigation";

const currentYear = new Date().getFullYear();

const socialLinkClassName =
  "inline-flex size-10 items-center justify-center rounded-full border border-line bg-surface text-ink-soft transition-[color,border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-500";

interface NavItem {
  href: string;
  label: string;
}

interface FooterNavLinkProps {
  item: NavItem;
}

function FooterNavLink({ item }: FooterNavLinkProps) {
  return (
    <a href={item.href} className="w-fit text-sm text-ink-soft transition-colors hover:text-brand-600">
      {item.label}
    </a>
  );
}

function ContactSocialLink() {
  return (
    <a href="/#contact" aria-label="Go to contact section" className={socialLinkClassName}>
      <Mail aria-hidden="true" size={18} />
    </a>
  );
}

function GithubSocialLink() {
  return (
    <a href="https://github.com/abdullahaydogan" target="_blank" rel="noreferrer" aria-label="GitHub profile" className={socialLinkClassName}>
      <FaGithub aria-hidden="true" size={18} />
    </a>
  );
}

function LinkedinSocialLink() {
  return (
    <a href="https://www.linkedin.com/in/abdullahaydogann/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className={socialLinkClassName}>
      <FaLinkedinIn aria-hidden="true" size={18} />
    </a>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line bg-surface/70">
      <Container>
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div className="inline-flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-lg bg-brand-600 text-sm font-semibold text-white">
                AA
              </span>

              <span className="text-sm font-semibold text-ink">
                Abdullah Aydoğan
              </span>
            </div>

            <p className="mt-3 max-w-xs text-sm leading-6 text-ink-soft">
              Full stack developer building reliable web applications
              from backend to browser.
            </p>

            <span className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs text-ink-muted">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
              </span>
              open to work
            </span>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.14em] text-ink-muted uppercase">
              Navigate
            </p>

            <nav aria-label="Footer navigation" className="mt-4 flex flex-col gap-2.5">
              {navigationItems.map((item) => (
                <FooterNavLink key={item.href} item={item} />
              ))}
            </nav>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.14em] text-ink-muted uppercase">
              Connect
            </p>

            <div className="mt-4 flex items-center gap-2">
              <ContactSocialLink />
              <GithubSocialLink />
              <LinkedinSocialLink />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-line py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-ink-muted">
            © {currentYear} Abdullah Aydoğan. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;