import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedComponent = 0;
  title = 'app';

  changeComponent(component: number) {
    this.selectedComponent = component;
  }
}
