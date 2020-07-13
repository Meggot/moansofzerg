import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InplayComponent } from '../inplay/inplay.component';
import { PracticeComponent } from '../practice/practice.component';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { MenuComponent } from '../challenge/menu/menu.component';
import { ChallengeComponent } from '../challenge/challenge/challenge.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'challenge', component: ChallengeComponent, children:[
    { path: 'moans/:id', component: InplayComponent },
    { path: '**', component: MenuComponent}
  ]},
  { path: 'practice', component: PracticeComponent},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
