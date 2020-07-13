import { Component, OnInit } from '@angular/core';
import { SoundEntityPlayer } from '../shared/services/sound-entity-player/sound-entity-player.component';
import { ZergUnits, zergUnits, zergBuildings } from '../shared/zerg-models';
import { Selection } from '../shared/models/Selection';
import { terranUnits, terranBuildings } from '../shared/terran-models';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {

  outputMessage: String = "";
  zergUnits: Selection[] = []
  zergBuildings: Selection[] = []
  terranUnits: Selection[] = []
  terranBuildings: Selection[] = []
  playingSelection: Selection;

  constructor(private soundEntityPlayer: SoundEntityPlayer) {
    zergUnits.forEach((unit, index) => {
      this.zergUnits[index] = new Selection(unit, "Practice")
    });
    zergBuildings.forEach((building, index) => {
      this.zergBuildings[index] = new Selection(building, "Practice")
    });
    terranUnits.forEach((unit, index) => {
      this.terranUnits[index] = new Selection(unit, "Practice")
    });
    terranBuildings.forEach((building, index) => {
      this.terranBuildings[index] = new Selection(building, "Practice")
    });
  }

  ngOnInit() {
  }

  playSound(selection: Selection) {
    if (this.playingSelection != undefined) {
      this.playingSelection.state = "Practice"
    }
    this.playingSelection = selection;
    this.playingSelection.state = "img-correct"
    this.outputMessage = "Playing  " + selection.entity.name
    this.soundEntityPlayer.playSoundEntity(selection.entity)
  }
}
