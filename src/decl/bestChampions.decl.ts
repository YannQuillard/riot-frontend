
export type BestChampion = {
    maxNumber: number,
    username: string,
    lane: string,
    pick?: {
        team: any[],
        enemy: any[]
    },
    ban: any[]
};
