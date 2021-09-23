import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenformsComponent } from './template-drivenforms.component';

describe('TemplateDrivenformsComponent', () => {
  let component: TemplateDrivenformsComponent;
  let fixture: ComponentFixture<TemplateDrivenformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateDrivenformsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivenformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
