"use client";

import { ConfluenceIcon } from "@atlaskit/logo";

interface LogoProps {
  size?: "small" | "medium" | "large";
  showText?: boolean;
}

export function Logo({ size = "medium", showText = true }: LogoProps) {
  const getScale = () => {
    switch (size) {
      case "small": return "scale-75"; // 24px (32 * 0.75)
      case "large": return "scale-100"; // 32px (32 * 1.0)
      default: return "scale-87.5"; // 28px (32 * 0.875)
    }
  };

  return (
    <div className="flex items-center gap-1.5">
      <div className={`${getScale()} transform origin-center flex items-center justify-center`}>
        <ConfluenceIcon 
          appearance="brand" 
          shouldUseNewLogoDesign 
        />
      </div>
      {showText && (
        <h1 className="font-bold text-[#172B4D] leading-none">Confluence</h1>
      )}
    </div>
  );
}
