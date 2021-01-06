import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-reservaciones',
  templateUrl: './reservaciones.component.html',
  styleUrls: ['./reservaciones.component.css']
})
export class ReservacionesComponent implements OnInit {

  url: string = "https://services.naturleon.com/iframe/IframeMotorReservacion.php?hash=NlIzTmM5VnFyY3BwQ0NRUEZUSnJpUT09";
  urlSafe: SafeResourceUrl;
  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

}
