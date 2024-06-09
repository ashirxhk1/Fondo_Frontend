import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectFrenchiseComponent } from './select-frenchise.component';

describe('SelectFrenchiseComponent', () => {
  let component: SelectFrenchiseComponent;
  let fixture: ComponentFixture<SelectFrenchiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectFrenchiseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectFrenchiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
