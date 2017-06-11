/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BildeComponent } from './bilde.component';

describe('BildeComponent', () => {
  let component: BildeComponent;
  let fixture: ComponentFixture<BildeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BildeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BildeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
