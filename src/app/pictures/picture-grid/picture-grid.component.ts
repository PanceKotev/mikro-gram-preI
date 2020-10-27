import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import { IPicture } from '../picture.model';
import { PictureService } from '../picture.service';
import { getLoading, getPage, getPagination } from '../state';
import { PicturesPageActions } from '../state/actions';

@Component({
  selector: 'mkg-picture-grid',
  templateUrl: './picture-grid.component.html',
  styleUrls: ['./picture-grid.component.css']
})
export class PictureGridComponent implements OnInit {
  pictures: IPicture[];
  pagination = false;
  page = 0;
  pageSize = 60;
  loading = true;
  constructor(private store: Store, private pictureService: PictureService) {
  }

  ngOnInit(): void {
    this.store.select(getLoading).subscribe(ld => this.loading = ld);

    if (this.pictureService.initial) {
      setTimeout(() => {this.updateData();
                        this.store.dispatch(PicturesPageActions.finishedLoading()); }, 800);
      }
    else {
      if (this.pagination){
        this.updateDataPaged(this.page, this.pageSize);
      }else{
        this.updateData();
      }
      this.store.dispatch(PicturesPageActions.finishedLoading());
    }

    this.store.select(getPage).subscribe(pageObj => {
      this.page = pageObj.page;
      this.pageSize = pageObj.pageSize;
    });

    this.store.select(getPagination).subscribe(pagin => {
      this.pagination = pagin;
      if (pagin) {
        this.updateDataPaged(this.page, this.pageSize);
      }
      else if ( !this.loading && !pagin ) {
        this.updateData();
      }
    });

  }

  onScroll(): void {
    if (this.pictureService.incrementPage()) {
      this.updateData();
    }
  }

  updateData(): void {
    this.pictureService.getPictures().subscribe(pics => this.pictures = pics);
  }

  updateDataPaged(pageIndex: number, pageSize: number): void {
    this.pictureService.getPicturesPaged(pageIndex, pageSize).subscribe(pics => this.pictures = pics);
    window.scrollTo(0, 10);
  }

  pageChanged(event: PageEvent): void {
    this.store.dispatch(PicturesPageActions.updatePageAndPageSize({
      page: event.pageIndex,
      pageSize: event.pageSize
    }));
    this.updateDataPaged(event.pageIndex, event.pageSize);
  }

}
