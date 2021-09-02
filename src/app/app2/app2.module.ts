import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { AppWrapperModule } from '../app-wrapper/app-wrapper.module';
import { RouterModule, Routes } from '@angular/router';
import { SectionComponent } from './section/section.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
      children: [
        {
          path: '',
          redirectTo: 'sec1',
        },
        {
          path: 'sec1',
          component: SectionComponent,
          data: {
            content: 'This is App 2-Sec1. This will contain view related to App 2 Section 1',
          }
        },
        {
          path: 'sec2',
          component: SectionComponent,
          data: {
            content: 'This is App 2-Sec2. This will contain view related to App 2 Section 2',
          }
        }
      ]
    }

];


@NgModule({
  declarations: [MainComponent, SectionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AppWrapperModule,
  ],
  exports: [
    RouterModule,
  ]
})
export class App2Module { }
