import * as React from "react"
import * as MenuPrimitive from "@radix-ui/react--menu"
import { cva } from "class-variance-authority"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const Menu = React.forwardRef<
  React.ElementRef<typeof MenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof MenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <MenuPrimitive.Root
    ref={ref}
    className={cn(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      className
    )}
    {...props}
  >
    {children}
    <MenuViewport />
  </MenuPrimitive.Root>
))
Menu.displayName = MenuPrimitive.Root.displayName

const MenuList = React.forwardRef<
  React.ElementRef<typeof MenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof MenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <MenuPrimitive.List
    ref={ref}
    className={cn(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      className
    )}
    {...props}
  />
))
MenuList.displayName = MenuPrimitive.List.displayName

const MenuItem = MenuPrimitive.Item

const MenuTriggerStyle = cva(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
)

const MenuTrigger = React.forwardRef<
  React.ElementRef<typeof MenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof MenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <MenuPrimitive.Trigger
    ref={ref}
    className={cn(MenuTriggerStyle(), "group", className)}
    {...props}
  >
    {children}{" "}
    <ChevronDown
      className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </MenuPrimitive.Trigger>
))
MenuTrigger.displayName = MenuPrimitive.Trigger.displayName

const MenuContent = React.forwardRef<
  React.ElementRef<typeof MenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <MenuPrimitive.Content
    ref={ref}
    className={cn(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      className
    )}
    {...props}
  />
))
MenuContent.displayName = MenuPrimitive.Content.displayName

const MenuLink = MenuPrimitive.Link

const MenuViewport = React.forwardRef<
  React.ElementRef<typeof MenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof MenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div className={cn("absolute left-0 top-full flex justify-center")}>
    <MenuPrimitive.Viewport
      className={cn(
        "origin-top-center relative mt-1.5 h-[var(--radix--menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix--menu-viewport-width)]",
        className
      )}
      ref={ref}
      {...props}
    />
  </div>
))
MenuViewport.displayName =
  MenuPrimitive.Viewport.displayName

const MenuIndicator = React.forwardRef<
  React.ElementRef<typeof MenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof MenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <MenuPrimitive.Indicator
    ref={ref}
    className={cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className
    )}
    {...props}
  >
    <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
  </MenuPrimitive.Indicator>
))
MenuIndicator.displayName =
  MenuPrimitive.Indicator.displayName

export {
  MenuTriggerStyle,
  Menu,
  MenuList,
  MenuItem,
  MenuContent,
  MenuTrigger,
  MenuLink,
  MenuIndicator,
  MenuViewport,
}
