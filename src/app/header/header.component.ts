import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() selectedComponent = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  recipesClicked(){
    this.selectedComponent.emit(0);
  }

  shoppingListClicked(){
    this.selectedComponent.emit(1);
  }
}
