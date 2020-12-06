import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TpmapComponent } from './tpmap.component';

describe('TpmapComponent', () => {
  let component: TpmapComponent;
  let fixture: ComponentFixture<TpmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TpmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TpmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
