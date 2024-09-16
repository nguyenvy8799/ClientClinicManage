import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {}
}
