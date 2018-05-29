import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsTaskComponent } from './tickets-task.component';

describe('TicketsTaskComponent', () => {
  let component: TicketsTaskComponent;
  let fixture: ComponentFixture<TicketsTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketsTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketsTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
