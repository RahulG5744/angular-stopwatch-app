import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stopwatch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stopwatch.html',
  styleUrls: ['./stopwatch.css']
})
export class Stopwatch {

  hours = 0;
  minutes = 0;
  seconds = 0;

  timer: any;
  running = false;

  laps: string[] = [];

  start() {
    if (this.running) return;

    this.running = true;
    this.timer = setInterval(() => {
      this.seconds++;

      if (this.seconds === 60) {
        this.seconds = 0;
        this.minutes++;
      }

      if (this.minutes === 60) {
        this.minutes = 0;
        this.hours++;
      }
    }, 1000);
  }

  stop() {
    clearInterval(this.timer);
    this.running = false;
  }

  reset() {
    this.stop();
    this.hours = this.minutes = this.seconds = 0;
    this.laps = [];
  }

  lap() {
    this.laps.push(
      `${this.format(this.hours)}:${this.format(this.minutes)}:${this.format(this.seconds)}`
    );
  }

  format(val: number): string {
    return val < 10 ? '0' + val : val.toString();
  }
}
