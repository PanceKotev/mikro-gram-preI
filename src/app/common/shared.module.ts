import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';



@NgModule({
  imports: [CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatToolbarModule,
    MatTooltipModule,
    MatIconModule,
    RouterModule,
  ],
  exports: [DeleteDialogComponent, ScrollToTopComponent, NavbarComponent],
  declarations: [NavbarComponent, ScrollToTopComponent, DeleteDialogComponent],
  providers: [],
})
export class SharedModule { }
