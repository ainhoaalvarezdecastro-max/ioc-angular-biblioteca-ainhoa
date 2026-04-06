import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LlistaElementsComponent } from './components/llista-elements/llista-elements.component';
import { BarraCercaComponent } from './components/barra-cerca/barra-cerca.component';
import { ElementService } from './serveis/element.service'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LlistaElementsComponent, BarraCercaComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'ioc-angular-biblioteca-ainhoa';

  termeCerca: string = '';

  constructor(private elementService: ElementService) {}

  actualitzarCerca(terme: string) {
    this.termeCerca = terme;
    this.elementService.cercar(terme);
  }

}