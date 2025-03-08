import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const SheetContent = React.memo(({ className, children, side = "right", overlay = true, ...props }) => {
  return (
    <SheetPrimitive.Portal>
      {overlay && (
        <SheetPrimitive.Overlay
          className="fixed inset-0 bg-black/50 backdrop-blur-xl transition-opacity data-[state=open]:opacity-100 data-[state=closed]:opacity-0"
          aria-hidden="true"
        />
      )}
      <SheetPrimitive.Content
        data-slot="sheet-content"
        className={cn(
          "fixed z-50 flex flex-col gap-4 border border-[#00ffff]/50",
          "bg-[#0d0d0d]/90 backdrop-blur-lg shadow-[0_0_20px_rgba(0,255,255,0.4)] transition-transform",
          "data-[state=open]:animate-in data-[state=closed]:animate-out",
          "data-[state=open]:duration-500 data-[state=closed]:duration-300 ease-in-out",
          side === "right" &&
            "data-[state=closed]:translate-x-full data-[state=open]:translate-x-0 inset-y-0 right-0 h-full w-full sm:w-3/4 sm:max-w-sm border-l",
          side === "left" &&
            "data-[state=closed]:-translate-x-full data-[state=open]:translate-x-0 inset-y-0 left-0 h-full w-full sm:w-3/4 sm:max-w-sm border-r",
          side === "top" &&
            "data-[state=closed]:-translate-y-full data-[state=open]:translate-y-0 inset-x-0 top-0 h-auto border-b",
          side === "bottom" &&
            "data-[state=closed]:translate-y-full data-[state=open]:translate-y-0 inset-x-0 bottom-0 h-auto border-t",
          className
        )}
        {...props}
      >
        {children}
        <SheetPrimitive.Close
          className="absolute top-4 right-4 flex items-center justify-center size-8 rounded-full bg-[#00ffff]/30 transition-all hover:bg-[#00ffff]/50 focus:ring-2 focus:ring-[#00ffff] focus:outline-none"
        >
          <XIcon className="size-5 text-[#00ffff] drop-shadow-glow" />
          <span className="sr-only">Close</span>
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPrimitive.Portal>
  );
});

SheetContent.displayName = "SheetContent";

export { SheetContent };
