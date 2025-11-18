import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ListeCafes } from '../../models/liste-cafes';
@Component({
  selector: 'app-search-cafe',
  templateUrl: './search-cafe.html',
  styleUrl: './search-cafe.css',
})
export class SearchCafe {

  @Input() cafes: ListeCafes[] = [];
  @Output() onSelectCafe = new EventEmitter<ListeCafes>();

  selectedCafes: ListeCafes[] = [];
  searchTerm: string = '';

  hasSearched: boolean = false;

selectCafeList(nom: string) {
  this.searchTerm = nom.toLowerCase();
  this.selectedCafes = this.cafes.filter(c =>
    c.nom.toLowerCase().includes(this.searchTerm)
  );

  this.hasSearched = true;  
}


  showDetails(cafe: ListeCafes) {
    this.onSelectCafe.emit(cafe);
  }
}
