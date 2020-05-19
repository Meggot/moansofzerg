import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-zerg-building-tile',
  templateUrl: './zerg-building-tile.component.html',
  styleUrls: ['./zerg-building-tile.component.css']
})
export class ZergBuildingTileComponent implements OnInit {

  constructor() { }

  @Output() buildingClicked = new EventEmitter<any>();

  ngOnInit() {
  }

  tileClicked(name: string) {
    this.buildingClicked.emit(name)
  }

}
