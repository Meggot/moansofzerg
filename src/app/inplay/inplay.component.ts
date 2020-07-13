import { Component, OnInit } from '@angular/core';
import { GameState } from '../shared/models/gamestate';
import { SoundEntityPlayer } from '../shared/services/sound-entity-player/sound-entity-player.component';
import { zergUnits, zergBuildings } from '../shared/zerg-models';
import { Selection } from '../shared/models/Selection';
import { terranUnits, terranBuildings } from '../shared/terran-models';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inplay',
  templateUrl: './inplay.component.html',
  styleUrls: ['./inplay.component.css']
})
export class InplayComponent implements OnInit {

  isPlaying: boolean = false

  finished = false;

  gameState: GameState

  lastAnswerCorrect = true

  units: Selection[] = []

  buildings: Selection[] = []

  correctSelections: Selection[] = []
  
  constructor(private soundEntityPlayer: SoundEntityPlayer, private route: ActivatedRoute) { 
  }

  ngOnInit() {
    this.startGame();
  }

  startGame(){
    this.isPlaying = true;
    let race = this.route.snapshot.paramMap.get('id')
    if (race == 'zerg') {
      zergUnits.forEach((unit, index) => {
        this.units[index] = new Selection(unit, "Inplay")
      });
      zergBuildings.forEach((building, index) => {
        this.buildings[index] = new Selection(building, "Inplay")
      });
    } else if (race == 'terran') {
      terranUnits.forEach((unit, index) => {
        this.units[index] = new Selection(unit, "Inplay")
      });
      terranBuildings.forEach((building, index) => {
        this.buildings[index] = new Selection(building, "Inplay")
      });
    }
    this.gameState = new GameState(this.units.concat(this.buildings))
    this.playNoise()
  }

  playNoise() {
    this.soundEntityPlayer.playSoundEntity(this.gameState.getActiveSoundEntity().entity)
  }

  answer(selection: Selection){
    if (this.finished) {
      return;
    }

    let lastAnswer = this.gameState.getActiveSoundEntity().entity.name;
    if (this.gameState.submitAnswer(selection.entity.name)) {
      this.gameState.outputMessage = "Correct, that was the sound of a " + lastAnswer;
      this.lastAnswerCorrect = true;
      this.correctSelections[this.gameState.score-1] = selection
    } else {
      this.gameState.outputMessage = "Incorrect, that was the sound of a " + lastAnswer;
      this.lastAnswerCorrect = false;
    }

    if (this.gameState.isFinished()) {
      console.log("Game Over")
      this.finished = true;
      this.gameOver()
    }

    this.playNoise()
  }

  gameOver() {
    this.units.forEach(unit => {
      unit.state = "img-wrong"
    });
    this.buildings.forEach(building => {
      building.state = "img-wrong"
    });
    this.correctSelections.forEach(selection => {
      selection.state = "img-correct"
    })
  }
}
