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
  constructor(private pictureService: PictureService) {
   }

  ngOnInit(): void {
    this.updateData();
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
