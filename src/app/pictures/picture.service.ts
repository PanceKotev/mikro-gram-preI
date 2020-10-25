import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IPicture } from './picture.model';
import {catchError} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class PictureService {
  private page = 1;
  private pictureNm = 60;
  public initial = true;
  private maxPage = 83;
  private maxPictures = 4999;
  public pagination = false;
  private apiUrl = 'http://jsonplaceholder.typicode.com/photos';
  private PICTURES: IPicture[];
  constructor(private http: HttpClient) {
    this.http.get<IPicture[]>(this.apiUrl).subscribe(pics => this.PICTURES = pics);
    // mislev deka e podobro na pocetok da se ceka malce iako e protiv google SEO
    // zaradi toa shto so concat koga se dodavaat ne se podredeni i koga se vrakjas nanazad od details pak
    // pocnuvaat od pocetok i pak treba da se loadira celo,
    // i da se prakjaat get request sekogas, probav so 3g throttling timeout vo grid mi stoi da e okay
  }
  getPictures(): Observable<IPicture[]>{
    this.initial = this.initial ? false : false;
    const limit = this.page < this.maxPage ? this.page * this.pictureNm : this.maxPictures;
    return of(this.PICTURES.slice(0, limit + 1));

  //   const start =  this.page * this.pictureNm;
  //   const limit = this.page < this.maxPage ? this.pictureNm : 4999 - (this.page * this.pictureNm);
  //   return this.http.get<IPicture[]>(this.apiUrl + '?_start=0&_limit=' + limit)
  //  .pipe(catchError(this.handleError<IPicture[]>('getPictures', [])));
  //  istotaka so concat vo pictureGrid ne doagjaa podredeni so ovoj metod
  }
  getPicture(id: number): Observable<IPicture>{
    return this.http.get<IPicture>(this.apiUrl + '/' + id.toString())
    .pipe(catchError(this.handleError<IPicture>('getPicture')));
  }
  deletePicture(id: number): void {
    this.http.delete(this.apiUrl + '/' + id.toString())
    .pipe(catchError(this.handleError<IPicture>('deletePicture')));
  }
  updatePicture(picture: IPicture): void{
    const options = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    this.http.put(this.apiUrl + '/' + picture.id.toString(), picture, options)
    .pipe(catchError(this.handleError<IPicture>('updatePicture')));
  }
  addPicture(formValues: any): void {
    const options = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    this.http.post<IPicture>(this.apiUrl, formValues, options)
    .pipe(catchError(this.handleError<IPicture>('addPicture')));
  }
  incrementPage(): boolean{
    if (this.page < this.maxPage){
      this.page++;
      return true;
     }
    return false;
  }
  togglePagination(): void{
    this.pagination = !this.pagination;
  }
  private handleError<T>(operation = 'operation', result?: T): any{
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

}
