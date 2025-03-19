import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DlcComponent } from './dlc.component';

describe('DlcComponent', () => {
  let component: DlcComponent;
  let fixture: ComponentFixture<DlcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DlcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DlcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
