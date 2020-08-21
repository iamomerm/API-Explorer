import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ParserService} from '../../assets/services/parser.service';
import { Tabber} from '../../assets/tabber';
import { NgModule } from '@angular/core'
import {FetcherService} from "../../assets/services/fetcher.service";

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  MinimizeFlag: boolean = false;

  FontSize: number = 14;

  ComponentBg: string = 'gainsboro';

  Minimize()
  {
    if (this.MinimizeFlag == false) { this.MinimizeFlag = true; }
    else { this.MinimizeFlag = false; }
  }

  @Input() URL: string

  myArray: object[] = [];

  myText: string = '';

  Remove() { this.myFetcher.Remove(this.URL); }

  constructor(private myParser: ParserService, private myFetcher: FetcherService) { console.log('Parser Service Call...') }

  Texture(Array: object[]): void
  {
    let TextLine = '';

    Array.forEach(Item => {

      let Tabs: string = Tabber(+Item['Level']);

      TextLine = Tabs + '-' + ' ' + Item['Key'] + ':' + ' ' + Item['Value'];

      this.myText = this.myText + TextLine + '\n';
    });

    if (this.myText == '') { this.myText = 'API not found!'; }
  }

  async ParserAPi() { this.myArray = await this.myParser.Parse(this.URL); this.Texture(this.myArray); }

  ngOnInit(): void  { this.ParserAPi(); }


}
