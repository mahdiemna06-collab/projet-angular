import { Component, inject, OnInit } from '@angular/core';
import { ListeCafes } from '../../models/liste-cafes';
import { CafeServise } from '../../service/cafe-servise';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { SearchCafe } from '../search-cafe/search-cafe';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cafes-list',
  imports: [SearchCafe, ReactiveFormsModule,CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './cafes-list.html',
  styleUrl: './cafes-list.css',
})
export class CafesList implements OnInit {
  cafes: ListeCafes[] = [];
  cafeSelectionne?: ListeCafes;

  commentaireForm!: FormGroup;
  private readonly fb: FormBuilder = inject(FormBuilder);
  private readonly cafeService: CafeServise = inject(CafeServise);

  ngOnInit(): void {
    this.cafeService.getCafes().subscribe(data => this.cafes = data);

    // Formulaire commentaire
    this.commentaireForm = this.fb.group({
      nom: ['', [Validators.required, Validators.maxLength(10), Validators.pattern('^[A-Z][a-zA-Z]*$')]],
      prenom: ['', [Validators.required, Validators.maxLength(10), Validators.pattern('^[A-Z][a-zA-Z]*$')]],
      text: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  // Ajouter un commentaire
  onAddComment(cafe: ListeCafes) {
    if (this.commentaireForm.valid) {
      const comment = this.commentaireForm.value;
      if (!cafe.comments) cafe.comments = [];
      cafe.comments.push(comment);
      this.commentaireForm.reset();
    } else {
      this.commentaireForm.markAllAsTouched();
    }
  }

  // Getters pour validations
  get nom() { return this.commentaireForm.get('nom'); }
  get prenom() { return this.commentaireForm.get('prenom'); }
  get text() { return this.commentaireForm.get('text'); }

  // Actions existantes
  onDelete(cafe: ListeCafes) {
    if (confirm(`Supprimer ${cafe.nom} ?`)) {
      this.cafeService.deleteCafe(cafe.id).subscribe(() => {
        this.cafes = this.cafes.filter(c => c.id !== cafe.id);
      });
    }
  }

  onLike(cafe: ListeCafes) {
    cafe.likes++;
    this.cafeService.updateCafe(cafe).subscribe();
  }

  onInfos(cafe: ListeCafes) {
    this.cafeSelectionne = cafe;
  }

  onRetour() {
    this.cafeSelectionne = undefined;
  }

  selectCafeList(cafe: ListeCafes) {
    this.cafeSelectionne = cafe;
  }
  private router: Router = inject(Router);
  onReserve() {
    this.router.navigate(['/reservation']);
  }
}
