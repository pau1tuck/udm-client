export interface ITrack {
    id: string;
    trackId: string;
    artist: string;
    title: string;
    version?: string;
    label: string;
    month: number;
    year: number;
    duration: string;
    buyUrl?: string;
    votes: number;
    createdAt: string;
    updatedAt: string;
}

export type ITrackProps = {
    track: ITrack;
};

export type ITracks = {
    tracks: Array<ITrack>;
};

export interface ITrackData {
    index?: number;
    trackId?: string;
    artist?: string;
    title?: string;
    version?: string;
    label?: string;
    month?: number;
    year?: number;
    duration?: string;
    buyUrl?: string;
    votes?: number;
    createdAt?: string;
    updatedAt?: string;
}

export interface ITrackDataProps {
    track?: ITrackData;
}

export interface ITrackRowDataProps {
    track?: ITrackData;
    number: React.ReactNode;
    image: React.ReactNode;
    titleArtist: React.ReactNode;
    label: React.ReactNode;
    controls: React.ReactNode;
    duration: React.ReactNode;
}
