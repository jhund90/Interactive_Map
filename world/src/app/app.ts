import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WorldApp } from './world-app/world-app';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [RouterOutlet],
})
export class App {
  protected readonly title = signal('D280_World_App');
}
