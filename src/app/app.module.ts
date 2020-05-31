import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InplayComponent } from './inplay/inplay.component';
import { PracticeComponent } from './practice/practice.component';
import { AppRoutingModule } from './routing/routing.module';
import { HomeComponent } from './home/home.component';
import { ScorescreenComponent } from './inplay/scorescreen/scorescreen.component';
import { TileComponent } from './shared/components/tile/tile.component';

@NgModule({
  declarations: [
    AppComponent,
    InplayComponent,
    PracticeComponent,
    TileComponent,
    HomeComponent,
    ScorescreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
