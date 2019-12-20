import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeGalleryComponent } from './make-gallery.component';

describe('MakeGalleryComponent', () => {
  let component: MakeGalleryComponent;
  let fixture: ComponentFixture<MakeGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
