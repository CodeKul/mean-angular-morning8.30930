import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobTwoComponent } from './mob-two.component';

describe('MobTwoComponent', () => {
  let component: MobTwoComponent;
  let fixture: ComponentFixture<MobTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
