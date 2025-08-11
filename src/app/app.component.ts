import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AgGridAngular } from "ag-grid-angular";
import type { ColDef } from "ag-grid-community";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { Champion, ChampionService } from './services/ChampionService';

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
  
  rowData: Champion[] = [];
  columnDefs: ColDef[] = [
    { field: 'name', sortable: true, filter: true },
    { field: 'title', sortable: true, filter: true },
    { field: 'tags', sortable: true, filter: true, valueFormatter: params => Array.isArray(params.value) ? params.value.join(', ') : ''},
  ];

  defaultColDef: ColDef = {
    flex: 1,
    sortable: true,
    filter: true,
  };

  private championService = inject(ChampionService);

  ngOnInit(): void {
    this.load();
  }

private load(): void {
  this.championService.getChampions().subscribe({
    next: champions => {
      console.log('Champions chargés dans component:', champions);
      this.rowData = champions;
    },
    error: err => console.error('Erreur lors du chargement des champions:', err)
  });
}

  private tagsFormatter(params: any): string {
    return Array.isArray(params.value) ? params.value.join(', ') : '';
  }}