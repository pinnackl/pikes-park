import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PikesUserComponent } from './pikes-user.component';

describe('PikesUserComponent', () => {
  let component: PikesUserComponent;
  let fixture: ComponentFixture<PikesUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PikesUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PikesUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
