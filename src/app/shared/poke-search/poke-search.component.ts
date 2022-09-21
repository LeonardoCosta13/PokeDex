import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.scss']
})
export class PokeSearchComponent implements OnInit {
  @Output() public emmiSearch: EventEmitter<string> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  public search(value: string){
    this.emmiSearch.emit(value);
  }
}
