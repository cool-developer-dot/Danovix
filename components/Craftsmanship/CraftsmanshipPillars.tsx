import { Gem, Infinity, PenTool } from "lucide-react";

import { cn } from "@/lib/cn";
import {
  CRAFTSMANSHIP_PILLARS,
  type CraftsmanshipPillar,
} from "@/lib/craftsmanship/constants";

import {
  craftsmanshipPillar,
  craftsmanshipPillarContent,
  craftsmanshipPillarDescription,
  craftsmanshipPillarHeading,
  craftsmanshipPillarIcon,
  craftsmanshipPillars,
} from "./craftsmanship.styles";

const PILLAR_ICONS = {
  "pen-tool": PenTool,
  gem: Gem,
  infinity: Infinity,
} as const;

function PillarIcon({ icon }: { icon: CraftsmanshipPillar["icon"] }) {
  const Icon = PILLAR_ICONS[icon];
  return <Icon className="h-[19px] w-[19px] stroke-[1.25]" aria-hidden="true" />;
}

export function CraftsmanshipPillars() {
  return (
    <div data-craftsmanship="pillars" className={craftsmanshipPillars}>
      {CRAFTSMANSHIP_PILLARS.map((pillar) => (
        <div
          key={pillar.id}
          data-craftsmanship="pillar"
          className={cn(craftsmanshipPillar, "group/pillar")}
        >
          <span className={craftsmanshipPillarIcon} aria-hidden="true">
            <PillarIcon icon={pillar.icon} />
          </span>
          <div className={craftsmanshipPillarContent}>
            <h3 className={craftsmanshipPillarHeading}>{pillar.heading}</h3>
            <p className={craftsmanshipPillarDescription}>
              {pillar.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
