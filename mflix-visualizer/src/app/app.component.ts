import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  [x: string]: any;
  title = 'mflix-visualizer';
  results : Object[];
  obs : Observable<object>;
  constructor(private http : HttpClient, private sanitizer: DomSanitizer){}

  load10Movies()
  {
    this.obs = this.http.get("https://3000-f2c103a8-a821-479d-a045-895e1d7f97ce.ws-eu01.gitpod.io/movies/list/10");
    this.obs.subscribe(this.getData);
  }

  movies10Comedy()
  {
    this.obs = this.http.get("https://3000-f2c103a8-a821-479d-a045-895e1d7f97ce.ws-eu01.gitpod.io/movies/movie_from_genres/Comedy");
    this.obs.subscribe(this.getData);
  }
  
  movies10Horror()
  {
    this.obs = this.http.get("https://3000-f2c103a8-a821-479d-a045-895e1d7f97ce.ws-eu01.gitpod.io/movies/movie_from_genres/Horror");
    this.obs.subscribe(this.getData);
  }
  
  getData = (data) => {
    this.results = data;
  }

  photoURL(urltoSanitize) {
    console.log(urltoSanitize);
    return this.sanitizer.bypassSecurityTrustUrl(urltoSanitize);
}
}


