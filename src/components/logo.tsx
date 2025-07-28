"use client";

interface LogoProps {
  size?: "small" | "medium" | "large";
  showText?: boolean;
}

export function Logo({ size = "medium", showText = true }: LogoProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-primary rounded text-primary-foreground font-bold text-sm flex items-center justify-center">
        C
      </div>
      {showText && (
        <h1 className="font-bold text-foreground">Confluence</h1>
      )}
    </div>
  );
}
