import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectMessagePageComponent } from './redirect-message-page.component';

describe('RedirectMessagePageComponent', () => {
  let component: RedirectMessagePageComponent;
  let fixture: ComponentFixture<RedirectMessagePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedirectMessagePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedirectMessagePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
