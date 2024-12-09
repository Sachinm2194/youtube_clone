import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HalfSidebarComponent } from './half-sidebar.component';

describe('HalfSidebarComponent', () => {
  let component: HalfSidebarComponent;
  let fixture: ComponentFixture<HalfSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HalfSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HalfSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
