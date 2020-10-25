import { Component, OnInit } from '@angular/core';
import { PictureService } from '../../pictures/picture.service';

@Component({
  selector: 'mkg-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  pagination: boolean;
  constructor(private pictureService: PictureService) { }

  ngOnInit(): void {
    this.pagination = this.pictureService.pagination;
  }
  togglePagination(): void{
    this.pictureService.togglePagination();
    this.pagination = this.pictureService.pagination;
  }

}
