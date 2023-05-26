"use client";
import { useEffect, useState } from "react";

export const useTypewriterEffect = (
    customText: string,
    speed: number,
    trigger: unknown
) => {
    const [text, setText] = useState<string>("");
    const [index, setIndex] = useState<number>(0);

    useEffect(() => {
        setText(""); // Reset text
        setIndex(0); // Reset index
    }, [trigger, customText]);

    useEffect(() => {
        if (index < customText.length) {
            const timer = setTimeout(() => {
                setText((text) => text + customText[index]);
                setIndex((index) => index + 1);
            }, speed);

            return () => clearTimeout(timer); // Clear the timeout if the component is unmounted
        }
    }, [text, index, customText]); // Add customText to the dependencies array

    return text;
};
