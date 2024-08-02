import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('age should be 5', () => {
    expect(component.age).toBe(5);
  });

  it('should increase age by 1', () => {
    component.incrementAge();
    expect(component.age).toBe(6)

  });

  it('should find the sum of three numbers',  () => {
      let sumOFthree = component.sumOfThree(1,2,3);
      expect(sumOFthree).toBe(6);
      expect(component.sumOfThree(5,2,3)).toBe(10);
      expect(component.sumOfThree(5,2,5)).toBe(12);

  });

  it('should display the correct title in h1', ()=>{
    const compiled = fixture.nativeElement;
    const h1Element = compiled.querySelector('h1');
    expect(h1Element.textContent).toContain('Hello World');
  });

  it('should display the correct subtitle in h2', ()=>{
    const compiled = fixture.nativeElement;
    const h2Element = compiled.querySelector('h2');
    expect(h2Element.textContent).toContain('Welcome to Angular Testing');
  })


});
