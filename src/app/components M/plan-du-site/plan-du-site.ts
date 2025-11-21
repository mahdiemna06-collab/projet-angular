import { Component , inject, OnInit } from '@angular/core';
import { CafeServise } from '../../service/cafe-servise';
import { ListeCafes } from '../../models/liste-cafes';
import { JsonPipe } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';





@Component({
  selector: 'app-plan-du-site',
  standalone: true,
  imports: [RouterLink,RouterLinkActive, JsonPipe],
  templateUrl: './plan-du-site.html',
  styleUrl: './plan-du-site.css',
})
export class PlanDuSite implements OnInit {
  liste: ListeCafes[] = [];
  private readonly cafeService: CafeServise = inject(CafeServise);
  ngOnInit(): void {
    this.cafeService.getCafes().subscribe(data => this.liste = data);
  }
  router: Router = inject(Router);
  retourVersAjout() {
    this.router.navigate(['/ajouter-cafer']);
  }

  
}
