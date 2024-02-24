import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RpgWirzardComponent } from './rpg-wirzard.component';

describe('RpgWirzardComponent', () => {
  let component: RpgWirzardComponent;
  let fixture: ComponentFixture<RpgWirzardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RpgWirzardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RpgWirzardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
