import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-uploader-component (fileSelected)="onFileSelected($event)"></app-uploader-component>
  <app-reciver-component [receivedFile]="selectedFile"></app-reciver-component>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FileUploadAndShare';

  selectedFile: File | null = null;

  onFileSelected(file: File): void {
    this.selectedFile = file;
  }
}
