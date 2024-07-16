import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoredataComponent } from './storedata.component';

describe('StoredataComponent', () => {
  let component: StoredataComponent;
  let fixture: ComponentFixture<StoredataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoredataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoredataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
