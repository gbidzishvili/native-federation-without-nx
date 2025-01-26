import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoPaymentsComponent } from './todo-payments.component';

describe('TodoPaymentsComponent', () => {
  let component: TodoPaymentsComponent;
  let fixture: ComponentFixture<TodoPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoPaymentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
