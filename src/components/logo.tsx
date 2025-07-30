"use client";

import { ConfluenceIcon } from '@atlaskit/logo';

interface LogoProps {
  size?: "small" | "medium" | "large";
  showText?: boolean;
}

export function Logo({ size = "medium", showText = true }: LogoProps) {
  const sizeClasses = {
    small: "w-5 h-5",
    medium: "w-6 h-6", 
    large: "w-8 h-8"
  };

  return (
    <div className="flex items-center gap-1.5">
      <div className={sizeClasses[size]}>
        <ConfluenceIcon appearance="brand" shouldUseNewLogoDesign size="small" />
      </div>
      {showText && (
        <h1 className="font-semibold text-foreground text-base">Confluence</h1>
      )}
    </div>
  );
}
