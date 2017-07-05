import { Component, OnInit } from '@angular/core';

const bbbLink = 'https://www.bedbathandbeyond.com/store/giftregistry/view_registry_guest.jsp?eventType=Wedding&registryId=544527522';
@Component({
  selector: 'tam-registry-information',
  templateUrl: './registry-information.component.html',
  styleUrls: ['./registry-information.component.scss']
})
export class RegistryInformationComponent {
  window: Window = window;
  registeredLocations: RegisteredLocation[] = [
    new RegisteredLocation('Crate & Barrel', 'https://www.crateandbarrel.com/gift-registry/morgan-macdonald-and-thomas-manion/r5631548', require('./cab.jpg')),
    new RegisteredLocation('Bed, Bath, and Beyond', bbbLink, require('./bbb.jpg'))
  ];
}


export class RegisteredLocation {
  constructor(
    public name: string,
    public link: string,
    public img: string
  ) { }
}