import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title'

class App extends Component {
  render () {
    return (
      <section>
        <div>
          <div>
            <Title />
            <button>Crear cuenta gratuita</button>
            <div>
              <ul>
                <li>
                  <h3>Calificaciones con emociones</h3>
                  <p>Califica tus lugares con experiencias, no con numeros</p>
                </li>
                <li>
                  <h3>¿Sin internet? Sin problemas</h3>
                  <p>Places funciona sin intenet o en conexiones lentas</p>
                </li>
                <li>
                  <h3>Tus lugares favoritos</h3>
                  <p>Define tu lista de sitios favoritos</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default App
