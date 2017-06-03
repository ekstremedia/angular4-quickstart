import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';

const appRoutes: Routes = [
	{
		path: '',
		component: WelcomeComponent
	},
	{
		path: 'side2',
		component: WelcomeComponent
	},
	// {
	// 	path: 'side3',
	// 	component: Side3Component
	// },
	// {
	// 	path: 'gullkorn',
	// 	component: LandingComponent
	// },
	// {
	// 	path: 'bilde',
	// 	component: BildeComponent
	// },	
	// {
	// 	path: 'artikkel',
	// 	component: ArtikkelComponent
	// }	,	
	  { path: '**', component: WelcomeComponent }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
