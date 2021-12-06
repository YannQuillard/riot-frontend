
export type BestChampion = {
    maxNumber: number,
    username: string,
    lane: string,
    pick?: {
        team?: [],
        enemy?: []
    },
    ban?: []
};
