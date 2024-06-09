import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticNavComponent } from './analytic-nav.component';

describe('AnalyticNavComponent', () => {
  let component: AnalyticNavComponent;
  let fixture: ComponentFixture<AnalyticNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalyticNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnalyticNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
