import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  localHttpURL = 'http://localhost:5000/api';

  uploadVideo(file: File) {
    const fd = new FormData();
    fd.append('file', file, file.name);
    return this.http.post(this.localHttpURL + '/files', fd);
  }

  convertToShort(resolution: string) {
    return this.http.post(this.localHttpURL + '/convert-video', resolution);
  }

  compressVideo(resolution: string) {
    return this.http.post(this.localHttpURL + '/compress-video', resolution);
  }

  downloadVideo() {
    return this.http.get(this.localHttpURL + '/download-video',
    {observe: 'response', responseType: 'blob'});
  }

}
