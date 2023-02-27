import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoadingComponent } from './loading/loading.component';
import { AuthUser, User } from './interface';

@Injectable({
  providedIn: 'root'
})
export class MtdlService {

  private endPointHost = 'https://mdtlwebapp.azurewebsites.net/api';
  private _authUser: any;

  private get token() {
    return this._authUser?.token;
  }

  public get authUser(): AuthUser {
    return { ...this._authUser, token: undefined }
  }

  private get requestHeaders() {
    return { 'Authorization': this._authUser?.token }
  }

  constructor(private httpClient: HttpClient, private dialog: MatDialog) {
    this._authUser = JSON.parse(localStorage.getItem('currentUser') || '');
  }

  public login(userName: string, password: string) {
    return new Promise<AuthUser>((resolve, reject) => {
      this.httpClient.post(this.endPointHost + '/user/Authenticate', { userName, password }).subscribe({
        next: (res) => {
          localStorage.setItem('currentUser', JSON.stringify(res));
          this._authUser = res;
          resolve(this.authUser);
        },
        error: (err) => {
          reject(err);
        }
      })
    });
  }

  public addUpdateUser(user: User, isRegister: boolean) {
    return new Promise((resolve, reject) => {
      if (isRegister) {
        this.httpClient.post(this.endPointHost + '/user/Register', user).subscribe({
          next: (res) => {
            resolve(res);
          },
          error: (err) => {
            reject(err);
          }
        })
      } else {
        this.httpClient.put(this.endPointHost + '/user/Update?id=' + user.id, user, { headers: this.requestHeaders }).subscribe({
          next: (res) => {
            this._authUser = {
              ...this._authUser,
              firstName: user.firstName,
              lastName: user.lastName,
              username: user.userName,
            }
            resolve(res);
          },
          error: (err) => {
            reject(err);
          }
        })
      }

    });
  }

  public getUser(id?: string) {
    return new Promise<User>((resolve, reject) => {
      this.httpClient.get<User>(this.endPointHost + '/user/GetById?id=' + (id || this.authUser.id), { headers: this.requestHeaders }).subscribe({
        next: (res) => {
          resolve(res);
        },
        error: (err) => {
          reject(err);
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
