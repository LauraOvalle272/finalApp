import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokelistPage } from './pokelist.page';

describe('PokelistPage', () => {
  let component: PokelistPage;
  let fixture: ComponentFixture<PokelistPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PokelistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
