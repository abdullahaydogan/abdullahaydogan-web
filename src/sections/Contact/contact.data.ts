import type { ComponentType } from "react";
import { Mail } from "lucide-react";
import type { IconType } from "react-icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";

interface IconProps {
  size?: number | string;
  className?: string;
}

export interface ContactChannel {
  id: string;
  label: string;
  value: string;
  href: string;
  icon: IconType | ComponentType<IconProps>;
  copyable?: boolean;
}

export const contactChannels: readonly ContactChannel[] = [
  {
    id: "email",
    label: "Email",
    value: "abdullahaydgn0@gmail.com",
    href: "mailto:abdullahaydgn0@gmail.com",
    icon: Mail,
    copyable: true,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "abdullahaydogann",
    href: "https://linkedin.com/in/abdullahaydogann",
    icon: FaLinkedin,
  },
  {
    id: "github",
    label: "GitHub",
    value: "abdullahaydogan",
    href: "https://github.com/abdullahaydogan",
    icon: FaGithub,
  },
] as const;