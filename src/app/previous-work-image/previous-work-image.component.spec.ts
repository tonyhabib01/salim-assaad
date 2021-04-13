import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousWorkImageComponent } from './previous-work-image.component';

describe('PreviousWorkImageComponent', () => {
  let component: PreviousWorkImageComponent;
  let fixture: ComponentFixture<PreviousWorkImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviousWorkImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousWorkImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
