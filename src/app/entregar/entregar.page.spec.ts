import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EntregarPage } from './entregar.page';

describe('EntregarPage', () => {
  let component: EntregarPage;
  let fixture: ComponentFixture<EntregarPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(EntregarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
