import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
  result!:string;
  text!:string;

  display(val:string)
  {
    if(val=="a")
    {
      this.result="assets/a.png";
      this.text="A";
    }
    if(val=="b")
    {
      this.result="assets/b.png";
      this.text="B";
    }
    if(val=="c")
    {
      this.result="assets/c.png";
      this.text="C";
    }
    if(val=="d")
    {
      this.result="assets/d.jfif";
      this.text="D";
    }
  }
}