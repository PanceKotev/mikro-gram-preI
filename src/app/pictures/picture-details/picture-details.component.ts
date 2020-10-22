import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DeleteDialogComponent } from '../../common/delete-dialog/delete-dialog.component';
import { IPicture } from '../picture.model';
import { PictureService } from '../picture.service';

@Component({
  selector: 'mkg-picture-details',
  templateUrl: './picture-details.component.html',
  styleUrls: ['./picture-details.component.css']
})
export class PictureDetailsComponent implements OnInit {
  editMode = false;
  picture: IPicture;
  editedPicture: IPicture;
  dataChanged = false;
  constructor(private router: Router, private route: ActivatedRoute, private pictureService: PictureService, public dialog: MatDialog) { }

  ngOnInit(): void {

    this.route.data.forEach((data) => {
      this.picture = data.picture;
      this.editedPicture = {... this.picture};
      this.editMode = false;
    });
  }

  toggleEditMode(): void{
    this.editMode = !this.editMode;
  }
  deletePicture(): void{
    const dialogRef = this.dialog.open(DeleteDialogComponent,{
      data: {title: this.picture.title},
      panelClass: ['dialog-bg']
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.pictureService.deletePicture(this.picture.id);
        this.router.navigate(['\pictures']);
      }
    });
  }
  changedData(property: string): void{
    if (this.picture[property] !== this.editedPicture[property]){
      this.dataChanged = true;
    }
  }
  updatePicture(formValues: any): void{
    this.pictureService.updatePicture(this.editedPicture);
    this.editMode = false;
    this.dataChanged = false;
  }

}
