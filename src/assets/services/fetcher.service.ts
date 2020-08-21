import { Injectable } from '@angular/core';
import { URLs } from "../URLs";

@Injectable({
  providedIn: 'root'
})
export class FetcherService {

  constructor() { }

  Fetch(URL: string) { if ((!URLs.includes(URL)) && (URL != '')) { URLs.push(URL); }}

  Remove(URL: string)
  {
    for (let i = 0; i < URLs.length; i++) { if (URLs[i] == URL) { URLs.splice(i, 1); }}
  }
}
