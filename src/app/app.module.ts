import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TaskbarComponent } from './taskbar/taskbar.component';
import { AppWrapperComponent } from './app-wrapper/app-wrapper.component';
import { AppHeaderComponent } from './app-wrapper/app-header/app-header.component';
import { AppSidebarComponent } from './app-wrapper/app-sidebar/app-sidebar.component';
import { AppContentComponent } from './app-wrapper/app-content/app-content.component';
import { AppWrapperModule } from './app-wrapper/app-wrapper.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TaskbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppWrapperModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
