import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'carsUsersFront'; 
  items: MenuItem[] = [];

  ngOnInit() {
      this.items = [
          {
              label: 'Usuário',
              icon: 'pi pi-fw pi-file',
              items: [
                  {
                      label: 'Listar',
                      icon: 'pi pi-fw pi-external-link',
                      url: 'listUsers'
                  },
                  {
                      label: 'Criar',
                      icon: 'pi pi-fw pi-plus',
                      url: 'createUser'
                  },
                  {
                      separator: true
                  }
              ]
          },
          {
            label: 'Carros',
            icon: 'pi pi-fw pi-file',
            items: [
                {
                    label: 'Listar',
                    icon: 'pi pi-fw external-link',
                    url: 'listCars'
                },
                {
                    label: 'Criar',
                    icon: 'pi pi-fw pi-plus',
                    url: 'createCar'
                }
            ]
        },
        {
            label: 'Conta',
            icon: 'pi pi-fw pi-file',
            items: [
                {
                    label: 'Consultar usuario logado',
                    icon: 'pi pi-fw pi-plus'
                }
            ]
        },
      ];
  }
}