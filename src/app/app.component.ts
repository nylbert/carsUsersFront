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
                  },
                  {
                      label: 'Listar por ID',
                      icon: 'pi pi-fw pi-external-link'
                  },
                  {
                      label: 'Atualizar por ID',
                      icon: 'pi pi-fw pi-external-link'
                  },
                  {
                      label: 'Deletar por ID',
                      icon: 'pi pi-fw pi-trash'
                  }
              ]
          },
          {
            label: 'Carros',
            icon: 'pi pi-fw pi-file',
            items: [
                {
                    label: 'Listar',
                    icon: 'pi pi-fw pi-plus'
                },
                {
                    label: 'Criar',
                    icon: 'pi pi-fw pi-trash'
                },
                {
                    separator: true
                },
                {
                    label: 'Listar por ID',
                    icon: 'pi pi-fw pi-external-link'
                },
                {
                    label: 'Atualizar por ID',
                    icon: 'pi pi-fw pi-external-link'
                },
                {
                    label: 'Deletar por ID',
                    icon: 'pi pi-fw pi-external-link'
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