import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RDetailsPageComponent } from './r-details-page.component';

describe('RDetailsPageComponent', () => {
  let component: RDetailsPageComponent;
  let fixture: ComponentFixture<RDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RDetailsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
