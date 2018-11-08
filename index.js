import * as dashbling from '@dashbling/client';
import './styles/main.scss';

import Dashboard from './Dashboard';

// Noeud HTML à enrichir
const root = document.getElementById("root");

// On affiche le dashboard
dashbling.start(root, Dashboard);

// Hot reload pour le dev
if (module.hot) {
  module.hot.accept();
}

