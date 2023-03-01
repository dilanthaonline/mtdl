import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoadingComponent } from './loading/loading.component';
import { Assignment, AuthUser, User } from './interface';

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
    this._authUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
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

  // Assignments

  public getAssignments = () => {
    return new Promise<Assignment[]>((resolve, reject) => {
      this.httpClient.get<Assignment[]>(this.endPointHost + '/assignments').subscribe({
        next: (res) => {
          resolve(res);
        },
        error: (err) => {
          // reject(err);
          resolve([
            {
              id: 1,
              subject: 'Assignments 01',
              subtitle: 'test',
            }
            ,
            {
              id: 2,
              subject: 'Assignments 02',
              subtitle: 'test',
            }
            ,
            {
              id: 3,
              subject: 'Assignments 03',
              subtitle: 'test',
            }
            ,
            {
              id: 4,
              subject: 'Assignments 04',
              subtitle: 'test',
            }

          ]);
        }
      })
    });
  }

  public addUpdateAssignments = (assignment: Assignment) => {
    return new Promise<Assignment>((resolve, reject) => {
      this.httpClient.post<Assignment>(this.endPointHost + '/assignments/addUpdateAssignments', { assignment }).subscribe({
        next: (res) => {
          resolve(res);
        },
        error: (err) => {
          reject(err);
        }
      })
    });
  }

  public deleteAssignment = (assignmentId: number) => {
    return new Promise<any>((resolve, reject) => {
      this.httpClient.delete<any>(this.endPointHost + '/assignments?id=' + assignmentId).subscribe({
        next: (res) => {
          resolve(res);
        },
        error: (err) => {
          // reject(err);
          resolve(err);
        }
      })
    });
  }

}
