import {Component, OnInit} from '@angular/core';
import { faFileCode } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  faFileCode = faFileCode;

  constructor() {
  }

  ngOnInit(): void {
  }

}
