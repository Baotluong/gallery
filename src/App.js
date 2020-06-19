import React from 'react';

import './App.css';
import cara from './images/cara.jpg';
import charlie from './images/charlie.jpg';
import city from './images/city.jpg';
import coffee from './images/coffee.jpg';
import cow from './images/cow.jpg';
import elephant from './images/elephant.jpg';
import eyes from './images/eyes.jpg';
import fish from './images/fish.jpg';
import ghost from './images/ghost.jpg';
import girl from './images/girl.jpg';
import glasses from './images/glasses.jpg';
import kingfish from './images/kingfish.jpg';
import koi from './images/koi.jpg';
import lake from './images/lake.jpg';
import lana from './images/lana.jpg';
import meadow from './images/meadow.jpg';
import net from './images/net.jpg';
import onion from './images/onion.jpg';
import pumpkin from './images/pumpkin.jpg';
import rafa from './images/rafa.jpg';
import skittles from './images/skittles.jpg';
import sky from './images/sky.jpg';
import smile from './images/smile.jpg';
import spartan from './images/spartan.jpg';
import guy from './images/guy.jpg';
import tomato from './images/tomato.jpg';
import vdp from './images/vdp.jpg';

function App() {
  return (
    <div>
      <div class="photo-grid">
        <div class="card big" id="cow" style={{backgroundImage: `url(${cow})`}} />
        <div class="card wide" id="kingfish" style={{backgroundImage: `url(${kingfish})`}} />
        <div class="card small text" >
          <div>Things I've Made</div>
          <div id="by">-Bao</div>
        </div>
        <div class="card big" id="cara" style={{backgroundImage: `url(${cara})`}} />
        <div class="card tall" id="skittle" style={{backgroundImage: `url(${skittles})`}} />
        <div class="card big" id="city" style={{backgroundImage: `url(${city})`}} />
        <div class="card tall" id="koi" style={{backgroundImage: `url(${koi})`}} />
        <div class="card small" id="onion" style={{backgroundImage: `url(${onion})`}} />
        <div class="card tall" id="smile" style={{backgroundImage: `url(${smile})`}} />
        <div class="card big" id="coffee" style={{backgroundImage: `url(${coffee})`}} />
        <div class="card big" id="charlie" style={{backgroundImage: `url(${charlie})`}} />
        <div class="card wide" id="fish" style={{backgroundImage: `url(${fish})`}} />
        <div class="card wide" id="meadow" style={{backgroundImage: `url(${meadow})`}} />
        <div class="card tall" id="sky" style={{backgroundImage: `url(${sky})`}} />
        <div class="card wide" id="glasses" style={{backgroundImage: `url(${glasses})`}} />
        <div class="card big" id="elephant" style={{backgroundImage: `url(${elephant})`}} />
        <div class="card tall" id="guy" style={{backgroundImage: `url(${guy})`}} />
        <div class="card small" id="rafa" style={{backgroundImage: `url(${rafa})`}} />
        <div class="card small" id="tomato" style={{backgroundImage: `url(${tomato})`}} />
        <div class="card wide" id="lake" style={{backgroundImage: `url(${lake})`}} />
        <div class="card small" id="eyes" style={{backgroundImage: `url(${eyes})`}} />
        <div class="card tall" id="lana" style={{backgroundImage: `url(${lana})`}} />
        <div class="card small" id="vdp" style={{backgroundImage: `url(${vdp})`}} />
        <div class="card big" id="girl" style={{backgroundImage: `url(${girl})`}} />
        <div class="card small" id="spartan" style={{backgroundImage: `url(${spartan})`}} />
        <div class="card small" id="ghost" style={{backgroundImage: `url(${ghost})`}} />
        <div class="card small" id="net" style={{backgroundImage: `url(${net})`}} />
        <div class="card small" id="pumpkin" style={{backgroundImage: `url(${pumpkin})`}} />
      </div>
    </div>
  );
}

export default App;
