import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Selection } from '../../models/Selection';

@Component({
  selector: 'app-tile-component',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {

  @Output() clickedTile = new EventEmitter<Selection>();

  @Input()
  public selections: Selection[]

  constructor() { 
  }

  ngOnInit() {
  }


  tileClicked(selection: Selection) {
    this.clickedTile.emit(selection)
  }

}
