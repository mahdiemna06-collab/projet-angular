import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-apropos',
  imports: [RouterOutlet, RouterLink, RouterLinkActive,CommonModule],
  templateUrl: './apropos.html',
  styleUrl: './apropos.css',
})
export class Apropos {
  constructor(private router: Router) { }
  retourVersAccueil() {
    this.router.navigate(['/accueil']);
  }

}
