import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyPkgsPage } from './my-pkgs.page';

describe('MyPkgsPage', () => {
  let component: MyPkgsPage;
  let fixture: ComponentFixture<MyPkgsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MyPkgsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
