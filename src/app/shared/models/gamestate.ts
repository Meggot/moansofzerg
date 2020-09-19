import { Injectable } from '@angular/core';
import { Selection } from './Selection';

@Injectable({
    providedIn: 'root',
  })
export class GameState {

    soundEntities: Selection[] = []

    activeSoundEntities: Selection;

    score: number = 0;

    wrongAnswers: number = 0;

    outputMessage: string;

    length: number = 0;

    constructor(soundEntities: Selection[]) {
        this.shuffleArray(soundEntities)
        this.length = soundEntities.length;
        this.soundEntities = soundEntities
        this.activeSoundEntities = soundEntities.pop();
    }

    getActiveSoundEntity(){
        console.log(this.activeSoundEntities)
        return this.activeSoundEntities;
    }

    submitAnswer(answer: String): Boolean {
        let lastAnswer = this.activeSoundEntities.entity.name;
        if(this.soundEntities.length !== 0){
            this.activeSoundEntities = this.soundEntities.pop();
        } else {
            this.activeSoundEntities = undefined;
        }
        if (lastAnswer === answer) {
            this.score == this.score++;
            return true;
        } 
        this.wrongAnswers = this.wrongAnswers+ 1;
        return false;
    }

    isFinished() {
        if (this.soundEntities.length === 0 && this.activeSoundEntities === undefined) {
            return true;
        }
        return false;
    }

    /* Randomize array in-place using Durstenfeld shuffle algorithm */
    shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
}