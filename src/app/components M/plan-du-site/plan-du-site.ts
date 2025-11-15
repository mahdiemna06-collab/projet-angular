import { Component , inject, OnInit } from '@angular/core';
import { CafeServise } from '../../service/cafe-servise';
import { ListeCafes } from '../../models/liste-cafes';
import { JsonPipe } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthentifierService } from '../../service/authentifier-service';




@Component({
  selector: 'app-plan-du-site',
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
    constructor(private router: Router) { }

  retourVersAjout() {
    this.router.navigate(['/ajouter-cafer']);
  }
  auth: AuthentifierService = inject(AuthentifierService);
  deconnecter() {
    this.auth.deconnected();
    this.router.navigate(['/authentifier']);
  }

}
