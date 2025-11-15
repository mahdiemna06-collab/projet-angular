import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AdminModel } from '../../models/admin-model';
import { Admin } from '../../service/admin';
import { AuthentifierService } from '../../service/authentifier-service';

@Component({
  selector: 'app-authentifier',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, RouterLinkActive],
  templateUrl: './authentifier.html',
  styleUrls: ['./authentifier.css'],
})
export class Authentifier implements OnInit {

  admins: AdminModel[] = [];
  formAuthentifier!: FormGroup;

  private adminService = inject(Admin);
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private auth = inject(AuthentifierService);  // ← AuthService pour le guard

  ngOnInit(): void {
    this.initierForm();
    this.adminService.getAdmins().subscribe(data => this.admins = data);
  }

  initierForm(): void {
    this.formAuthentifier = this.fb.group({
      Username: ['', Validators.required],
      motDePasse: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.formAuthentifier.valid) {

      const nom = this.formAuthentifier.value.Username;
      const mdp = this.formAuthentifier.value.motDePasse;

      const adminExistant = this.admins.find(
        admin => admin.username === nom && admin.password === mdp
      );

      if (adminExistant) {
        this.auth.connected();

        this.router.navigate(['/planDuSite']);

      } else {
        alert("Nom d'utilisateur ou mot de passe incorrect.");
      }
    }
  }
}
