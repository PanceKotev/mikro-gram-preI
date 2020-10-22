import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { IPicture } from '../picture.model';
import { PictureService } from '../picture.service';

@Injectable({ providedIn: 'root' })
export class PictureResolver implements Resolve<IPicture> {
  constructor(private pictureService: PictureService){}

  resolve(route: ActivatedRouteSnapshot): Observable<IPicture> {
    return this.pictureService.getPicture(+route.params.id);
  }
}
