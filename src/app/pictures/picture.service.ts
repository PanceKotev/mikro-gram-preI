import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IPicture } from './picture.model';

@Injectable({providedIn: 'root'})
export class PictureService {

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
  constructor() { }
  getPictures(): Observable<IPicture[]>{
    return of(this.PICTURES);
  }
  getPicture(id: number): Observable<IPicture>{
    return of(this.PICTURES.find(item => item.id === id));
  }
  deletePicture(id: number): void {
    this.PICTURES = this.PICTURES.filter(picture => picture.id !== id);
  }
  updatePicture(picture: IPicture): void{
    const picIndex = this.PICTURES.findIndex(pic => pic.id === picture.id);
    this.PICTURES[picIndex] = picture;
  }

}
