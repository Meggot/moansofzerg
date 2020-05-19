import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InplayComponent } from '../inplay/inplay.component';
import { PracticeComponent } from '../practice/practice.component';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { HomeComponent } from '../home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'inplay', component: InplayComponent },
  { path: 'practice', component: PracticeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
