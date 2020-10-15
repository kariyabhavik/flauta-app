import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myangular10app';
  public choose='';
  setvalue(drp:any)
  {
    this.choose=drp.target.value;
  }
}
