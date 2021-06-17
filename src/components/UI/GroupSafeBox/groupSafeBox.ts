
import * as Assets from '../../../assets';
import SafeBox from './SafeBox/safeBox';
import * as Consts from '../../../utils/constants';
import { Image } from 'phaser-ce';
import {ObserverGameEvent} from '../../../games/observerGameEvent';

/*
 * MainGame: scene of main game
 * Author : Thomas Tran
 * email: thomas.tran@mfortune.co.uk
 * git: https://github.com/OnePassio/mini_html5_game.git
 */
export default class GroupSafeBox extends Phaser.Sprite {
 constructor(game: Phaser.Game, x: number, y: number, Arr) {
        super(game, x ,y);
        let groupBoxPosition = Consts.POSITION_SAFE_BOX;
        let groupBoxDistancePosition = Consts.DISTANCE_EACH_SAFE_BOX;
        const groupBox = this.game.add.group();
        let box;
        let currentX = groupBoxPosition.x;
        let currentY = groupBoxPosition.y;
        for (let i = 0; i <= 8; i++) {
            if (i === 0) {
                box = new SafeBox(this.game, currentX, currentY, i+1, Arr[i]);
            } else {
                if (i % 3 !== 0) {
                    box = new SafeBox(this.game, currentX + groupBoxDistancePosition.x, currentY, i+1, Arr[i]);
                    currentX += groupBoxDistancePosition.x;
                }
                if (i % 3 === 0) {
                    currentX = groupBoxPosition.x;
                    box = new SafeBox(this.game, currentX, currentY + groupBoxDistancePosition.y, i+1, Arr[i]);
                    currentY += groupBoxDistancePosition.y;
                }
            }
            groupBox.add(box);
        }
    }


  public static create(): void {
  
  }

  public update(): void {

  }

  public handleChange(index): ObserverGameEvent {
  console.log(index);
  return index;
  }
}