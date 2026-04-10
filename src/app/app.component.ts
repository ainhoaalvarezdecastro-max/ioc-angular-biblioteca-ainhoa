import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LlistaElementsComponent } from './components/llista-elements/llista-elements.component';
import { BarraCercaComponent } from './components/barra-cerca/barra-cerca.component';
import { ElementService } from './serveis/element.service'; 
import { FormulariCercaComponent } from './components/formulari-cerca/formulari-cerca.component';
import { PreferitsPanelComponent } from './components/preferits-panel/preferits-panel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LlistaElementsComponent,FormulariCercaComponent,PreferitsPanelComponent],
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