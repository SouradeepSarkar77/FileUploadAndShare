import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reciver-component',
  template: `
  <div *ngIf="receivedFile">
    <h2>Received File:</h2>
    <p>{{ receivedFile.name }}</p>
  </div>`,
  styleUrls: ['./reciver-component.component.scss']
})
export class ReciverComponentComponent {
  @Input() receivedFile: File | null = null;
}
