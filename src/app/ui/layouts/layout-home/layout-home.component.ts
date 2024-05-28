import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout-home',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './layout-home.component.html',
  styleUrl: './layout-home.component.css',
  encapsulation: ViewEncapsulation.None
})
export class LayoutHomeComponent { }
