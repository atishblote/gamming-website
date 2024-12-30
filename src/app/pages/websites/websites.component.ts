import { Component, OnInit } from '@angular/core';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { Accordion, initFlowbite } from 'flowbite';

@Component({
  selector: 'app-websites',
  standalone: true,
  imports: [HeroSectionComponent],
  templateUrl: './websites.component.html',
  styleUrl: './websites.component.scss'
})
export class WebsitesComponent implements  OnInit{
  title:string = "List Of Websites"


  ngOnInit(): void {
    initFlowbite();

  }
}
