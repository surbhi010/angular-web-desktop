import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppWrapperComponent } from './app-wrapper.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppSidebarComponent } from './app-sidebar/app-sidebar.component';
import { AppContentComponent } from './app-content/app-content.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppWrapperComponent,
    AppHeaderComponent,
    AppSidebarComponent,
    AppContentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    AppWrapperComponent
  ],
})
export class AppWrapperModule { }
