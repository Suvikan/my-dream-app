import { Component, OnInit } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-servers',
  //selector: '[app-servers]',
  //selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer:boolean = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created!';
  }

  onUpdateServerName(event:Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
