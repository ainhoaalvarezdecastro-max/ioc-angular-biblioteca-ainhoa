import { Injectable, signal, computed } from '@angular/core';
import { ElementCataleg } from '../models/element.model';

@Injectable({
  providedIn: 'root'
})
export class PreferitsService {

  private readonly STORAGE_KEY = 'preferits-cataleg';

  preferits = signal<ElementCataleg[]>([]);

  totalPreferits = computed(() => this.preferits().length);

  constructor() {
    this.carregarPreferits();
  }

  private guardarPreferits() {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.preferits()));
    } catch (error) {
      console.error('Error guardant preferits', error);
    }
  }

  private carregarPreferits() {
    try {
      const dades = localStorage.getItem(this.STORAGE_KEY);
      if (dades) {
        this.preferits.set(JSON.parse(dades));
      }
    } catch (error) {
      console.error('Error carregant preferits', error);
    }
  }

  afegirPreferit(element: ElementCataleg): void {
    const actuals = this.preferits();
    this.preferits.set([...actuals, element]);
    this.guardarPreferits();
  }

  eliminarPreferit(id: string): void {
    const filtrats = this.preferits().filter(e => e.id !== id);
    this.preferits.set(filtrats);
    this.guardarPreferits();
  }

  esPreferit(id: string): boolean {
    return this.preferits().some(e => e.id === id);
  }
}