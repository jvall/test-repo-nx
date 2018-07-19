import { async, TestBed } from '@angular/core/testing';
import { WorkflowModule } from './workflow.module';

describe('WorkflowModule', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [WorkflowModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(WorkflowModule).toBeDefined();
  });
});
