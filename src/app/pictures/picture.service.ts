import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IPicture } from './picture.model';
import {catchError} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class PictureService {
  private page = 1;
  private pictureNm = 18;
  private maxPage = 10;
  private apiUrl = 'http://jsonplaceholder.typicode.com/photos';
  private PICTURES: IPicture[] = [
    {
      albumId: 1,
      id: 1,
      title: 'Panda',
      url: 'https://ichef.bbci.co.uk/news/800/cpsprodpb/17A05/production/_113837769_gettyimages-487432641.jpg',
      thumbnailUrl: 'https://ichef.bbci.co.uk/news/800/cpsprodpb/17A05/production/_113837769_gettyimages-487432641.jpg'
    },
    {
      albumId: 1,
      id: 2,
      title: 'Idiot',
      url: 'https://via.placeholder.com/600/92c952',
      thumbnailUrl: 'https://via.placeholder.com/150/92c952'
    },
    {
      albumId: 1,
      id: 3,
      title: 'Lemur',
      url: 'https://lh3.googleusercontent.com/proxy/qnWEiRK5mU8VoHpiQN9jhGXjIXozKtQ-wSSuoBX5BUDz78WjecXNE_5FCmPjWmSnzmxLT_ft8XipRkUSHjD5C3IGU6tLEsuaRsWYLrnVwcElQqh0DXjiMrnHy8dxmwUoL7evGEq4Q-gg9nhaGFTTJkETtJE9h0uiDa3W',
      thumbnailUrl: 'https://ichef.bbci.co.uk/news/800/cpsprodpb/17A05/production/_113837769_gettyimages-487432641.jpg'
    },
    {
      albumId: 2,
      id: 4,
      title: 'Demon',
      url: 'https://lh3.googleusercontent.com/proxy/qnWEiRK5mU8VoHpiQN9jhGXjIXozKtQ-wSSuoBX5BUDz78WjecXNE_5FCmPjWmSnzmxLT_ft8XipRkUSHjD5C3IGU6tLEsuaRsWYLrnVwcElQqh0DXjiMrnHy8dxmwUoL7evGEq4Q-gg9nhaGFTTJkETtJE9h0uiDa3W',
      thumbnailUrl: 'https://ichef.bbci.co.uk/news/800/cpsprodpb/17A05/production/_113837769_gettyimages-487432641.jpg'
    },
    {
      albumId: 2,
      id: 4,
      title: 'Demon',
      url: 'https://lh3.googleusercontent.com/proxy/qnWEiRK5mU8VoHpiQN9jhGXjIXozKtQ-wSSuoBX5BUDz78WjecXNE_5FCmPjWmSnzmxLT_ft8XipRkUSHjD5C3IGU6tLEsuaRsWYLrnVwcElQqh0DXjiMrnHy8dxmwUoL7evGEq4Q-gg9nhaGFTTJkETtJE9h0uiDa3W',
      thumbnailUrl: 'https://ichef.bbci.co.uk/news/800/cpsprodpb/17A05/production/_113837769_gettyimages-487432641.jpg'
    },
    {
      albumId: 2,
      id: 4,
      title: 'Demon',
      url: 'https://lh3.googleusercontent.com/proxy/qnWEiRK5mU8VoHpiQN9jhGXjIXozKtQ-wSSuoBX5BUDz78WjecXNE_5FCmPjWmSnzmxLT_ft8XipRkUSHjD5C3IGU6tLEsuaRsWYLrnVwcElQqh0DXjiMrnHy8dxmwUoL7evGEq4Q-gg9nhaGFTTJkETtJE9h0uiDa3W',
      thumbnailUrl: 'https://ichef.bbci.co.uk/news/800/cpsprodpb/17A05/production/_113837769_gettyimages-487432641.jpg'
    },
    {
      albumId: 2,
      id: 4,
      title: 'Demon',
      url: 'https://lh3.googleusercontent.com/proxy/qnWEiRK5mU8VoHpiQN9jhGXjIXozKtQ-wSSuoBX5BUDz78WjecXNE_5FCmPjWmSnzmxLT_ft8XipRkUSHjD5C3IGU6tLEsuaRsWYLrnVwcElQqh0DXjiMrnHy8dxmwUoL7evGEq4Q-gg9nhaGFTTJkETtJE9h0uiDa3W',
      thumbnailUrl: 'https://ichef.bbci.co.uk/news/800/cpsprodpb/17A05/production/_113837769_gettyimages-487432641.jpg'
    },
    {
      albumId: 2,
      id: 4,
      title: 'Demon',
      url: 'https://lh3.googleusercontent.com/proxy/qnWEiRK5mU8VoHpiQN9jhGXjIXozKtQ-wSSuoBX5BUDz78WjecXNE_5FCmPjWmSnzmxLT_ft8XipRkUSHjD5C3IGU6tLEsuaRsWYLrnVwcElQqh0DXjiMrnHy8dxmwUoL7evGEq4Q-gg9nhaGFTTJkETtJE9h0uiDa3W',
      thumbnailUrl: 'https://ichef.bbci.co.uk/news/800/cpsprodpb/17A05/production/_113837769_gettyimages-487432641.jpg'
    },
    {
      albumId: 2,
      id: 4,
      title: 'Demon',
      url: 'https://lh3.googleusercontent.com/proxy/qnWEiRK5mU8VoHpiQN9jhGXjIXozKtQ-wSSuoBX5BUDz78WjecXNE_5FCmPjWmSnzmxLT_ft8XipRkUSHjD5C3IGU6tLEsuaRsWYLrnVwcElQqh0DXjiMrnHy8dxmwUoL7evGEq4Q-gg9nhaGFTTJkETtJE9h0uiDa3W',
      thumbnailUrl: 'https://ichef.bbci.co.uk/news/800/cpsprodpb/17A05/production/_113837769_gettyimages-487432641.jpg'
    },
    {
      albumId: 2,
      id: 4,
      title: 'Demon',
      url: 'https://lh3.googleusercontent.com/proxy/qnWEiRK5mU8VoHpiQN9jhGXjIXozKtQ-wSSuoBX5BUDz78WjecXNE_5FCmPjWmSnzmxLT_ft8XipRkUSHjD5C3IGU6tLEsuaRsWYLrnVwcElQqh0DXjiMrnHy8dxmwUoL7evGEq4Q-gg9nhaGFTTJkETtJE9h0uiDa3W',
      thumbnailUrl: 'https://ichef.bbci.co.uk/news/800/cpsprodpb/17A05/production/_113837769_gettyimages-487432641.jpg'
    },
    {
      albumId: 2,
      id: 4,
      title: 'Demon',
      url: 'https://lh3.googleusercontent.com/proxy/qnWEiRK5mU8VoHpiQN9jhGXjIXozKtQ-wSSuoBX5BUDz78WjecXNE_5FCmPjWmSnzmxLT_ft8XipRkUSHjD5C3IGU6tLEsuaRsWYLrnVwcElQqh0DXjiMrnHy8dxmwUoL7evGEq4Q-gg9nhaGFTTJkETtJE9h0uiDa3W',
      thumbnailUrl: 'https://ichef.bbci.co.uk/news/800/cpsprodpb/17A05/production/_113837769_gettyimages-487432641.jpg'
    },
    {
      albumId: 2,
      id: 4,
      title: 'Demon',
      url: 'https://lh3.googleusercontent.com/proxy/qnWEiRK5mU8VoHpiQN9jhGXjIXozKtQ-wSSuoBX5BUDz78WjecXNE_5FCmPjWmSnzmxLT_ft8XipRkUSHjD5C3IGU6tLEsuaRsWYLrnVwcElQqh0DXjiMrnHy8dxmwUoL7evGEq4Q-gg9nhaGFTTJkETtJE9h0uiDa3W',
      thumbnailUrl: 'https://ichef.bbci.co.uk/news/800/cpsprodpb/17A05/production/_113837769_gettyimages-487432641.jpg'
    }
  ];
  constructor(private http: HttpClient) { }
  getPictures(): Observable<IPicture[]>{
    const limit = this.page * this.pictureNm;
    return this.http.get<IPicture[]>(this.apiUrl + '?_start=0&_limit=' + limit)
    .pipe(catchError(this.handleError<IPicture[]>('getPictures', [])));
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
  private handleError<T>(operation = 'operation', result?: T): any{
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

}
