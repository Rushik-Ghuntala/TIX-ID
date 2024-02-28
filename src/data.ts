export interface MoviesData{
    id: number;
    name: string;
    image: string;
    genre: string;
    duration: string;
    director: string;
    rated: string;
}

export interface NewsData{
    id: number;
    category: string;
    title: string;
    description: string[];
    image: string;
    dates: string;
    source: string;
}

export interface ComingSoonMovies{
    id: number;
    title: string;
    image: string;
}

export interface TheaterData {
    id: string;
    name: string;
    city: string;
    address: string;
    badge: string;
    // studio: StudioData[];
    dimension: DimensionData[];
  };

// export type StudioData = {
//     category: string[];
// }

export interface DimensionData {
    dimensionCategory: string;
    time: string[];
    price: string;
}

export interface VoucherData {
    [code: string]: number;
}