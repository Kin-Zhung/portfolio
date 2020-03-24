import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapstoneComponent } from './capstone.component';

describe('CapstoneComponent', () => {
  let component: CapstoneComponent;
  let fixture: ComponentFixture<CapstoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapstoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapstoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
