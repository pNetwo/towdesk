import type { LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  label: string;
  href: string;
};

export function NavItem({ icon: Icon, label, href, ...rest }: Props) {
  return (
    <div className="">
      <li className="hidden md:flex items-3 hover:text-white">
        <a
          href={href}
          className="flex gap-2 mb-3 relative after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 after:bg-zinc-300 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
          {...rest}
        >
          <Icon />

          {label}
        </a>
      </li>

      <li className="md:hidden text-xs hover:text-blue-100">
        <a
          href={href}
          className="flex flex-col justify-center items-center gap-0.5 relative after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 after:bg-blue-100 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
          {...rest}
        >
          <Icon size={20} />
          {label}
        </a>
      </li>
    </div>
  );
}
