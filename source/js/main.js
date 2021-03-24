import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

import { Vector as VectorSource } from 'ol/source';
import Draw from 'ol/interaction/Draw';
import { Vector as VectorLayer } from 'ol/layer';

const raster = new TileLayer({
  source: new OSM(),
});

const source = new VectorSource({ wrapX: false });

const vector = new VectorLayer({
  source: source,
});

const map = new Map({
  layers: [raster, vector],
  target: 'map',
  view: new View({
    center: [-11000000, 4600000],
    zoom: 4,
  }),
});

let draw;
const addInteraction = () => {
  draw = new Draw({
    source: source,
    type: 'Circle',
  });
  map.addInteraction(draw);
};

const button = document.querySelector('.button');
console.log(button);
button.addEventListener('click', () => {
  map.removeInteraction(draw);
  addInteraction();
});

document.addEventListener('click', func);
function func(event) {
  if (event.shiftKey) {
    map.removeInteraction(draw);
    addInteraction();
  } else {
    map.removeInteraction(draw);
  }
}
