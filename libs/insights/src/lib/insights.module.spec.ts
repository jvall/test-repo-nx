import { async, TestBed } from '@angular/core/testing';
import { InsightsModule } from './insights.module';

describe('InsightsModule', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [InsightsModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(InsightsModule).toBeDefined();
  });
});
