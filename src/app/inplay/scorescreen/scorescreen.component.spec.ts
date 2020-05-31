import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScorescreenComponent } from './scorescreen.component';

describe('ScorescreenComponent', () => {
  let component: ScorescreenComponent;
  let fixture: ComponentFixture<ScorescreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScorescreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScorescreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
