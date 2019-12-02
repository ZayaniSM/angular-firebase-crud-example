import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Movie } from './../model/movie';
@Injectable({
  providedIn: 'root'
})
export class MovieService {


  private dbPath = '/movies';

  MoviesRef: AngularFireList<Movie> = null;

  constructor(private db: AngularFireDatabase){
    this.MoviesRef = db.list(this.dbPath);
  }

  addMovie(movie: Movie): void{
    this.MoviesRef.push(movie);
  }

  updateMovie(key: string, value:any): Promise<void>{
    return this.MoviesRef.update(key, value);
  }

  deleteMovie(key: string): Promise<void> {
    return this.MoviesRef.remove(key);
  }

  getMovieList(): AngularFireList<Movie> {
    return this.MoviesRef;
  }

  deleteAll(): Promise<void> {
    return this.MoviesRef.remove();
  }


}
