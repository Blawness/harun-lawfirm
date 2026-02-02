"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default:
                    "bg-crimson text-white shadow-lg shadow-crimson/25 hover:bg-crimson-dark hover:shadow-xl hover:shadow-crimson/30 hover:-translate-y-0.5",
                gold:
                    "bg-gold text-white shadow-lg shadow-gold/25 hover:bg-gold-light hover:shadow-xl hover:shadow-gold/30 hover:-translate-y-0.5",
                outline:
                    "border-2 border-crimson text-crimson bg-transparent hover:bg-crimson hover:text-white",
                outlineGold:
                    "border-2 border-gold text-gold bg-transparent hover:bg-gold hover:text-white",
                ghost:
                    "text-foreground hover:bg-muted",
                link:
                    "text-crimson underline-offset-4 hover:underline",
            },
            size: {
                default: "h-12 px-6 py-3",
                sm: "h-10 px-4 py-2 text-xs",
                lg: "h-14 px-8 py-4 text-base",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, ...props }, ref) => {
        return (
            <button
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
