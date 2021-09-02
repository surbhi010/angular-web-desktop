import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { RouterModule, Routes } from '@angular/router';
import { AppModule } from '../app.module';
import { AppWrapperModule } from '../app-wrapper/app-wrapper.module';
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
          content: 'This is App 1-Sec1. This will contain view related to App 1 Section 1',
        }
      },
      {
        path: 'sec2',
        component: SectionComponent,
        data: {
          content: 'This is App 1-Sec2. This will contain view related to App 1 Section 2',
        }
      },
      {
        path: 'sec3',
        component: SectionComponent,
        data: {
          content: 'This is App 1-Sec3. This will contain view related to App 1 Section 3',
        }
      },
      {
        path: 'sec4',
        component: SectionComponent,
        data: {
          content: 'This is App 1-Sec4. This will contain view related to App 1 Section 4',
        },
      },
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
    exports: [RouterModule]
})
export class App1Module { }
