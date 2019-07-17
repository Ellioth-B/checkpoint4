import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-animaux',
  templateUrl: './animaux.component.html',
  styleUrls: ['./animaux.component.scss']
})
export class AnimauxComponent implements OnInit {
  artists = []
  newArtist = {
    id : '',
    name : '',
    surnom: '',
    description: ''
  }

  constructor(private connection: AdminService) { }

  ngOnInit() {
    this.connection.getArtists().subscribe((data: any) => {
      console.log(data)
      this.artists = data
    })
  }

}
