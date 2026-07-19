"use client";

import { useState, type MouseEvent } from "react";
import { Check, Copy } from "lucide-react";

import type { ContactChannel } from "./contact.data";

interface ContactCardProps {
  channel: ContactChannel;
}

function ContactCard({ channel }: ContactCardProps) {
  const [copied, setCopied] = useState(false);
  const Icon = channel.icon;

  const linkTarget = channel.copyable ? undefined : "_blank";
  const linkRel = channel.copyable ? undefined : "noopener noreferrer";

  async function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (!channel.copyable) {
      return;
    }

    event.preventDefault();

    try {
      await navigator.clipboard.writeText(channel.value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.open(channel.href, "_blank", "noopener,noreferrer");
    }
  }

  const cardClassName =
    "group relative flex h-full flex-col justify-between gap-5 rounded-panel border border-white/95 bg-surface/88 p-5 shadow-card backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-glow";

  return (
    <a href={channel.href} onClick={handleClick} target={linkTarget} rel={linkRel} className={cardClassName}>
      <div className="flex items-start justify-between">
        <span className="flex size-11 items-center justify-center rounded-xl border border-line bg-surface-soft/80 text-ink-muted transition-colors duration-300 group-hover:border-brand-200 group-hover:text-brand-600">
          <Icon aria-hidden="true" size={20} />
        </span>

        {channel.copyable ? (
          <span className="flex size-7 items-center justify-center rounded-full text-ink-muted transition-colors duration-300 group-hover:text-brand-600">
            {copied ? (
              <Check aria-hidden="true" size={15} />
            ) : (
              <Copy aria-hidden="true" size={15} />
            )}
          </span>
        ) : null}
      </div>

      <div className="min-w-0">
        <p className="text-xs font-medium tracking-wide text-ink-muted uppercase">
          {channel.label}
        </p>

        <p className="mt-1 truncate text-sm font-semibold text-ink">
          {copied ? "Copied to clipboard" : channel.value}
        </p>
      </div>
    </a>
  );
}

export default ContactCard;