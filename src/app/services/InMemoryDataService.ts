import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import championData from '../../assets/data/champion_info_2.json';
@Injectable({providedIn: 'root'})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const champions=Object.values((championData as any).data);
    return {champions};
  }
}
