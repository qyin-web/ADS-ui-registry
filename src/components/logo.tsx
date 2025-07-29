"use client";

interface LogoProps {
  size?: "small" | "medium" | "large";
  showText?: boolean;
}

export function Logo({ size = "medium", showText = true }: LogoProps) {
  const sizeClasses = {
    small: "w-5 h-5 text-xs",
    medium: "w-6 h-6 text-sm", 
    large: "w-8 h-8 text-base"
  };

  return (
    <div className="flex items-center gap-1.5">
      <div className={`${sizeClasses[size]} bg-primary rounded text-primary-foreground font-bold flex items-center justify-center`}>
        C
      </div>
      {showText && (
        <h1 className="font-semibold text-foreground text-base">Confluence</h1>
      )}
    </div>
  );
}
