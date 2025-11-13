import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { FormBuilder, Validators, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Gouvernorat } from '../../models/gouvernerat.enum';
import { CafeServise } from '../../service/cafe-servise';
import { Localisation } from '../../models/localisation';
import { ListeCafes } from '../../models/liste-cafes';






@Component({
  selector: 'app-ajouter-cafer',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule, ReactiveFormsModule],
  templateUrl: './ajouter-cafer.html',
  styleUrls: ['./ajouter-cafer.css'],
})
export class AjouterCafer implements OnInit {
  //base de donnees



  gouvernerats=Object.values(Gouvernorat);
  ajoutCafeForm!: FormGroup;
    cafes: ListeCafes[] = [];


  private fb: FormBuilder = inject(FormBuilder);
  private CS: CafeServise = inject(CafeServise);
  getTailleBD() {
    this.CS.getCafes().subscribe((data) => {
      this.cafes = data;
      this.ngOnInit();
    });
  }

  ngOnInit(): void {
    this.ajoutCafeForm = this.fb.nonNullable.group({
      id: [this.cafes.length, Validators.required],
      nom: ['nom du cafe', Validators.required],
      Localisation: [this.gouvernerats[0]],
      dateCreation: ['', Validators.required],
      specialite: ['', [Validators.required, Validators.pattern('^[A-Z][a-z]+$')]],
      budget: [15, [Validators.min(1), Validators.max(100)]]

    });
  }
  onsubmit() {
    if (this.ajoutCafeForm.valid) {
      const nvCafe = this.ajoutCafeForm.value as ListeCafes;
      this.CS.postCafe(nvCafe).subscribe({
        next: (data) => {
          console.log('Formulaire envoyé:', data);
          alert("Café ajouté avec succés!");

        }
      }) }

    else {
      alert("Veuillez remplir tous les champs correctement.");
    }
  }

}
