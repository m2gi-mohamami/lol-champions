import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
export interface Champion {
 id: string;
  key: string;
  name: string;
  title: string;
  tags: string[];
}

@Injectable({ providedIn: 'root' })
export class ChampionService {
   private baseUrl = 'assets/data/champion_info_2.json';

  constructor(private http: HttpClient) {}
 getChampions(): Observable<Champion[]> {
    return this.http.get<{ data: Record<string, Champion> }>(this.baseUrl).pipe(
      map(json => {
        const championsArray = Object.values(json.data);
        return championsArray;
      })
    );
}

}
