import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/header/header';
import { Footer } from "./shared/footer/footer";
import { SobreMi } from './pages/sobre-mi/sobre-mi';
import { Educacion } from './pages/educacion/educacion';
import { Experiencia } from './pages/experiencia/experiencia';
import { Habilidades } from './pages/habilidades/habilidades';
import { Home } from './pages/home/home';
import { Proyectos } from './pages/proyectos/proyectos';
import { Contacto } from './pages/contacto/contacto';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, SobreMi, Educacion, Experiencia, Habilidades, Home, Proyectos, Contacto, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Landing-Mateo-Camilion');
}
