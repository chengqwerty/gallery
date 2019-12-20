import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeNoticeComponent } from './make-notice.component';

describe('MakeNoticeComponent', () => {
  let component: MakeNoticeComponent;
  let fixture: ComponentFixture<MakeNoticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeNoticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
