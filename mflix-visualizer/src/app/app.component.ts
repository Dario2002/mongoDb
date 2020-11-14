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
    this.obs = this.http.get("https://3000-d95b1dcf-8a1c-4e89-97b0-7b4024bb28bb.ws-eu01.gitpod.io/movies/list/10");
    this.obs.subscribe(this.getData);
  }

  movies10Comedy()
  {
    this.obs = this.http.get("https://3000-d95b1dcf-8a1c-4e89-97b0-7b4024bb28bb.ws-eu01.gitpod.io/movies/movie_from_genres/comedy");
    this.obs.subscribe(this.getData);
  }
  
  movies10Horror()
  {
    this.obs = this.http.get("https://3000-d95b1dcf-8a1c-4e89-97b0-7b4024bb28bb.ws-eu01.gitpod.io/movies/movie_from_genres/horror");
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


