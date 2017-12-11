import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyToolTipComponent } from './my-tool-tip.component';

describe('MyToolTipComponent', () => {
  let component: MyToolTipComponent;
  let fixture: ComponentFixture<MyToolTipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyToolTipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyToolTipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
