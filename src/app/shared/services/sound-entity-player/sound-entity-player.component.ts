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

  public playZergUnitSound(name: String) {
    zergUnits.forEach( (soundEntity) => {
      if (soundEntity.name == name) {
        this.playSoundEntity(soundEntity)
      }
    })
  }

  public playZergBuildingSound(name: String) {
    zergBuildings.forEach( (soundEntity) => {
      if (soundEntity.name === name) {
        this.playSoundEntity(soundEntity)
      }
    })
  }

  public playSoundEntity(entity: SoundEntity) {
    if  (this.activeSound !== undefined) {
        this.activeSound.stop()
    }
    console.log("Playing " + entity.name)
    this.activeSound = new Howl({
      src: ['assets/' + entity.soundFilePath]
        });
    this.activeSound.play()
  }
}
