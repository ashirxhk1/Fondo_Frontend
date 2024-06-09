import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificationNavComponent } from './modification-nav.component';

describe('ModificationNavComponent', () => {
  let component: ModificationNavComponent;
  let fixture: ComponentFixture<ModificationNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModificationNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModificationNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
