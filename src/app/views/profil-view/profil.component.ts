import { Component, OnInit  } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  client: any = {}; // Initialisez un objet vide pour stocker les données du client

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Remplacez l'URL par celle de votre endpoint backend pour récupérer les informations du client.
    this.http.get<any>('http://localhost:3000/api/client/1').subscribe(
      (data) => {
        this.client = data; // Stockez les données du client dans l'objet client
      },
      (error) => {
        console.error('Erreur lors de la récupération des informations du client :', error);
      }
    );
  }
}
