import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldApp } from './world-app';

describe('WorldApp', () => {
  let component: WorldApp;
  let fixture: ComponentFixture<WorldApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorldApp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorldApp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
