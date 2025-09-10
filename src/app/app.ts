import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LandingPage } from './landingPage/landingPage';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, LandingPage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class App {
  protected readonly title = signal('sakura');
}
