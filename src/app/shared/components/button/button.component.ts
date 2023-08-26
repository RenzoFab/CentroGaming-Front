import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input()
  type: 'primary' | 'gradient' | 'warn' = 'primary';

  @Input()
  cursor: boolean = true;
}
