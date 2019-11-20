import {Player} from "../player";
import {LevelManager} from "../levels/levelManager";

export class MainGameplayScene extends Phaser.Scene {
    private _player1: Player;
    private _playerPhysicsGroup: Phaser.Physics.Arcade.Group;

    constructor() {
        super({
            key: "MainGameplayScene"
        });
    }

    preload(): void {
        this.load.image("greenbox", "./src/boilerplate/assets/image/greenbox.png");
    }

    create(): void {
        //setup players
        let p1Sprite = this.physics.add.sprite(512, 592, 'greenbox');
        let p1LeftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        let p1RightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        let p1DeleteKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        let p1ReadyKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
        this._player1 = new Player(p1Sprite, p1LeftKey, p1RightKey, p1ReadyKey, p1DeleteKey, "player1");
        this._player1.sprite.setDisplaySize(64, 64);
        // this._player1.sprite.body.checkCollision.up = false;
        // this._player1.sprite.body.checkCollision.down = false;

        // this._playerPhysicsGroup.add(this._player1.sprite);
        // this.physics.add.collider(this._player1.sprite, this._player2.sprite);
    }

    update(): void {
        this._player1.update();
    }

    private restart(): void {
        // add conditions for the scene to restart
    }
}
