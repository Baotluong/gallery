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

const sizes = {
  tall: 'tall',
  big: 'big',
  small: 'small',
  wide: 'wide',
};
Object.freeze(sizes);

const { tall, wide, big, small } = sizes;

const Images = [
  { url: cow, size: big, id: 'cow' },
  { url: kingfish, size: wide, id: 'kingfish' },
  { text: 'Things Bao Made' },
  { url: cara, size: big, id: 'cara'},
  { url: skittles, size: tall, id: 'skittles'},
  { url: city, size: big, id: 'city' },
  { url: koi, size: tall, id: 'koi' },
  { url: onion, size: small, id: 'onion' },
  { url: smile, size: tall, id: 'smile' },
  { url: coffee, size: big, id: 'coffee' },
  { url: charlie, size: big, id: 'charlie'},
  { url: fish, size: wide, id: 'fish' },
  { url: meadow, size: wide, id: 'meadow' },
  { url: sky, size: tall, id: 'sky' },
  { url: glasses, size: wide, id: 'glasses' },
  { url: elephant, size: big, id: 'elephant' },
  { url: guy, size: tall, id: 'guy' },
  { url: rafa, size: small, id: 'rafa' },
  { url: tomato, size: small, id: 'tomato' },
  { url: lake, size: wide, id: 'lake' },
  { url: eyes, size: small, id: 'eyes' },
  { url: lana, size: tall, id: 'lana' },
  { url: vdp, size: small, id: 'vdp' },
  { url: girl, size: big, id: 'girl' },
  { url: spartan, size: small, id: 'spartan' },
  { url: ghost, size: small, id: 'ghost' },
  { url: net, size: small, id: 'net' },
  { url: pumpkin, size: small, id: 'pumpkin' },
];

export default Images;
