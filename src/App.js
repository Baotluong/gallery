import React from 'react';

import './App.css';
import baby from './images/baby.png';
import cara from './images/cara.png';
import charlie from './images/charlie.png';
import city from './images/city.png';
import coffee from './images/coffee.png';
import cow from './images/cow.png';
import elephant from './images/elephant.png';
import eyes from './images/eyes.png';
import fish from './images/fish.png';
import girl from './images/girl.png';
import glasses from './images/glasses.png';
import kingfish from './images/kingfish.png';
import koi from './images/koi.png';
import lake from './images/lake.png';
import lana from './images/lana.png';
import meadow from './images/meadow.png';
import net from './images/net.png';
import onion from './images/onion.png';
import pumpkin from './images/pumpkin.png';
import rafa from './images/rafa.png';
import skittles from './images/skittles.png';
import sky from './images/sky.png';
import smile from './images/smile.png';
import spartan from './images/spartan.png';
import guy from './images/guy.png';
import tomato from './images/tomato.png';
import vdp from './images/vdp.png';

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
        <div class="card small" id="baby" style={{backgroundImage: `url(${baby})`}} />
        <div class="card small" id="net" style={{backgroundImage: `url(${net})`}} />
        <div class="card small" id="pumpkin" style={{backgroundImage: `url(${pumpkin})`}} />
      </div>
    </div>
  );
}

export default App;
