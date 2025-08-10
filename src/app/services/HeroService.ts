import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

export interface Hero{
    id: number;
    name: string;
}
@Injectable({providedIn: 'root'})
export class HeroService{
    private baseUrl = 'api/heroes';
    constructor(private http: HttpClient) {}
    getHeroes():Observable<Hero[]> {
        return this.http.get<Hero[]>(this.baseUrl);
    }
}