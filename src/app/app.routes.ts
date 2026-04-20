import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { SobreMi } from './pages/sobre-mi/sobre-mi';
import { Educacion } from './pages/educacion/educacion';
import { Habilidades } from './pages/habilidades/habilidades';
import { Proyectos } from './pages/proyectos/proyectos';
import { Experiencia } from './pages/experiencia/experiencia';
import { Contacto } from './pages/contacto/contacto';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: Home},
    {path: 'sobre-mi', component: SobreMi},
    {path: 'educacion', component: Educacion},
    {path: 'habilidades', component: Habilidades},
    {path: 'proyectos', component: Proyectos},
    {path: 'experiencia', component: Experiencia},
    {path: 'contacto', component: Contacto}
];
