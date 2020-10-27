import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PictureService } from '../picture.service';

@Component({
  selector: 'mkg-picture-add',
  templateUrl: './picture-add.component.html',
  styleUrls: ['./picture-add.component.css']
})
export class PictureAddComponent implements OnInit {
  title: FormControl;
  albumId: FormControl;
  url: FormControl;
  thumbnailUrl: FormControl;
  addPictureForm: FormGroup;
  constructor(private pictureService: PictureService,
              private router: Router,
              private snack: MatSnackBar) { }

  ngOnInit(): void {
    this.title = new FormControl('', [Validators.required, Validators.maxLength(20)]);
    this.albumId = new FormControl('', [Validators.required, Validators.max(99), Validators.min(0)]);
    this.url = new FormControl('', Validators.required);
    this.thumbnailUrl = new FormControl('', Validators.required);
    this.addPictureForm = new FormGroup({
      title: this.title,
      albumId: this.albumId,
      url: this.url,
      thumbnailUrl: this.thumbnailUrl
    });
  }

  addPicture(formValues: any): void{
    this.pictureService.addPicture(formValues);
    this.snack.open('Successfully added picture', 'dismiss', {
      duration: 1000
    });
    this.router.navigate(['/pictures']);
  }

  cancelAdd(): void{
    this.router.navigate(['/pictures']);
  }

}
