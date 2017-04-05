import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './components/pages/home.component';
import {AboutComponent} from './components/pages/about.component';
import {ContactComponent} from './components/pages/contact.component';
import {MoviesComponent} from './components/pages/movies.component';

const appRoutes : Routes = [
	{
		path:'',
		component : HomeComponent
	},
	{
		path:'about',
		component : AboutComponent
	},
	{
		path:'contact',
		component : ContactComponent
	},
	{
		path:'movies',
		component : MoviesComponent
	}
];

export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);