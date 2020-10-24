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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PictureAddComponent } from './picture-add/picture-add.component';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SharedModule } from '../common/shared.module';
import { MatTooltipModule  } from '@angular/material/tooltip';



@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    InfiniteScrollModule,
    MatCardModule,
    MatRippleModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild([
      { path: 'pictures/new', component: PictureAddComponent},
      { path: 'pictures', component: PictureGridComponent },
      { path: 'pictures/:id', resolve: {picture: PictureResolver}, component: PictureDetailsComponent}
    ])
  ],
  exports: [BrowserAnimationsModule, PictureGridComponent, MatFormFieldModule, RouterModule, MatButtonModule
  ],
  declarations: [PictureGridComponent, PictureItemComponent, PictureDetailsComponent, PictureAddComponent]
})
export class PicturesModule { }
