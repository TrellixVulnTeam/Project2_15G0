export interface Movie {
    Poster: string ;
    Title: string;
    Type: string;
    Year: string;
    imdbID: string;
}

export interface MovieDetail {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: Rating[];
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response: string;
  }

  export interface Rating {
    Source: string;
    Value: string;
  }

  export interface PopularMovie{
    id: string;
    original_title: string;
    overview: string;
    poster_path: string;
    release_date: string;
    title: string;

  }
