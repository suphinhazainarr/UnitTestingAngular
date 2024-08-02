import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'Hello World';
  subtitle = 'Welcome to Angular Testing';
  description = 'This is a sample component for testing HTML content.';
  age : number =5;

  incrementAge(){
    this.age++;
  }

  sumOfThree(a :number ,b: number,c: number){
    let sum  = a +b+c;
    return sum;
  }
  
}

