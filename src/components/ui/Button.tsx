import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";

type CommonProps = {
  variant?: Variant;
  withArrow?: boolean;
  className?: string;
  children: React.ReactNode;
};

type LinkProps = CommonProps & { href: string; external?: boolean };
type ButtonProps = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };

const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-offwhite hover:bg-brand transition-colors shadow-lg shadow-ink/10",
  secondary:
    "bg-brand text-white hover:bg-brand-hover transition-colors",
  ghost:
    "border border-ink/20 text-ink hover:border-brand hover:text-brand transition-colors",
};

const base =
  "inline-flex items-center gap-3 px-6 py-3.5 font-display text-base tracking-wider uppercase group";

export function Button(props: LinkProps | ButtonProps) {
  const { variant = "primary", withArrow = true, className, children } = props;
  const classes = cn(base, variants[variant], className);

  const inner = (
    <>
      <span>{children}</span>
      {withArrow && (
        <ArrowRight
          size={18}
          className="transition-transform group-hover:translate-x-1"
        />
      )}
    </>
  );

  if ("href" in props && props.href) {
    if (props.external) {
      return (
        <a
          href={props.href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {inner}
        </a>
      );
    }
    return (
      <Link href={props.href} className={classes}>
        {inner}
      </Link>
    );
  }

  const { variant: _v, withArrow: _a, className: _c, children: _ch, ...rest } =
    props as ButtonProps;
  void _v; void _a; void _c; void _ch;
  return (
    <button {...rest} className={classes}>
      {inner}
    </button>
  );
}
