"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// TODO(saved-vehicles): the saved flag is local UI state only. Wire it to the
// real saved-list mutation (features/vehicles actions) when the backend
// contract lands (docs/TASKS.md, NEEDS-BACKEND: saved vehicles list).

type RemoveSavedButtonProps = {
  vehicleTitle: string;
  defaultSaved?: boolean;
};

export function RemoveSavedButton({
  vehicleTitle,
  defaultSaved = true,
}: RemoveSavedButtonProps) {
  const [saved, setSaved] = useState(defaultSaved);

  return (
    <Button
      type="button"
      variant="iconLight"
      size="icon"
      aria-pressed={saved}
      aria-label={
        saved
          ? `Remove ${vehicleTitle} from saved vehicles`
          : `Save ${vehicleTitle} to saved vehicles`
      }
      title="Remove from shortlist"
      className="absolute top-3 right-3 shadow-sm"
      onClick={() => setSaved((current) => !current)}
    >
      <Heart
        aria-hidden="true"
        strokeWidth={1.5}
        className={cn("size-5", saved ? "fill-danger text-danger" : "text-ink")}
      />
    </Button>
  );
}
