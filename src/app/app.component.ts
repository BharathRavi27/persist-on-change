import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
      select {
        width: 200px;
        padding: 10px;
      }
    `,
  ],
})
export class AppComponent {
  constructor(private http: HttpClient) {}
  // Done for demo purpose only. Use a service to talk to APIs
  post(): Function {
    return () => {
      return this.http.post('https://jsonplaceholder.typicode.com/posts', {});
    };
  }
}
