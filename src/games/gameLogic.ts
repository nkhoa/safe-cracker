import {GameEventData, Observer} from './observerGameEvent';


export default class GameLogic implements Observer {

    public oncallbackEvent(message: GameEventData): void {
        console.log(message);
    }

    public GenerateRandomNumber() : String[]
    {
    let Arr = [];
    let reward: string;
    let a = Math.floor(Math.random() * (15 - 20 + 1)) + 20;
    let b = Math.floor(Math.random() * (15 - 20 + 1)) + 20;
    let c = Math.floor(Math.random() * (15 - 20 + 1)) + 20;
     
        while ((a == b || b == c || a == c))
        {
              a = Math.floor(Math.random() * (15 - 20 + 1)) + 20;
              b = Math.floor(Math.random() * (15 - 20 + 1)) + 20;
              c = Math.floor(Math.random() * (15 - 20 + 1)) + 20;
        }
        for (let i = 0; i <= 8; i++)
        {
            if (i % 3 == 0)
            {
              reward = "x"+a;
              Arr.push(reward);
            }
            if (i % 3 == 1)
            {
                reward = "x"+b;
                Arr.push(reward);
            }
            if (i % 3 == 2)
            {
             reward = "x"+c;
                Arr.push(reward);
            }
        }
        return Arr;
    }
}