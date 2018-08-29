
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MyMaterialComponentComponent } from './my-material-component.component';

describe('MyMaterialComponentComponent', () => {
  let component: MyMaterialComponentComponent;
  let fixture: ComponentFixture<MyMaterialComponentComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [MyMaterialComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyMaterialComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
