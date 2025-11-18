import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-apropos',
  imports: [CommonModule],
  templateUrl: './apropos.html',
  styleUrl: './apropos.css',
})
export class Apropos {
  constructor(private router: Router) { }
  retourVersAccueil() {
    this.router.navigate(['/accueil']);
  }

}
