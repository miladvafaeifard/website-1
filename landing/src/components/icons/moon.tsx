import React from "react"
import type { Icon } from "@/components/icons"
import { cn } from "@/lib/utils"

export const MoonIcon: React.FC<Icon.CommonProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
      className={cn("fill-current", className)}
    >
      <path d="M190.6 66.8c-38.8 37.8-62.9 90.7-62.9 149.2c0 108.9 83.5 198.3 189.9 207.3C289.8 439 257.7 448 223.5 448C117.7 448 32 362.1 32 256c0-94.8 68.5-173.5 158.6-189.2zm66.1-21.5c-1.5-6.9-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3z" />
    </svg>
  )
}

MoonIcon.displayName = "MoonIcon"