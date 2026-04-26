import { Injectable } from '@angular/core';
import { signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ElementApiResponse, ElementCataleg } from '../models/element.model';
import { adaptarElementsApi } from '../adaptadors/element.adaptador';

@Injectable({
  providedIn: 'root'
})
export class ElementService {

  constructor(private http: HttpClient) { }

  elements = signal<ElementCataleg[]>([]);
  carregant = signal<boolean>(false);
  error = signal<string | null>(null);

  obtenirPopulars(): void {
    this.carregant.set(true);
    this.error.set(null);

    this.http.get<ElementApiResponse[]>(`${environment.apiUrl}/elements?popular=true`)
      .subscribe({
        next: (data) => {
          const adaptats = adaptarElementsApi(data);
          this.elements.set(adaptats);
          this.carregant.set(false);
        },
        error: () => {
          this.error.set('No s\'han pogut carregar els elements.');
          this.carregant.set(false);
        }
      });
  }

  cercar(terme: string): void {
  this.carregant.set(true);
  this.error.set(null);

  this.http.get<ElementApiResponse[]>(`${environment.apiUrl}/elements?nom_like=${terme}`)
    .subscribe({
      next: (data) => {
        const adaptats = adaptarElementsApi(data);
        this.elements.set(adaptats);
        this.carregant.set(false);
      },
      error: () => {
        this.error.set('No s\'ha pogut fer la cerca.');
        this.carregant.set(false);
      }
    });
}
}