import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-counter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterOutlet],
  template: `<div>Counter Stuff Goes Here</div>
    <router-outlet />
    <p>
      <a routerLink="ui">UI</a>
    </p> `,
  styles: ``,
})
export class Counter {}
