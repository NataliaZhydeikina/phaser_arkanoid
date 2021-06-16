import 'airbnb-browser-shims';
import * as Phaser from 'phaser';
import { preload, create } from './src/scenes/PlayScene';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 }
    }
  },
  scene: {
    preload,
    create
  }
};

window.addEventListener('load', () => {
  debugger;
  window.game = new Phaser.Game(config);
});
