export type Champion = {
    riotId: number;
    name: string;
    lane: Array<{
        id: number;
        name: string;
    }>;
    type: Array<{
        id: number;
        name: string;
    }>;
    image: string;
    imageLoading: string;
    imageSpash: string;
};

export type Champions = Champion[];