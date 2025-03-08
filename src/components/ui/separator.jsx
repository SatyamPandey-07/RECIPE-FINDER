"use client";

import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { cn } from "@/lib/utils";

function Separator({ className, orientation = "horizontal", decorative = true, ...props }) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator-root"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "relative overflow-hidden group",
        "data-[orientation=horizontal]:h-[2px] data-[orientation=horizontal]:w-full",
        "data-[orientation=vertical]:h-full data-[orientation=vertical]:w-[2px]",
        className
      )}
      {...props}
    >
      {/* Neon Pulse Glow */}
      <div className="absolute inset-0 animate-pulse-fast bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 shadow-[0_0_15px_rgba(0,255,255,0.8)]"></div>

      {/* Hover Effect - Intensified Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 blur-md"></div>

      {/* Wave Animation */}
      <div className="absolute inset-0 opacity-50 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute inset-0 h-[4px] bg-[radial-gradient(circle,_rgba(0,255,255,0.5)_0%,_rgba(0,0,0,0)_70%)] animate-wave"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-2 left-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-particle"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-blue-500 rounded-full animate-particle"></div>
        <div className="absolute bottom-1 left-2/3 w-1 h-1 bg-purple-500 rounded-full animate-particle"></div>
      </div>

      {/* Cyberpunk Flicker Effect */}
      <div className="absolute inset-0 opacity-10 group-hover:opacity-50 animate-flicker bg-white/10"></div>
    </SeparatorPrimitive.Root>
  );
}

export { Separator };
