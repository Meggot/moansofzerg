import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZergUnitTileComponent } from './zerg-unit-tile.component';

describe('ZergUnitTileComponent', () => {
  let component: ZergUnitTileComponent;
  let fixture: ComponentFixture<ZergUnitTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZergUnitTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZergUnitTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
