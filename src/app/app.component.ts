import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostData } from './post-data';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient, public api: ApiService) { }

  title = 'shorts-uploader';
  selectedFile!: File;


  onFileSelected(event: any) {
    this.selectedFile = <File>event.target.files[0];
    console.log(this.selectedFile);
  }

  onUpload() {
    this.api.uploadVideo(this.selectedFile).subscribe(res => {
      console.log(res)
    });
    console.log(this.selectedFile);
  }

  shortConversion() {
    this.api.convertToShort().subscribe(res => {
      console.log(res)
    })
  }

  videoCompression() {
    this.api.compressVideo().subscribe(res => {
      console.log(res)
    })
  }

  public onDownload(): void{
    this.api.downloadVideo()
    .subscribe(res => {
      let fileName = "video";
      console.log(fileName);
      let blob: Blob = res.body as Blob;
      let a = document.createElement('a');
      a.download = fileName;
      a.href = window.URL.createObjectURL(blob);
      a.click();
    })
  }
}
