import Home from './pages/home.vue';
import CadastroPage from './pages/cadastro.vue';
import UsuariosPage from './pages/usuarios.vue';

import Configuration from './pages/configuration.vue';

export default [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/configuration/',
    component: Configuration,
  },
  {
    path: '/usuarios/',
    component: UsuariosPage,
    title: 'Usuários'
  },
  {
    path: '/cadastro/',
    component: CadastroPage,
    title: 'Cadastro'
  },
]
