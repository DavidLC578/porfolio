import React from "react";
import clsx from "clsx";

const variants = {
    default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
    destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
    outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
    secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
    ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
    link: "text-primary underline-offset-4 hover:underline"
};

const sizes = {
    default: "h-9 px-4 py-2 text-sm",
    sm: "h-8 px-3 py-1 text-sm",
    lg: "h-10 px-6 py-3 text-base",
    icon: "h-9 w-9 p-0"
};

export default function Button({
    children,
    variant = "default",
    size = "default",
    className,
    asChild: Comp,
    ...props
}) {
    // Si pasamos un componente en asChild lo usamos, si no, <button>
    const Component = Comp || "button";

    return (
        <Component
            className={clsx(
                "inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            {children}
        </Component>
    );
}
