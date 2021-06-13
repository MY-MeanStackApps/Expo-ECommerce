import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodedomainComponent } from './codedomain.component';

describe('CodedomainComponent', () => {
  let component: CodedomainComponent;
  let fixture: ComponentFixture<CodedomainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodedomainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodedomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
