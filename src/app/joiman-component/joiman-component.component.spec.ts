import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoimanComponentComponent } from './joiman-component.component';

describe('JoimanComponentComponent', () => {
  let component: JoimanComponentComponent;
  let fixture: ComponentFixture<JoimanComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoimanComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoimanComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
