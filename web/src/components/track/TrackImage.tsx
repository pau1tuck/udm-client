"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getServerSideProps } from "@/utils/get-track-image";

interface ITrackImageProps {
    trackId?: string;
    width: number;
    height: number;
}

export const TrackImage = ({ trackId, width, height }: ITrackImageProps) => {
    const [imageUrl, setImageUrl] = useState<string | null>(null);

    useEffect(() => {
        const fetchTrackImage = async () => {
            try {
                const { props } = await getServerSideProps(trackId);
                setImageUrl(props.imageUrl);
            } catch (error) {
                console.error(error);
            }
        };

        fetchTrackImage().catch((error) => {
            console.error(
                "An error occurred while fetching the track image:",
                error
            );
        });
    }, [trackId]);

    if (imageUrl) {
        return (
            <Image
                src={imageUrl}
                alt="Video thumbnail"
                width={width}
                height={height}
            />
        );
    } else {
        return null;
    }
};
