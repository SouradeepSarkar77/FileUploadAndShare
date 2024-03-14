import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-uploader-component',
  template: `
  <h2>Upload File:</h2>
  <input type="file" (change)="onFileSelected($event)" />`,
  styleUrls: ['./uploader-component.component.scss']
})
export class UploaderComponentComponent {
  @Output() fileSelected: EventEmitter<File> = new EventEmitter<File>();

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    this.fileSelected.emit(file);
  }
}
