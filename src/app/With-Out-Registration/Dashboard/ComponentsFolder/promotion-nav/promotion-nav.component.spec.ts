import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionNavComponent } from './promotion-nav.component';

describe('PromotionNavComponent', () => {
  let component: PromotionNavComponent;
  let fixture: ComponentFixture<PromotionNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromotionNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PromotionNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
