"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

export const AnimatedCard = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={cn(
                "group relative rounded-2xl border border-border bg-background p-6 shadow-sm transition-all duration-300 hover:border-gold/50 hover:shadow-xl hover:shadow-gold/10",
                className
            )}
        >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/5 to-crimson/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Content */}
            <div className="relative z-10">{children}</div>
        </motion.div>
    );
};

export const AnimatedBorderCard = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("group relative p-[2px] rounded-2xl", className)}>
            {/* Animated border gradient */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-crimson via-gold to-crimson opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-100" />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-crimson via-gold to-crimson opacity-0 transition-opacity duration-500 group-hover:opacity-50" />

            {/* Card content */}
            <div className="relative rounded-2xl bg-background p-6">
                {children}
            </div>
        </div>
    );
};
