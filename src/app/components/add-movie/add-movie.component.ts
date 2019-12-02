import { Component, OnInit } from '@angular/core';
import { Movie } from './../../model/movie';
import { MovieService } from './../../services/movie.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  
  movie: Movie = new Movie();
  submitted = false;
  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  addMovie(): void {
    this.submitted = false;
    this.movie = new Movie();
  }

  save(){
    this.movieService.addMovie(this.movie);
    this.movie = new Movie();
  }

  onSubmit(){
    this.submitted = true;
    this.save();
  }

}
