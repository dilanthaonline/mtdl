import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoadingComponent } from './loading/loading.component';

@Injectable({
  providedIn: 'root'
})
export class MtdlService {

  constructor(private httpClient: HttpClient, private dialog: MatDialog) { }

  public login(userName: string, password: string) {
    return new Promise((resolve, reject) => {
      this.httpClient.post('', { userName, password }).subscribe({
        next(res) {
          resolve(res);
        },
        error(err) {
          setTimeout(() => {
            resolve(err);
          }, 3000);
        }
      })
    });
  }

  public addUpdateUser(data: any, isRegister: boolean) {
    return new Promise((resolve, reject) => {
      this.httpClient.post('', { data, isRegister }).subscribe({
        next(res) {
          resolve(res);
        },
        error(err) {
          setTimeout(() => {
            resolve(err);
          }, 3000);
        }
      })
    });
  }

  public loading() {
    const loading = this.dialog.open(LoadingComponent, {
      width: '60px',
      height: '60px',
      hasBackdrop: true,
      closeOnNavigation: true,
      panelClass: 'loading',
      disableClose: true
    })

    return {
      close: () => { loading.close(); }
    }
  }

}
