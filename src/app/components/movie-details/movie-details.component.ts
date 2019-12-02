import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from './../../services/movie.service';
import { Movie } from './../../model/movie';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  @Input() movie: Movie;
  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  updateAvailable(isAvailable: boolean){
    this.movieService.updateMovie(this.movie.key, { available: isAvailable })
    .catch(err => console.log(err));
  }

  deleteMovie(){
    this.movieService.deleteMovie(this.movie.key)
    .catch(err => console.log(err));
  }

}
