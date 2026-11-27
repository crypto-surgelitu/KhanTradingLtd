import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// DESIGN.md Section 4 button spec: 48px desktop / 44px mobile, 24px side
// padding, Inter 600 15px, radius 6px. Press feedback scales to 0.98 (3.4).
// Shapes live in `size`, colours in `variant`, so icon buttons compose cleanly.
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-body text-button transition-colors outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink disabled:pointer-events-none disabled:opacity-50 motion-safe:active:scale-98",
  {
    variants: {
      variant: {
        primary: "bg-ink text-white hover:bg-graphite",
        secondary:
          "border border-ink bg-transparent text-ink hover:bg-ink hover:text-white",
        // Accent is for dark sections only (DESIGN.md Section 4).
        accent: "bg-champagne text-ink hover:bg-champagne-dark",
        ghostWhite:
          "bg-white/10 text-white backdrop-blur-md hover:bg-white/20 focus-visible:outline-white",
        destructive: "bg-danger text-white hover:bg-danger/90",
        link: "text-ink underline decoration-champagne decoration-1 underline-offset-4 hover:text-champagne-dark",
        // Light-surface icon button: white with stone border (Section 4).
        iconLight: "border border-stone bg-white text-ink hover:bg-champagne-tint",
        // Dark-surface adaptation used on the ink header.
        iconDark: "bg-graphite text-white hover:bg-champagne hover:text-ink",
      },
      size: {
        default: "h-11 rounded-sm px-6 lg:h-12",
        icon: "size-11 rounded-full p-0",
        link: "h-auto p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "primary",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
