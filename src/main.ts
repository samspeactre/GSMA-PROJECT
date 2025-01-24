import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Update paths to match your project structure
import { routes } from './app/app.routes';  // Correct path to app.routes.ts
import { AppComponent } from './app/app.component';  // Correct path to app.component.ts

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    importProvidersFrom(RouterModule.forRoot(routes)),
    importProvidersFrom(BrowserAnimationsModule),
  ]
}).catch((err) => console.error(err));
