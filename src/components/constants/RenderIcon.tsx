import type { RenderIconProps } from "@/types/home";

export function RenderIcon({
  icon: IconComponent,
  className = "h-4 w-4",
  size,
  color,
  strokeWidth,
}: RenderIconProps) {
  if (!IconComponent) return null;

  return (
    <IconComponent
      className={className}
      size={size}
      color={color}
      strokeWidth={strokeWidth}
    />
  );
}
