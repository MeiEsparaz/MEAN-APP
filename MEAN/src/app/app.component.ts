
import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'; //HTTP CLIENT
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  results: string[];
  private BASE_URL:string = '/api';
    // Inject HttpClient into your component or service.
    constructor(private http: HttpClient) {}

    ngOnInit(): void {
      // Make the HTTP request:
      this.http.get('https://4200-d92d8dcb-a184-4741-925a-eab01e77cb60.ws-eu01.gitpod.io/').subscribe(data => {
        // Read the result field from the JSON response.
        this.results = data['results'];
      });
    }
}
3
