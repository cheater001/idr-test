import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-not-found-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <mat-card>
      <mat-card-title>404: Page Not Found</mat-card-title>
      <mat-card-content>
        <p>Page doesn't exist yet.</p>
      </mat-card-content>
      <mat-card-actions>
        <button mat-raised-button color="primary" routerLink="/">To Home Page</button>
      </mat-card-actions>
    </mat-card>
  `,
  styles: [
    `
    :host {
      text-align: center;
    }
  `,
  ],
})
export class NotFoundPageComponent {}
