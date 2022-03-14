import Phaser from "phaser";
import map from '../assets/tilesets';
import bg from '../assets/images/background.png';
import spike from '../assets/images/spike.png';
import player from '../assets/images/kenney_player.png';
import playerAtlas from '../assets/images/kenney_player_atlas.json';
import tiles from '../assets/tilesets/platformPack_tilesheet.png';

export default class Game extends Phaser.Scene {
    constructor() {
        super("game")
    }

    preload() {
        this.load.image('background', bg); 
        this.load.image('spike', spike);
        this.load.atlas('player', player, playerAtlas); 
        this.load.image('tiles', tiles);
        this.load.tilemapTiledJSON('map', map); 

    }

    create(){
        const backgroundImage = this.add.image(0, 0, 'background');
        backgroundImage.setOrigin(0, 0);
        backgroundImage.setScale(2, 0.8);
        const map = this.make.tilemap({key: 'map'});
        const tileset = map.addTilesetImage('kenny_simple_platform', 'tiles')
        const platforms = map.createLayer('Platforms' , tileset, 0, 200,);
        platforms.setCollisionbyproert({collision}) 
    }
} 