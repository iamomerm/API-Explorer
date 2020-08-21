import { Component, OnInit } from '@angular/core';
import {FetcherService} from "../../assets/services/fetcher.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private myFetcher: FetcherService) { }

  myURL: string = '';

  Fetch(URL) { this.myFetcher.Fetch(URL); }

  ngOnInit(): void {
  }

}
