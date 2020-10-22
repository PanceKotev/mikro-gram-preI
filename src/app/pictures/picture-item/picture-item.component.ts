import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mkg-picture-item',
  templateUrl: './picture-item.component.html',
  styleUrls: ['./picture-item.component.css']
})
export class PictureItemComponent implements OnInit {
  @Input() title: string;
  @Input() url: string;
  constructor() { }

  ngOnInit(): void {
  }

}
