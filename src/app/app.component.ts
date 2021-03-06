import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostData } from './post-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient) { }

  title = 'shorts-uploader';
  selectedFile!: File;
  

  onFileSelected(event: any) {
    this.selectedFile = <File>event.target.files[0];
    console.log(this.selectedFile);
  }

  onUpload() {
    const fd = new FormData();
    fd.append('file', this.selectedFile, this.selectedFile.name);//converts the file to form data
    this.http.post('http://localhost:5000/api/files', fd)
    .subscribe(res => {
      console.log(res)
    })
    console.log(this.selectedFile);
  }
  onGetTest() {
    this.http.get('http://localhost:5000/api/convert-video')
    .subscribe(res => {
      console.log(res)
    })
  }
}
