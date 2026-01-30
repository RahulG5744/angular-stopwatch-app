import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Stopwatch } from './stopwatch/stopwatch';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Stopwatch],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {}

export { AppComponent as App };
