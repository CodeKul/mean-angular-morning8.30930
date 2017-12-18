import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobOneComponent } from './mob-one.component';

describe('MobOneComponent', () => {
  let component: MobOneComponent;
  let fixture: ComponentFixture<MobOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
