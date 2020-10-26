import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Inicio',
    url: '/dashboard',
    icon: 'icon-home',
  },
  {
    title: true,
    name: 'Administración'
  },
  {
    name: 'Empleados',
    url: '/empleados',
    icon: 'icon-people'
  },
  {
    name: 'Servicios',
    url: '/servicios',
    icon: 'icon-check'
  },
  {
    title: true,
    name: 'Gestión'
  },
  {
    name: 'Propietarios',
    url: '/propietarios',
    icon: 'icon-user',
    children: [
      {
        name: 'Agregar',
        url: '/propietarios',
        icon: 'icon-user-follow'
      },
      {
        name: 'Buscar',
        url: '/BuscarPropietarios',
        icon: 'icon-magnifier'
      }
    ]
  },
  {
    name: 'Mascotas',
    url: '/mascotas',
    icon: 'fa fa-paw',
    children: [ 
      {
        name: 'Agregar',
        url: '/mascotas',
        icon: 'fa fa-plus'
      },
      {
        name: 'Buscar',
        url: '/BuscarMascotas',
        icon: 'fa fa-search'
      },
      
    ]
  },
  {
    name: 'Citas',
    url: '/citas',
    icon: 'icon-clock',
    children: [
      {
        name: 'Agregar',
        url: '/citas',
        icon: 'icon-note',
      },
      {
        name: 'Buscar',
        url: '/citas/citas',
        icon: 'icon-magnifier'
      }
    ]
  },
  {
    name: 'Consultas',
    url: '/consultas',
    icon: 'icon-notebook',
    children: [
      {
        name: 'Agregar',
        url: '/consultas',
        icon: 'icon-bell'
      },
      {
        name: 'Buscar',
        url: '/BuscarConsultas',
        icon: 'icon-magnifier'
      }
    ]
  } 
];
