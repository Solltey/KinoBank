export class Movie {
    constructor(
        public id?: number,
        public name?: string,
        public alternativeName?: string,
        public poster?: { previewUrl: string, url: string},
        public rating?: { kp: number, imdb: number},
        public votes?: { kp: number, imdb: number },
        public year?: number,
        public genres?: { name: string }[],
        public slogan?: string,
        public similarMovies?: Movie[],
        public countries?: { name: string }[],
        public description?: string,
        public ageRating?: number,
        public movieLength?: number,
        public status?: string
    ) { }
}
