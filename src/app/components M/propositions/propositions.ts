import { Component, inject, OnInit } from '@angular/core';
import { CafeServise } from '../../service/cafe-servise';
import { ListeCafes } from '../../models/liste-cafes';
import {  RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-propositions',
  standalone: true,
  imports:[ RouterLink, RouterLinkActive],
  templateUrl: './propositions.html',
  styleUrls: ['./propositions.css']
})
export class Propositions implements OnInit{
  liste: ListeCafes[] = [];
  private readonly cafeService: CafeServise = inject(CafeServise);
  ngOnInit(): void {
    this.cafeService.getCafes().subscribe(data => this.liste = data);
  }

}
