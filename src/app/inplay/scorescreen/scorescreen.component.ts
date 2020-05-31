import { Component, OnInit, Input } from '@angular/core';
import { GameState } from 'src/app/shared/models/gamestate';

@Component({
  selector: 'app-scorescreen',
  templateUrl: './scorescreen.component.html',
  styleUrls: ['./scorescreen.component.css']
})
export class ScorescreenComponent implements OnInit {

  @Input('gameState')
  gameState: GameState
  
  constructor() { }

  ngOnInit() {
  }

}
