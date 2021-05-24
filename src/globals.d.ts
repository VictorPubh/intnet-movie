interface TMDBResponse {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}

interface MCOptions {
    refresh?: boolean;
}

interface MovieComponent {
    current: Movie & MCOptions;
}

interface Genre {
    id: number;
    name: string;
}

interface BelongsToCollection {
    name: string;
    poster_path: string;
    backdrop_path: string;
}

interface ProductionCompany {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
}

interface ProductionCountry {
    iso_3166_1: string;
    name: string;
}

interface SpokenLanguage {
    english_name: string;
    iso_639_1: string;
    name: string;
}

interface Movie {
    backdrop_path: string;
    original_language?: string;
    overview: string;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    budget?: number;
    genres?: Genre[];
    homepage?: string;
    id?: number;
    imdb_id?: string;
    adult?: boolean;
    popularity?: number;
    original_title?: string;
    production_companies?: ProductionCompany[];
    production_countries?: ProductionCountry[];
    revenue?: number;
    runtime?: number;
    spoken_languages?: SpokenLanguage[];
    status?: string;
    tagline?: string;
    original_title?: string;
    genre_ids?: number[];
    belongs_to_collection?: BelongsToCollection;
    closed?: boolean;
}

interface ItemsDeck {
    closed?: boolean;
    items?: Movie[] | null;
    refresh?: boolean;
}

interface OptionsDeck {
    options?: ItemsDeck
}