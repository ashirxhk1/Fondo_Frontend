import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraceUserNavComponent } from './trace-user-nav.component';

describe('TraceUserNavComponent', () => {
  let component: TraceUserNavComponent;
  let fixture: ComponentFixture<TraceUserNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TraceUserNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TraceUserNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
