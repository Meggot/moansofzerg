import { Howl } from 'howler'
import { zergUnits, zergBuildings } from '../../zerg-models';
import { SoundEntity } from '../../models/SoundEntity';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SoundEntityPlayer {

  activeSound : Howl;

  constructor() { }

  ngOnInit() {
  }

  public playSoundEntity(entity: SoundEntity) {
    if  (this.activeSound !== undefined) {
        this.activeSound.stop()
    }
    this.activeSound = new Howl({
      src: ['assets/' + entity.soundFilePath]
        });
    this.activeSound.play()
  }
}
