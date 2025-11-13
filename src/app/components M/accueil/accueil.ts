import { Component } from '@angular/core';
import { Route } from '@angular/router';
import { CommonModule } from '@angular/common';

import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './accueil.html',
  styleUrls: ['./accueil.css']
})
export class Accueil {
  videoSRC = "assets/videos/tunisia.mp4";

  }




