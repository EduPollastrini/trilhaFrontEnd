import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myname = 'Eduardo Pollastrini';

  myguia = 'Filipe Firmino';

  myturma = '20';

  date = new Date();
}