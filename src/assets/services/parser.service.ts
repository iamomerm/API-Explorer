import { Injectable } from '@angular/core';
import { HTTPService } from './http.service';
import { Explore } from '../../assets/explore';

@Injectable({
  providedIn: 'root'
})
export class ParserService
{

  constructor(private myHTTPService: HTTPService) { console.log('Http Service Call...')}

  async Parse(URL: string)
  {
    console.log('Parser Service - Parse' + ' - ' + URL)

    let myArray: object[] = [];

    try
    {
      let myObject: Object = await this.myHTTPService.GetAPI(URL);

      Explore(myObject, myArray, 'root');
    }


    catch (e)
    {
      console.log('[Parser] Parsing Error: ' + e);
    }

    return myArray;
  }
}
