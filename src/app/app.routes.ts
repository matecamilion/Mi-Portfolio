import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { SobreMi } from './pages/sobre-mi/sobre-mi';
import { Educacion } from './pages/educacion/educacion';

export const routes: Routes = [
    {path: 'home', component: Home},
    {path: 'sobre-mi', component: SobreMi},
    {path: 'educacion', component: Educacion}
];
