import 'core-js/stable';
import 'regenerator-runtime/runtime';
import './assets/css/style.css';

import loginFront from './modules/frontLogin';

const login = new loginFront('.form-login')
const cadastro = new loginFront('.form-cadastro')
login.init();
cadastro.init();
