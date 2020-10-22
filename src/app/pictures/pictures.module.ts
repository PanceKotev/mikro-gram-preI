import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PictureGridComponent } from './picture-grid/picture-grid.component';
import { MatCardModule } from '@angular/material/card';
import {MatRippleModule} from '@angular/material/core';
import { PictureItemComponent } from './picture-item/picture-item.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PictureDetailsComponent } from './picture-details/picture-details.component';
import { RouterModule } from '@angular/router';
import { PictureResolver } from './picture-details/picture.resolver';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';



@NgModule({
  imports: [CommonModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatRippleModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'pictures', component: PictureGridComponent },
      { path: 'pictures/:id', resolve: {picture: PictureResolver}, component: PictureDetailsComponent}
    ])
  ],
  exports: [BrowserAnimationsModule, PictureGridComponent, MatFormFieldModule, RouterModule, MatButtonModule],
  declarations: [PictureGridComponent, PictureItemComponent, PictureDetailsComponent]
})
export class PicturesModule { }
