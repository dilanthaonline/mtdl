import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MtdlService {

  constructor(private httpClient: HttpClient) { }

  public login(userName: string, password: string) {
    return new Promise((resolve, reject) => {
      this.httpClient.post('', { userName, password }).subscribe({
        next(res) {
          resolve(res)
        },
        error(err) {
          resolve(err)
        }
      })
    });
  }

}
