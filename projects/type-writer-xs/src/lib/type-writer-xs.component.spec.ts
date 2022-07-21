import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeWriterXsComponent } from './type-writer-xs.component';

describe('TypeWriterXsComponent', () => {
  let component: TypeWriterXsComponent;
  let fixture: ComponentFixture<TypeWriterXsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeWriterXsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeWriterXsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
