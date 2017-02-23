import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VillainsNew } from './villains-new.component';

describe('VillainsNew', () => {
  let component: VillainsNew;
  let fixture: ComponentFixture<VillainsNew>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillainsNew ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillainsNew);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
