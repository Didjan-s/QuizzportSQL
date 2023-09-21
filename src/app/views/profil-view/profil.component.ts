import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ProfilService } from 'src/app/services/profil.service';
import { User } from 'src/app/models/user/user';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  //client: User = new User; // Initialisez un objet vide pour stocker les données du client
  profil: any;

  constructor(private profilService: ProfilService, private route : ActivatedRoute) { }

  ngOnInit(): void {
  
    let client = this.profilService.getProfil(this.route.snapshot.paramMap.get('id')).subscribe(
      (données) => {
        // Utilisez les données ici
        this.profil = données;
      },
      erreur => {
        // Gérez les erreurs ici
        console.error('Erreur :', erreur);
      },
      () => {
        // Le flux est complet, traitez-le si nécessaire
        console.log('Le flux est complet.');
      }
    );

  }

  
}
