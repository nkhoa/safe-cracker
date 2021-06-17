
import * as Assets from '../assets';
import GroupSafeBox from '../components/UI/GroupSafeBox/groupSafeBox';
import InformationMessage from '../components/UI/InformationMessage';
import Roulette from '../components/UI/roulette';
import * as Consts from '../utils/constants'
import {Localization} from '../games/localization';
import { Image, Button,Text} from 'phaser-ce';
import GameLogic from '../games/gameLogic';
import {ObserverGameEvent} from '../games/observerGameEvent';

/*
 * MainGame: scene of main game
 * Author : Thomas Tran
 * email: thomas.tran@mfortune.co.uk
 * git: https://github.com/OnePassio/mini_html5_game.git
 */
export default class MainGame extends Phaser.State {

  //ui variable
  private backGroundPanel:Image;
  private roulette: any;
  private buttonPlay:Button;
  private textPlay: Text;
   private gameEvent = ObserverGameEvent;
  
  
  public create(): void {
    this.game.stage.backgroundColor = '#ffffff';
    const logic = new GameLogic();
    this.gameEvent.Instance().subscribe(logic);
    
    

    //set background image
     this.game.add.image(0,0,Assets.Images.ImagesBackgroundSafeMinigame.getName());
     this.buttonPlay = this.game.add.button(Consts.POSITION_BUTTON_PLAY_AGAIN.x,Consts.POSITION_BUTTON_PLAY_AGAIN.y, Assets.Images.SpritesheetsButton.getName(), this.goNext)
     this.textPlay = this.game.add.text(Consts.POSITION_BUTTON_PLAY_AGAIN.x+15,Consts.POSITION_BUTTON_PLAY_AGAIN.y+20, Localization.getTextByID(7), { font: '37px Luckiest Guy', fill: '#ffffff' })


     //this.roulette = new Roulette(this.game, 0, 0);

     this.game.add.group(new Roulette(this.game, 0, 0));
     this.game.add.group(new GroupSafeBox(this.game, 0, 0, logic.GenerateRandomNumber()));
     this.game.add.group(new InformationMessage(this.game,Consts.POSITION_TEXT_GUIDE_LINE.x, Consts.POSITION_TEXT_GUIDE_LINE.y));

     
     
     //logic.updateSafeBox(message:any)
    
   

    // effect when screen is opening
    this.game.camera.flash(0x000000, 500)
  }

  public update(): void {
  }
  private goNext(): void {
    this.game.state.start(Consts.SCENE_MAIN_GAME)
  }
}
