import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'persist-on-change';

  constructor(private http: HttpClient) {}
  post(): Function {
    return () => {
      return this.http.post('https://jsonplaceholder.typicode.com/posts', {});
    };
  }
}
