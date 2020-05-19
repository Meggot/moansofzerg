import { Component, OnInit } from '@angular/core';
import { GameState } from '../shared/services/gamestate';
import { SoundEntity } from '../shared/models/SoundEntity';
import { SoundEntityPlayer } from '../shared/services/sound-entity-player/sound-entity-player.component';

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

  outputMessage: String  = "";
  
  constructor(private soundEntityPlayer: SoundEntityPlayer) { }

  ngOnInit() {
  }


  startGame(){
    this.isPlaying = true;
    this.gameState = new GameState(true, true)
    this.playNoise()
  }

  playNoise() {
    this.soundEntityPlayer.playSoundEntity(this.gameState.getActiveSoundEntity())
  }

  answer(answer: string){
    if (this.finished) {
      return;
    }
    
    let lastAnswer = this.gameState.getActiveSoundEntity().name;
    if (this.gameState.submitAnswer(answer)) {
      this.outputMessage = "Correct, that was the sound of a " + lastAnswer;
      this.lastAnswerCorrect = true;
    } else {
      this.outputMessage = "Incorrect, that was the sound of a " + lastAnswer;
      this.lastAnswerCorrect = false;
    }

    if (this.gameState.isFinished()) {
      console.log("Game Over")
      this.finished = true;
    }

    this.playNoise()
  }
}
