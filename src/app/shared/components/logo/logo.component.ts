import { Component, Input } from '@angular/core';

@Component({
  selector: 'fm-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {
  @Input() logoText: boolean = true;
  @Input() width: string = '32px';
  @Input() height: string = '32px';
  @Input() isWhite: boolean = false;
}
