export const getServerSideProps = async (trackId: string | undefined) => {
    const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

    try {
        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/videos?id=${trackId}&key=${YOUTUBE_API_KEY}&part=snippet&fields=items(id%2Csnippet(thumbnails))`
        );
        const data = await response.json();
        const youTubeVideo = data.items[0];
        const imageUrl = youTubeVideo.snippet.thumbnails.medium.url;

        return {
            props: {
                imageUrl,
            },
        };
    } catch (error) {
        console.error(error);
        return {
            props: {
                imageUrl: null,
            },
        };
    }
};
