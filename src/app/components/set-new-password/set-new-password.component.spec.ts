import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have an invalid form initially', () => {
    expect(component.passwordForm.invalid).toBeTrue();
  });

  it('should validate password matching correctly', async () => {
    component.passwordForm.setValue({
      newPassword: 'Test123',
      confirmPassword: 'Test123'
    });

    component.checkPasswords();
    fixture.detectChanges();

    await fixture.whenStable();

    expect(component.passwordForm.valid).toBeTrue();
    expect(component.passwordForm.controls['confirmPassword'].errors).toBeNull();
  });

  it('should detect password mismatch', async () => {
    component.passwordForm.setValue({
      newPassword: 'Test123',
      confirmPassword: 'WrongPass'
    });

    component.checkPasswords();
    fixture.detectChanges();

    await fixture.whenStable();

    expect(component.passwordForm.controls['confirmPassword'].errors).toEqual({ mismatch: true });
  });

  it('should enable submit button when form is valid', async () => {
    component.passwordForm.setValue({
      newPassword: 'Test123',
      confirmPassword: 'Test123'
    });

    component.checkPasswords();
    fixture.detectChanges();

    await fixture.whenStable();

    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(button.disabled).toBeFalse();
  });

  it('should disable submit button when passwords do not match', async () => {
    component.passwordForm.setValue({
      newPassword: 'Test123',
      confirmPassword: 'WrongPass'
    });

    component.checkPasswords();
    fixture.detectChanges();

    await fixture.whenStable();

    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(button.disabled).toBeTrue();
  });
});
