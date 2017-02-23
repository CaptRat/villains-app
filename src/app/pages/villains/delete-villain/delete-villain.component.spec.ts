import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteVillainComponent } from './delete-villain.component';

describe('DeleteVillainComponent', () => {
  let component: DeleteVillainComponent;
  let fixture: ComponentFixture<DeleteVillainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteVillainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteVillainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
