import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CurdService {

  apiurl = "http://localhost:4000/api";
  headers = new HttpHeaders().set("Content-Type","application/json");

  constructor(
    private http:HttpClient
  ) { }

  //Create
  createUser(data):Observable<any>{
    let url = `${this.apiurl}/create`;
    return this.http.post(url, data, {headers: this.headers})
    .pipe(
      catchError(this.errorHandler)
    )
  }

  //Get all users
  getUsers(){
    return this.http.get(`${this.apiurl}`);
  }

  //Get user by id
  getUser(id):Observable<any>{
    let url = `${this.apiurl}/read/${id}`;
    return this.http.get(url, {headers:this.headers}).pipe(
      map((res:Response)=>{
        return res || {}
      }),
      catchError(this.errorHandler)
    )
  }

  //Remove user
  removeUser(id):Observable<any>{
    let url = `${this.apiurl}/delete/${id}`;
    return this.http.delete(url, {headers: this.headers})
    .pipe(
      catchError(this.errorHandler)
    )
  }

  //Update user
  updateUser(id, data):Observable<any>{
    let url = `${this.apiurl}/update/${id}`;
    return this.http.put(url,data, {headers: this.headers})
    .pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error: HttpErrorResponse){
    let errorMessage = "";

    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message;
    }else{
      errorMessage = `Error Code: ${error.status}\nMessage:${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
