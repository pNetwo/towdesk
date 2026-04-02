import type { LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  label: string;
  href: string;
};

export function NavItem({ icon: Icon, label, href, ...rest }: Props) {
  return (
    <li className="flex gap-2 items-center hover:text-white">
      <Icon />
      <a
        href={href}
        className="relative after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 after:bg-zinc-300 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
        {...rest}
      >
        {label}
      </a>
    </li>
  );
}
