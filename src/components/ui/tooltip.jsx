"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "@/lib/utils";

const TooltipProvider = ({ delayDuration = 0, ...props }) => (
  <TooltipPrimitive.Provider delayDuration={delayDuration} {...props} />
);

const Tooltip = ({ ...props }) => (
  <TooltipProvider>
    <TooltipPrimitive.Root {...props} />
  </TooltipProvider>
);

const TooltipTrigger = ({ ...props }) => <TooltipPrimitive.Trigger {...props} />;

const TooltipContent = ({
  className,
  sideOffset = 5,
  color = "cyan",
  children,
  ...props
}) => {
  const neonColors = {
    cyan: "bg-[#0f172a] text-[#00ffff] shadow-[0_0_12px_#00ffff]",
    magenta: "bg-[#0f172a] text-[#ff00ff] shadow-[0_0_12px_#ff00ff]",
    purple: "bg-[#0f172a] text-[#8000ff] shadow-[0_0_12px_#8000ff]",
  };

  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        sideOffset={sideOffset}
        className={cn(
          "z-50 w-fit rounded-md px-3 py-1.5 text-xs text-balance",
          "animate-in fade-in-0 zoom-in-95",
          "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
          "data-[side=bottom]:slide-in-from-top-2",
          "data-[side=left]:slide-in-from-right-2",
          "data-[side=right]:slide-in-from-left-2",
          "data-[side=top]:slide-in-from-bottom-2",
          "transition-all duration-300 ease-in-out",
          neonColors[color], // Dynamic neon effect
          className
        )}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow className="size-2.5 rotate-45 opacity-80" />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
};

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
