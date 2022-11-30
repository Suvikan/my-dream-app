import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  template: `
  <section>
    <h1>Hi! I'm in the ServerS Componenet!</h1>
    <p>Below this text I have 2 Server Componenets</p>
    <app-server></app-server>
    <app-server></app-server>
</section>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
