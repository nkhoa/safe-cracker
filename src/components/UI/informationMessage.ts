import {Localization} from '../../games/localization';
/*
 * MainGame: scene of main game
 * Author : Thomas Tran
 * email: thomas.tran@mfortune.co.uk
 * git: https://github.com/OnePassio/mini_html5_game.git
 */
export default class InformationMessage extends Phaser.Sprite {

constructor(game: Phaser.Game, x: number, y: number) {
        super(game, x, y);
        var style = { font: '30px Luckiest Guy', fill: '#000000'};
    
        this.game.add.text(x,y,Localization.getTextByID(5), style);
        this.game.add.text(x,y+50, Localization.getTextByID(6), style);
    }
  }