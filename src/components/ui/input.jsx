import * as React from "react";
import { cn } from "@/lib/utils";

function Input({ className, type = "text", ...props }) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "w-full h-10 px-4 py-2 rounded-lg border border-gray-600 bg-black/80 text-white placeholder-gray-400",
        "shadow-md transition-all duration-300 outline-none focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/70",
        "hover:border-neon-pink/70 hover:ring-neon-pink/40",
        "selection:bg-neon-blue selection:text-white",
        "disabled:pointer-events-none disabled:opacity-50",
        "file:text-white file:bg-transparent file:border-none file:cursor-pointer",
        className
      )}
      {...props}
    />
  );
}

export { Input };
