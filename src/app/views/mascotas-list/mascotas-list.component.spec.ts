import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotasListComponent } from './mascotas-list.component';

describe('MascotasListComponent', () => {
  let component: MascotasListComponent;
  let fixture: ComponentFixture<MascotasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MascotasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MascotasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
