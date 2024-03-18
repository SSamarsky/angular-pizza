import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pizza } from '../models/pizza';

@Injectable()
export class RequestService {

  constructor(private _httpClient: HttpClient) { }

  public getPizzaList(): Observable<Pizza[]> {
    return this._httpClient.get<Pizza[]>('https://639601bf90ac47c6807a740d.mockapi.io/items');
  }
}
