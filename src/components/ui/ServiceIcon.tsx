import {
  Boxes,
  Building2,
  Cog,
  Zap,
  Truck,
  Sofa,
  PaintRoller,
  type LucideIcon,
} from "lucide-react";
import type { ServiceIconKey } from "@/data/services";
import { cn } from "@/lib/cn";

const iconMap: Record<ServiceIconKey, LucideIcon> = {
  procurement: Boxes,
  construction: Building2,
  mechanical: Cog,
  electrical: Zap,
  transport: Truck,
  interior: Sofa,
  coating: PaintRoller,
};

type Props = {
  iconKey: ServiceIconKey;
  size?: number;
  className?: string;
};

export function ServiceIcon({ iconKey, size = 32, className }: Props) {
  const Icon = iconMap[iconKey];
  return (
    <Icon
      size={size}
      strokeWidth={1.4}
      className={cn("text-current", className)}
      aria-hidden
    />
  );
}
