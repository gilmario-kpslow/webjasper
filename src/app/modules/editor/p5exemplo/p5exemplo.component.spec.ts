import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P5exemploComponent } from './p5exemplo.component';

describe('P5exemploComponent', () => {
  let component: P5exemploComponent;
  let fixture: ComponentFixture<P5exemploComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P5exemploComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P5exemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
