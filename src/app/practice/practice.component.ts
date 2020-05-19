import { Component, OnInit } from '@angular/core';
import { SoundEntityPlayer } from '../shared/services/sound-entity-player/sound-entity-player.component';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {

  outputMessage: String = "";

  constructor(private soundEntityPlayer: SoundEntityPlayer) { }

  ngOnInit() {
  }

  buildingClicked(event: string){
    this.outputMessage = "Playing  "+ event
    this.soundEntityPlayer.playZergBuildingSound(event)
  }

  unitClicked(event: string){
    this.outputMessage = "Playing  "+ event
    this.soundEntityPlayer.playZergUnitSound(event)
  }

}
