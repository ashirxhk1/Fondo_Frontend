import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestautantNavComponent } from './restautant-nav.component';

describe('RestautantNavComponent', () => {
  let component: RestautantNavComponent;
  let fixture: ComponentFixture<RestautantNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestautantNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RestautantNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
