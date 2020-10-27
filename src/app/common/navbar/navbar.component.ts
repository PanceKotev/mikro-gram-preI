import { Component, OnInit } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PictureService } from '../../pictures/picture.service';
import { getLoading, getPagination } from '../../pictures/state';
import { PicturesPageActions } from '../../pictures/state/actions';

@Component({
  selector: 'mkg-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  pagination$: Observable<boolean>;
  loading$: Observable<boolean>;
  constructor(private snack: MatSnackBar,
              private store: Store,
              private pictureService: PictureService) { }

  ngOnInit(): void {
    this.pagination$ = this.store.select(getPagination);
    this.loading$ = this.store.select(getLoading);
  }

  togglePagination(): void {
    this.snack.open('Pagination type changed.', '', {
      duration: 700
    });
    this.store.dispatch(PicturesPageActions.togglePagination());
  }

}
