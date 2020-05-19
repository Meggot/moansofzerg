import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZergBuildingTileComponent } from './zerg-building-tile.component';

describe('ZergBuildingTileComponent', () => {
  let component: ZergBuildingTileComponent;
  let fixture: ComponentFixture<ZergBuildingTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZergBuildingTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZergBuildingTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
