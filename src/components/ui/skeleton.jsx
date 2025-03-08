import { cn } from "@/lib/utils";

const Skeleton = ({ className, color = "cyan", ...props }) => {
  const neonColors = {
    cyan: "bg-[#00ffff]/20 shadow-[0_0_15px_rgba(0,255,255,0.5)]",
    magenta: "bg-[#ff00ff]/20 shadow-[0_0_15px_rgba(255,0,255,0.5)]",
    purple: "bg-[#8000ff]/20 shadow-[0_0_15px_rgba(128,0,255,0.5)]",
  };

  return (
    <div
      data-slot="skeleton"
      className={cn(
        "animate-pulse rounded-lg backdrop-blur-md", // Soft blurring effect
        "transition-all duration-700 ease-in-out will-change-transform", // Smooth neon pulse
        neonColors[color], // Dynamic neon effect
        className
      )}
      {...props}
    />
  );
};

export { Skeleton };
