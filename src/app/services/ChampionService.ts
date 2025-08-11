import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
export interface Champion {
 id: string;
  key: string;
  name: string;
  title: string;
  tags: string[];
}

@Injectable({ providedIn: 'root' })
export class ChampionService {
   private baseUrl = 'api/champions'; 

  constructor(private http: HttpClient) {}
 getChampions(): Observable<Champion[]> {
    return this.http.get<Champion[]>(this.baseUrl);
}

}
