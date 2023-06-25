import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorizadoFalseComponent } from './autorizado-false.component';

describe('AutorizadoFalseComponent', () => {
  let component: AutorizadoFalseComponent;
  let fixture: ComponentFixture<AutorizadoFalseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutorizadoFalseComponent]
    });
    fixture = TestBed.createComponent(AutorizadoFalseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
