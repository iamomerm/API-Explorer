import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HTTPService
{

  constructor(private myHttpClient: HttpClient) { console.log('Http Client Call..'); }

  async GetAPI(URL: string)
  {
    console.log('Http Service - GetAPI' + ' - ' + URL)

    try { return await this.myHttpClient.get(URL).toPromise(); }

    catch (e) { console.log('[HTTP Service] Error: ' + e); }
  }
}
