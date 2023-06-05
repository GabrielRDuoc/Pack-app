import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaquetesClientePage } from './paquetes-cliente.page';

describe('PaquetesClientePage', () => {
  let component: PaquetesClientePage;
  let fixture: ComponentFixture<PaquetesClientePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PaquetesClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
