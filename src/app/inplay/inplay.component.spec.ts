import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InplayComponent } from './inplay.component';

describe('InplayComponent', () => {
  let component: InplayComponent;
  let fixture: ComponentFixture<InplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
