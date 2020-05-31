import { Injectable } from '@angular/core';
import { SoundEntity } from './SoundEntity';
import { zergUnits, zergBuildings } from '../zerg-models';

@Injectable({
    providedIn: 'root',
  })
export class GameState {

    soundEntities: SoundEntity[] = []

    activeSoundEntities: SoundEntity;

    score: number = 0;

    wrongAnswers: number = 0;

    outputMessage: string;

    length: number = 0;

    constructor(includeZergBuildings: boolean, includeZergUnits: boolean) {
        if (includeZergBuildings == true) {
            this.soundEntities = this.soundEntities.concat(zergBuildings)
        }
        if (includeZergUnits == true) {
            this.soundEntities = this.soundEntities.concat(zergUnits)
        }
        this.shuffleArray(this.soundEntities)
        this.length = this.soundEntities.length;
        this.activeSoundEntities = this.soundEntities.pop();
    }

    getActiveSoundEntity(){
        console.log(this.activeSoundEntities)
        return this.activeSoundEntities;
    }

    submitAnswer(answer: String): Boolean {
        let lastAnswer = this.activeSoundEntities.name;
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