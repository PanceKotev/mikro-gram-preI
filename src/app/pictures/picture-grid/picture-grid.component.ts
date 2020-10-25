import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IPicture } from '../picture.model';
import { PictureService } from '../picture.service';

@Component({
  selector: 'mkg-picture-grid',
  templateUrl: './picture-grid.component.html',
  styleUrls: ['./picture-grid.component.css']
})
export class PictureGridComponent implements OnInit {
  pictures: IPicture[];
  pagination: boolean;
  loading = true;
  constructor(private pictureService: PictureService) {
   }

  ngOnInit(): void {
    if (this.pictureService.initial){
      setTimeout(() => {this.updateData(); this.loading = false; }, 800);
    }
    else{
      this.updateData();
      this.loading = false;
    }
    this.pagination = this.pictureService.pagination;
  }

  onScroll(): void{
    if (this.pictureService.incrementPage()){
      this.updateData();
    }
  }
  updateData(): void{
    this.pictureService.getPictures().subscribe(pics => this.pictures = pics);
  }

}
