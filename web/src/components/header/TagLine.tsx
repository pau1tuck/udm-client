"use client";

import { useTypewriterEffect } from "@/utils/use-typewriter-effect";

export function TagLine() {
    const tagline = "Delivering the finest new house and techno.";
    const speed = 35;

    const text = useTypewriterEffect(tagline, speed, null);

    return <div>{text}</div>;
}
