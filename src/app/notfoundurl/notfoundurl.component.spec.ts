import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotfoundurlComponent } from './notfoundurl.component';

describe('NotfoundurlComponent', () => {
  let component: NotfoundurlComponent;
  let fixture: ComponentFixture<NotfoundurlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotfoundurlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotfoundurlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
