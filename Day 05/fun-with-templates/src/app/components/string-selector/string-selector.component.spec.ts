import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringSelectorComponent } from './string-selector.component';

describe('StringSelectorComponent', () => {
  let component: StringSelectorComponent;
  let fixture: ComponentFixture<StringSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StringSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StringSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
