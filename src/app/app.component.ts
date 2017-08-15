import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title="Click me";
  name="sugata";
  lastname="maji";

  tablestyles={
    'color':'red'
  }

  product: Array<Object>=[
    {
      title:"Phone",
      price: 2000
    },
    {
      title:"Bike",
      price: 50000
    },
    {
      title:"Car",
      price: 200000
    },
  ];
  

 onbtnclick(){
     this.title="changed"
      this.title="changed"

    }


  }