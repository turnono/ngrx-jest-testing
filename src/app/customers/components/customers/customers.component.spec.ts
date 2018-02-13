import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersComponent } from './customers.component';

describe('CustomersComponent', () => {
  let component: CustomersComponent;
  let fixture: ComponentFixture<CustomersComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [CustomersComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('renders markup to snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });

  it('should run your tests', () => {
    expect(1).toMatch;
  });
});
