import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink,RouterLinkActive } from '@angular/router';
import { Admin } from '../../service/admin';
import { AuthentifierService } from '../../service/authentifier-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profil',
  imports: [RouterLink,RouterLinkActive,CommonModule],
  templateUrl: './profil.html',
  styleUrls: ['./profil.css'],
})
export class Profil implements OnInit{
  usernameActuel = localStorage.getItem('usernameActuel');

  photo = "";
  showProfileMenu = false;
  //recuperer photo
  adminService: Admin = inject(Admin);
  private router: Router = inject(Router);
  auth: AuthentifierService = inject(AuthentifierService);


  ngOnInit() {
    if (this.usernameActuel) {
      this.adminService.getPhoto(this.usernameActuel).subscribe(
        data => {
          console.log("URL photo reçue :", data);
          this.photo = data;
        }
      );

    }
  }
   
  deconnecter() {
    this.auth.deconnected();
    this.router.navigate(['/authentifier']);
  }

  





}
