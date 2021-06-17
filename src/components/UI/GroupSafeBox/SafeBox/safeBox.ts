
import * as Assets from '../../../../assets';
import { Image } from 'phaser-ce';

/*
 * MainGame: scene of main game
 * Author : Thomas Tran
 * email: thomas.tran@mfortune.co.uk
 * git: https://github.com/OnePassio/mini_html5_game.git
 */
export default class SafeBox extends Phaser.Sprite {

constructor(game: Phaser.Game, x: number, y: number, index, reward) {
        super(game, x, y);
        var style = { font: 'bold 48px Timmana', fill: '#ffffff'};
        const backImg = Assets.Images.ImagesSafeMinigame.getName();
        const giftBox = Assets.Images.ImagesSafeOpenMinigame.getName();
        this.game.add.text(x+70, y+45,index, style);
        this.game.add.image(x,y,backImg,'box');
        const giftOpenBox = this.game.add.image(x-35,y-30,giftBox,'giftOpenBox');
        const rewards = this.game.add.text(x+60, y+45,reward,style);
        giftOpenBox.visible = true;
        rewards.visible = true;
        

    }

  
  public static create(): void {
  }

  public update(): void {

  }

 

 
}