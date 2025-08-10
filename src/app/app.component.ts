import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AgGridAngular } from "ag-grid-angular";
import type { ColDef } from "ag-grid-community";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { Hero, HeroService } from './services/HeroService';

ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    RouterOutlet,
    AgGridAngular,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lol-champions';
  // Row Data: The data to be displayed.
 /* rowData = [
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ];*/
  rowData : Hero[] = [];

  // Column Definitions: Defines the columns to be displayed.
  /*colDefs: ColDef[] = [
    { field: "make" },
    { field: "model" },
    { field: "price" },
    { field: "electric" }
  ];*/
  colDefs: ColDef[] = [
    {field: "id"},
    {field: "name"}
  ];
  defaultColDef: ColDef = {
    flex: 1,
  };
 private heroService=inject(HeroService);

  ngOnInit() {
    this.load();
  }

  private load() {
    this.heroService.getHeroes().subscribe(heroes => this.rowData = heroes);
  }
}