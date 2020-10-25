import { Component, Input } from '@angular/core';

@Component({
  selector: 'fm-redirect-message-page',
  templateUrl: './redirect-message-page.component.html',
  styleUrls: ['./redirect-message-page.component.scss']
})
export class RedirectMessagePageComponent {
 @Input() messageStatus: string = '';
 @Input() messageText: string = '';
}
