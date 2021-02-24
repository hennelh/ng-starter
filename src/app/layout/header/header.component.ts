import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleClicked = new EventEmitter();

  userEmail = 'hennelh@hotmail.com';

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(): void {
    this.toggleClicked.emit();
  }

}
