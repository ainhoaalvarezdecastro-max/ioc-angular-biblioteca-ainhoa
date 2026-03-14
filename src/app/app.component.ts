import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LlistaElementsComponent } from './components/llista-elements/llista-elements.component';
import { BarraCercaComponent } from './components/barra-cerca/barra-cerca.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LlistaElementsComponent, BarraCercaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'ioc-angular-biblioteca-ainhoa';

  termeCerca: string = '';

  actualitzarCerca(terme: string) {
    console.log("TERME CERCA:", terme);
    this.termeCerca = terme;
  }

}