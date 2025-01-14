import { ComponentFixture, TestBed } from '@angular/core/testing';

import { testing_toolComponent } from './testing_tool.component';

describe('testing_toolComponent', () => {
  let component: testing_toolComponent;
  let fixture: ComponentFixture<testing_toolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [testing_toolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(testing_toolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
