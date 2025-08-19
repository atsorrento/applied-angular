import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

@Component({
  selector: 'app-ui',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div>
      <button class="btn btn-primary">-</button>
      <span>{{ counterValue() }}</span>
      <button class="btn btn-primary">+</button>
    </div>
  `,
  styles: ``,
})
export class Ui {
  counterValue = signal<'countValue'>;
}
