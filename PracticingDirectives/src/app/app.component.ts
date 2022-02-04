import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Assignmner3';
  Showsecret = false;
  log = [];

  onToggleDetails(){
    this.Showsecret= !this.Showsecret;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
}





}


