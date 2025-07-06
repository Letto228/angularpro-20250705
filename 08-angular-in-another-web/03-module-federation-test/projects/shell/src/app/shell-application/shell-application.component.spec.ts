import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellApplicationComponent } from './shell-application.component';

describe('ShellApplicationComponent', () => {
  let component: ShellApplicationComponent;
  let fixture: ComponentFixture<ShellApplicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShellApplicationComponent]
    });
    fixture = TestBed.createComponent(ShellApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
