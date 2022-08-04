import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  localHttpURL = 'http://localhost:5000/api';

  uploadVideo(file: File) {
    const fd = new FormData();
    fd.append('file', file, file.name);
    return this.http.post(this.localHttpURL + '/files', fd);
  }

  convertToShort() {
    return this.http.get(this.localHttpURL + '/convert-video');
  }

  compressVideo() {
    return this.http.get(this.localHttpURL + '/compress-video');
  }

  downloadVideo() {
    return this.http.get(this.localHttpURL + '/download-video',
    {observe: 'response', responseType: 'blob'});
  }

}
