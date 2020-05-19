import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-zerg-unit-tile',
  templateUrl: './zerg-unit-tile.component.html',
  styleUrls: ['./zerg-unit-tile.component.css']
})
export class ZergUnitTileComponent implements OnInit {

  @Output() unitClicked = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }


  tileClicked(name: string) {
    this.unitClicked.emit(name)
  }

}
