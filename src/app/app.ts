import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Footer } from './shared/components/footer/footer';


@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterOutlet,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('sakura');
}
