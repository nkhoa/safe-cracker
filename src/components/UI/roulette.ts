
import * as Assets from '../../assets';
import * as Consts from '../../utils/constants';
import {GameEventData, GameEventType, Observer, ObserverGameEvent} from '../../games/observerGameEvent';
import Logic from '../../games/gameLogic';
import { Image } from 'phaser-ce';

/*
 * MainGame: scene of main game
 * Author : Thomas Tran
 * email: thomas.tran@mfortune.co.uk
 * git: https://github.com/OnePassio/mini_html5_game.git
 */
export default class Roulette extends Phaser.Sprite {

private wheel: any;
private leftLedAnim: any;
private rightLedAnim: any;
private spinClicked: Observer;
private message: GameEventData;
private gameEvent = ObserverGameEvent.Instance();

constructor(game: Phaser.Game, x: number, y: number) {
        super(game, x, y);
        var style = { font: 'bold 44px Luckiest Guy', fill: '#ffffff'};
        const groupRoulette = this.game.add.group();
        const leftLed = this.game.add.sprite(Consts.POSITION_LEFT_LED.x,Consts.POSITION_LEFT_LED.y, Assets.Images.SpritesheetsLedsSafeDialMinigame11844.getName());
        this.leftLedAnim = leftLed.animations.add('flick');
        const rightLed = this.game.add.sprite(Consts.POSITION_RIGHT_LED.x,Consts.POSITION_RIGHT_LED.y, Assets.Images.SpritesheetsLedsSafeDialMinigame11844.getName());
        this.rightLedAnim = rightLed.animations.add('flick');
        const textSpin = this.game.add.sprite(Consts.POSITION_TEXT_SPIN_RESULT_INFO.x,Consts.POSITION_TEXT_SPIN_RESULT_INFO.y, Assets.Images.ImagesScreenSafeMinigame.getName());
        const supportRoulette = this.game.add.sprite(Consts.POSITION_ROULETTE.x,Consts.POSITION_ROULETTE.y, Assets.Images.ImagesSupportSafeDialMinigame.getName());
        this.wheel = this.game.add.sprite(Consts.POSITION_ROULETTE.x+13,Consts.POSITION_ROULETTE.y+38, Assets.Images.SpritesheetsSafeDialMinigamenotes2752753.getName());
        const spin = this.game.add.button(Consts.POSITION_SPIN_BUTTION.x,Consts.POSITION_SPIN_BUTTION.y, Assets.Images.SpritesheetsSpinSafeDialEffect.getName(), this.actionOnClick, this);

        const textReward = this.game.add.text(Consts.POSITION_TEXT_SAFEBOX_RESULT_INFO.x,Consts.POSITION_TEXT_SAFEBOX_RESULT_INFO.y,'-',style);
        const textReward2 = this.game.add.text(Consts.POSITION_TEXT_SAFEBOX_RESULT_INFO.x + 63,Consts.POSITION_TEXT_SAFEBOX_RESULT_INFO.y,'-',style);
        const textReward3 = this.game.add.text(Consts.POSITION_TEXT_SAFEBOX_RESULT_INFO.x + 126,Consts.POSITION_TEXT_SAFEBOX_RESULT_INFO.y,'-',style);
        const textReward4 = this.game.add.text(Consts.POSITION_TEXT_SAFEBOX_RESULT_INFO.x + 189,Consts.POSITION_TEXT_SAFEBOX_RESULT_INFO.y,'-',style);

        this.leftLedAnim.play(5,true);
        this.rightLedAnim.play(5,true);
        //this.wheel.anchor.setTo(0.5); 


        
        
        groupRoulette.add(leftLed);
        groupRoulette.add(rightLed);
        groupRoulette.add(textSpin);
        groupRoulette.add(supportRoulette);
        groupRoulette.add(this.wheel);
        groupRoulette.add(spin);
        groupRoulette.add(textReward);
        groupRoulette.add(textReward2);
        groupRoulette.add(textReward3);
        groupRoulette.add(textReward4);

        }
  
  public static create(): void {
   
  }


  public update(): void {
      //this.wheel.angle += 1;

  }
  public animationStarted(sprite, animation): void {

    console.log('started');

}
public actionOnClick(): void {
    // const logic = new Logic();
     this.spinClicked = new class implements Observer {
         oncallbackEvent(message: GameEventData): void {
             console.log(message)
         }
     }
     // this.gameEvent.subscribe(logic);
     this.gameEvent.subscribe(this.spinClicked);
     this.gameEvent.notify({gameEvent: GameEventType.SPINNING, index: 1})
}
}