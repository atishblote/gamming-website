import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  allData:any
  constructor(private global: GlobalService){}

  ngOnInit(): void {
    this.global.getWithToken('all-listings').subscribe({
      next:(res:any)=>{
        this.allData = res.data
        console.log(this.allData)
      },
      error: (err:any)=>{
        console.log(err.error)
      }
    })
  }

}
