import { Component } from '@angular/core';
import { URLs } from "../assets/URLs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GenericApi';

  myURLs = URLs;
}
