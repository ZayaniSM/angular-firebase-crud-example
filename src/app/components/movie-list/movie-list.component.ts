import { Component, OnInit } from '@angular/core';
import { MovieService } from './../../services/movie.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: any;
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getMoviesList();

  }
  getMoviesList(){
    this.movieService.getMovieList().snapshotChanges().pipe(
      map(changes =>
        changes.map(m =>
          ({key: m.payload.key, ...m.payload.val()})
          )
        )
    ).subscribe(movies =>{
      this.movies = movies;
    });
  }

  deleteMovies() {
    this.movieService.deleteAll().catch(err => console.log(err));
  }
}
