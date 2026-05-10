import {
  Gauge,
  ShieldCheck,
  HardHat,
  Handshake,
  Lightbulb,
  Users,
  Leaf,
  type LucideIcon,
} from "lucide-react";
import type { MissionItem } from "@/data/mission";

const map: Record<MissionItem["iconKey"], LucideIcon> = {
  speed: Gauge,
  shield: ShieldCheck,
  hardhat: HardHat,
  handshake: Handshake,
  innovation: Lightbulb,
  team: Users,
  leaf: Leaf,
};

export function MissionIcon({
  iconKey,
  size = 24,
}: {
  iconKey: MissionItem["iconKey"];
  size?: number;
}) {
  const Icon = map[iconKey];
  return <Icon size={size} strokeWidth={1.5} aria-hidden />;
}
