import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Movie } from "./movie.model";

const API_KEY = "6ASC6B0-3RA4YE0-JHNMAJT-RFBSH69";
const API_BASE_URL = "https://api.kinopoisk.dev";

const IMAGES_API_BASE_URL = "https://kinopoiskapiunofficial.tech/api/v2.2/films";
const IMAGES_API_KEY = "d775a434-c439-4e17-a6b7-2c086166d5b8";


const filmGenres = [
  "боевик",
  "фэнтези",
  "фантастика",
  "триллер",
  "военный",
  "детектив",
  "комедия",
  "драма",
  "ужасы",
  "криминал",
  "мелодрама",
  "вестерн",
  "биография",
  "детский",
  "фильм-нуар",
  "для взрослых",
  "документальный",
  "история",
  "короткометражка",
  "музыка",
  "мюзикл",
  "новости",
  "приключения",
  "реальное ТВ",
  "семейный",
  "спорт",
  "ток-шоу",
  "церемония",
];

const tvSeriesGenres = [
  "боевик",
  "фэнтези",
  "фантастика",
  "триллер",
  "военный",
  "детектив",
  "комедия",
  "драма",
  "ужасы",
  "криминал",
  "мелодрама",
  "вестерн",
  "биография",
  "детский",
  "документальный",
  "игра",
  "история",
  "короткометражка",
  "музыка",
  "мюзикл",
  "новости",
  "приключения",
  "реальное ТВ",
  "семейный",
  "спорт",
  "ток-шоу"
];

const cartoonGenres = [
  "боевик",
  "фэнтези",
  "фантастика",
  "триллер",
  "военный",
  "комедия",
  "детектив",
  "драма",
  "ужасы",
  "криминал",
  "мелодрама",
  "вестерн",
  "биография",
  "детский",
  "документальный",
  "история",
  "короткометражка",
  "музыка",
  "мюзикл",
  "приключения",
  "семейный",
  "спорт"
];

const animeGenres = [
  "боевик",
  "фэнтези",
  "фантастика",
  "триллер",
  "военный",
  "детектив",
  "комедия",
  "драма",
  "ужасы",
  "криминал",
  "мелодрама",
  "история",
  "короткометражка",
  "музыка",
  "приключения",
  "семейный",
  "спорт"
];

@Injectable({
  providedIn: "root"
})
export class MovieRepository {
  subscription: any;

  constructor(private http: HttpClient) {
  }

  public getMovies(query: string): Observable<Movie[]> {
    var movies = new Subject<Movie[]>();
    this._totalPages = 0;

    let url = API_BASE_URL + `/movie?token=${API_KEY}`;

    if (query)
      url += `&${query}`;

    url += `&page=${this.currentPage}`;
    this.http.get<{
      docs: Movie[], total: number, limit: number,
      page: number, pages: number
    }>(url).subscribe(response => {
      this._totalPages = response.pages;
      movies.next(response.docs);
    });

    return movies.asObservable();
  }

  public getMovieDetails(id: number) {
    let url = API_BASE_URL + `/movie?token=${API_KEY}&field=id&search=${id}`;

    this.getMovieImages(id);

    this.http.get<any>(url).subscribe(response => {
      this._movieDetails = response;
    });
  }

  public getMovieImages(id: number) {
    this._movieImages = [];
    this._galleryImages = [];

    let url = IMAGES_API_BASE_URL + "/" + id + "/images";
    this.http.get<any>(url, {
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": IMAGES_API_KEY
      }
    }).subscribe(response => {
      this._movieImages = [];
      for (var i = 0; i < 10 && i < response.items?.length; i++) {
        this._movieImages.push(response.items[i]?.previewUrl);
        this._galleryImages.push(response.items[i]?.imageUrl);
      }
    });
  }

  public currentPage: number = 1;

  searchResults: Movie[] | null = null;

  private _genres = [filmGenres, tvSeriesGenres, cartoonGenres, animeGenres];

  public get genres() {
    return this._genres;
  }


  public searchQuery: string = "";


  private _movieImages: string[] = [];

  public get movieImages(): string[] {
    return this._movieImages;
  }

  private _galleryImages: string[] = [];

  public get galleryImages(): string[] {
    return this._galleryImages;
  }


  private _totalPages: number = 0;

  public get totalPages(): number {
    return this._totalPages;
  }


  private _movieDetails: Movie | null = null;

  public get movieDetails(): Movie | null {
    return this._movieDetails;
  }
}
