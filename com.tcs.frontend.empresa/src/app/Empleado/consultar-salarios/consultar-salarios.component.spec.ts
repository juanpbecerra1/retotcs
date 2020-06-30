import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarSalariosComponent } from './consultar-salarios.component';

describe('ConsultarSalariosComponent', () => {
  let component: ConsultarSalariosComponent;
  let fixture: ComponentFixture<ConsultarSalariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarSalariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarSalariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
