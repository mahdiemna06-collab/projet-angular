import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation',
  imports: [ReactiveFormsModule],
  templateUrl: './reservation.html',
  styleUrl: './reservation.css',
})
export class Reservation {
 reservationForm!: FormGroup;
  private readonly fb: FormBuilder = inject(FormBuilder);

  ngOnInit(): void {
    this.reservationForm = this.fb.group({
      nom: ['', [
        Validators.required,
        Validators.maxLength(10),
        Validators.pattern('^[A-Z][a-zA-Z]*$')
      ]],
      prenom: ['', [
        Validators.required,
        Validators.maxLength(10),
        Validators.pattern('^[A-Z][a-zA-Z]*$')
      ]],
      quand: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.reservationForm.valid) {
      console.log("Réservation :", this.reservationForm.value);
      alert("Réservation confirmée !");
      this.reservationForm.reset();
    } else {
      this.reservationForm.markAllAsTouched();
    }
  }

  get nom() { return this.reservationForm.get('nom'); }
  get prenom() { return this.reservationForm.get('prenom'); }
  get quand() { return this.reservationForm.get('quand'); }

isNomInvalid() {
    return this.nom?.invalid && this.nom?.dirty;
  }

  isPrenomInvalid() {
    return this.prenom?.invalid && this.prenom?.dirty;
  }

  isQuandInvalid() {
    return this.quand?.invalid && this.quand?.dirty;
  }
  private router: Router = inject(Router);
  retourVersListe() {
    this.router.navigate(['/cafes-list']);
  }
}
