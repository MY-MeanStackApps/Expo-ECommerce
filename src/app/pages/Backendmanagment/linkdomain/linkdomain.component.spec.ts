import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkdomainComponent } from './linkdomain.component';

describe('LinkdomainComponent', () => {
  let component: LinkdomainComponent;
  let fixture: ComponentFixture<LinkdomainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkdomainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkdomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
