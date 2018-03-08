import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from "./dashboard/dashboard.component";
import { ImageUploadComponent } from "../app/image-upload/image-upload.component";


const appRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'image_upload', component: ImageUploadComponent },

    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', redirectTo: '/dashboard' }
];

export const routing = RouterModule.forRoot(appRoutes);
