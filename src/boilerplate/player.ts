export class Player {
    private _sprite: Phaser.Physics.Arcade.Sprite;
    private _leftKey: Phaser.Input.Keyboard.Key;
    private _rightKey: Phaser.Input.Keyboard.Key;
    private _readyKey: Phaser.Input.Keyboard.Key;
    private _lastKeyCode: number;
    private _ready: boolean = false;
    private _canAddAction: boolean = false;
    private _selectedActions = [];
    private _deleteKey: Phaser.Input.Keyboard.Key;

    constructor(sprite: Phaser.Physics.Arcade.Sprite,
                leftKey: Phaser.Input.Keyboard.Key,
                rightKey: Phaser.Input.Keyboard.Key,
                readyKey: Phaser.Input.Keyboard.Key,
                deleteKey: Phaser.Input.Keyboard.Key,
                name: string) {
        this._sprite = sprite;
        this._leftKey = leftKey;
        this._rightKey = rightKey;
        this._readyKey = readyKey;
        this._deleteKey = deleteKey;
        this._sprite.setCollideWorldBounds(true);
        this._sprite.setName(name)
    }

    get sprite(): Phaser.Physics.Arcade.Sprite {
        return this._sprite;
    }

    moveLeft(): void {
        this._sprite.setX(this._sprite.x - 30)
    }

    moveRight(): void {
        this._sprite.setX(this._sprite.x + 30);
    }

    wait(): void {
        // do nothing
    }

    jumpLeft(): void {

    }

    jumpRight(): void {

    }

    addAction(action: string): void {

    }

    performSelectedActions(selectedActions) {
        for (let index = 0; index < selectedActions.length; index++) {
            selectedActions[index](); 
        }
    }

    update() {
        console.log(`Selected Actions: ${this._selectedActions}`);
        // TODO replace JustDown and JustUp
        if (this._selectedActions.length < 3) {
            if (Phaser.Input.Keyboard.JustDown(this._leftKey)) {
                this._selectedActions.push(this.moveLeft);
            } else if (Phaser.Input.Keyboard.JustDown(this._rightKey)){
                this._selectedActions.push(this.moveRight);
            }
        }

        if (Phaser.Input.Keyboard.JustDown(this._deleteKey)) {
            if(this._selectedActions.length > 0) {
                this._selectedActions.pop();
            } else {
                console.log('Selected Actions is empty');
            }
        }

        if (Phaser.Input.Keyboard.JustDown(this._readyKey)) {
            if (this._selectedActions.length === 3) {
                this.performSelectedActions(this._selectedActions);
            } else {
                console.log('You need to select 3 actions');
            }
        }

        // check if a button is pushed
        // if it is, push corresponding action to selectedAction array
        // if the array is full, skip pushing 
    }
}
