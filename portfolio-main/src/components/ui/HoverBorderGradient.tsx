import React, { useState, useEffect, type ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "../utils/cn";

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

type HoverBorderGradientProps<T extends React.ElementType> = {
  as?: T;
  link?: string;
  containerClassName?: string;
  className?: string;
  duration?: number;
  clockwise?: boolean;
  children?: ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children">;

export function HoverBorderGradient<T extends React.ElementType = "a">({
  as,
  link,
  containerClassName,
  className,
  duration = 1,
  clockwise = true,
  children,
  ...rest
}: HoverBorderGradientProps<T>) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Tag = (as || "a") as any;
  const [hovered, setHovered] = useState(false);
  const [direction, setDirection] = useState<Direction>("TOP");

  const rotateDirection = React.useCallback((currentDirection: Direction): Direction => {
    const directions: Direction[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
    const currentIndex = directions.indexOf(currentDirection);
    const nextIndex = clockwise
      ? (currentIndex - 1 + directions.length) % directions.length
      : (currentIndex + 1) % directions.length;
    return directions[nextIndex];
  }, [clockwise]);

  const movingMap: Record<Direction, string> = {
    TOP: "radial-gradient(20.7% 50% at 50% 0%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
    LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
    BOTTOM:
      "radial-gradient(20.7% 50% at 50% 100%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
    RIGHT:
      "radial-gradient(16.2% 41.2% at 100% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
  };

  const highlight =
    "radial-gradient(75% 181.16% at 50% 50%, #3275F8 0%, rgba(255, 255, 255, 0) 100%)";

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prev) => rotateDirection(prev));
      }, duration * 1000);
      return () => clearInterval(interval);
    }
  }, [hovered, duration, rotateDirection]);

  // Create props object with proper typing
  const tagProps = {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    className: cn(
      "relative flex rounded-xl content-center bg-black/20 hover:bg-blue-600/30 transition duration-500 dark:bg-white/20 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone w-fit",
      containerClassName
    ),
    ...(Tag === "a" && link ? { href: link } : {}),
    ...rest,
  };

  return (
    <Tag {...tagProps}>
      <div
        className={cn(
          "w-full justify-center md:justify-start md:w-auto text-center md:text-left text-white border border-gray-500 hover:border-blue-700 text-sm z-10 bg-black hover:bg-blue-600 transition duration-500 px-4 py-2 rounded-xl",
          className
        )}
      >
        {children}
      </div>

      <motion.div
        className="flex-none inset-0 overflow-hidden absolute z-0 rounded-xl"
        style={{
          filter: "blur(2px)",
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        initial={{ background: movingMap[direction] }}
        animate={{
          background: hovered
            ? [movingMap[direction], highlight]
            : movingMap[direction],
        }}
        transition={{ ease: "linear", duration }}
      />

      <div className="bg-black absolute z-1 flex-none inset-[2px] rounded-xl" />
    </Tag>
  );
}