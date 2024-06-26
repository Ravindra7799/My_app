import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreteAccountComponent } from './crete-account.component';

describe('CreteAccountComponent', () => {
  let component: CreteAccountComponent;
  let fixture: ComponentFixture<CreteAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreteAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreteAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
