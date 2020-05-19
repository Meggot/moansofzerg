import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InplayComponent } from './inplay/inplay.component';
import { PracticeComponent } from './practice/practice.component';
import { AppRoutingModule } from './routing/routing.module';
import { ZergUnitTileComponent } from './shared/components/zerg-unit-tile/zerg-unit-tile.component';
import { ZergBuildingTileComponent } from './shared/components/zerg-building-tile/zerg-building-tile.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    InplayComponent,
    PracticeComponent,
    ZergUnitTileComponent,
    ZergBuildingTileComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
