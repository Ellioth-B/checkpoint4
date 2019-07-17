import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  artists = []
  newArtist = {
    id : '',
    name : '',
    role: ''
  }

  constructor(private connection: AdminService) { }

  ngOnInit() {
    this.connection.getArtists().subscribe((data: any) => {
      console.log(data)
      this.artists = data
    })
  }
  
  deleteArtist(id) {
    this.connection.deleteArtist(id).subscribe( (data) => {
      console.log(data)
      console.log('Effacer')
    })
  }
 
  create() {
    this.connection.createArtist(this.newArtist).subscribe( (data) => {
      console.log(data)
    })
  }
 
  update() {
    this.connection.updateArtist(this.newArtist).subscribe( (data) => {
      console.log(data)
    })
  }

}
