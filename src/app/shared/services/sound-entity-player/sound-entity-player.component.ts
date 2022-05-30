import { Howl } from 'howler'
import { SoundEntity } from '../../models/SoundEntity';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SoundEntityPlayer {

  activeSound: Howl;
  activeVolume: number = 2;

  constructor() { }

  ngOnInit() {
  }

  public setVolume(newVolume: number) {
    this.activeVolume = newVolume;
    if (this.activeSound !== undefined) {   
      this.activeSound.volume(this.activeVolume);
    }
  }

  public playSoundEntity(entity: SoundEntity) {
    if  (this.activeSound !== undefined) {
        this.activeSound.stop()
    }
    this.activeSound = new Howl({
      volume: this.activeVolume,
      src: ['assets/' + entity.soundFilePath]
        });
    this.activeSound.play()
  }
}
