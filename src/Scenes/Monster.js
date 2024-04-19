class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;

        this.leftArmX = this.bodyX - 105;
        this.leftArmY = this.bodyY + 20;
        this.leftLegX = this.bodyX - 70;
        this.leftLegY = this. bodyY + 165;

        this.rightArmX = this.bodyX + 105;
        this.rightArmY = this.bodyY + 20;
        this.rightLegX = this.bodyX + 70;
        this.rightLegY = this. bodyY + 165;

        this.smileX = this.bodyX;
        this.smileY = this.bodyY + 50;
        this.fangX = this.bodyX;
        this.fangY = this.bodyY + 50;

        this.eyeX = this.bodyX;
        this.eyeY = this.bodyY - 50;
        
        this.noseX = this.bodyX;
        this.noseY = this.bodyY + 2;
        this.snotX = this.bodyX + 10;
        this.snotY = this.bodyY + 40;

        this.rightHornX = this.bodyX + 50;
        this.rightHornY = this.bodyY - 85;
        this.leftHornX = this.bodyX - 50;
        this.leftHornY = this.bodyY - 85;

        this.SKey = null;
        this.FKey = null;
        this.AKey = null;
        this.DKey = null;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_blueF.png");
        my.sprite.rightArm = this.add.sprite(this.rightArmX, this.rightArmY, "monsterParts", "arm_blueE.png");
        my.sprite.leftArm = this.add.sprite(this.leftArmX, this.leftArmY, "monsterParts", "arm_blueE.png");
        my.sprite.rightLeg = this.add.sprite(this.rightLegX, this.rightLegY, "monsterParts", "leg_whiteA.png");
        my.sprite.leftLeg = this.add.sprite(this.leftLegX, this.leftLegY, "monsterParts", "leg_redA.png");

        my.sprite.leftArm.flipX = true;
        my.sprite.leftLeg.flipX = true;

        my.sprite.smile = this.add.sprite(this.smileX, this.smileY, "monsterParts", "mouthH.png")
        my.sprite.fang = this.add.sprite(this.fangX, this.fangY, "monsterParts", "mouthJ.png");
        my.sprite.eye = this.add.sprite(this.eyeX, this.eyeY, "monsterParts", "eye_blue.png");
        my.sprite.nose = this.add.sprite(this.noseX, this.noseY, "monsterParts", "nose_yellow.png");
        my.sprite.snot = this.add.sprite(this.snotX, this.snotY, "monsterParts", "snot_large.png");

        my.sprite.rightHorn = this.add.sprite(this.rightHornX, this.rightHornY, "monsterParts", "detail_dark_horn_large.png");
        my.sprite.leftHorn = this.add.sprite(this.leftHornX, this.leftHornY, "monsterParts", "detail_dark_horn_large.png");
        my.sprite.leftHorn.flipX = true;

        my.sprite.rightArm.visible = true;
        my.sprite.leftArm.visible = true;
        my.sprite.fang.visible = false;

        my.sprite.rightArm.angle = -45;
        my.sprite.leftArm.angle = 45;
        my.sprite.rightLeg.angle = -15;
        my.sprite.leftLeg.angle = 15;

        this.FKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        this.DKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.SKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.AKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
       
        
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        if(this.FKey.isDown) {
            my.sprite.smile.visible = false;
            my.sprite.fang.visible = true;
        }
        if(this.SKey.isDown) {
            my.sprite.fang.visible = false;
            my.sprite.smile.visible = true;
        }

        if(this.AKey.isDown) {
            // my.sprite.body.x += 1;
            // my.sprite.nose.x += 1;
            // my.sprite.leftHorn.x += 1;
            // my.sprite.rightHorn.x += 1;
            // my.sprite.smile.x += 1;
            // my.sprite.leftArm.x += 1;
            // my.sprite.rightArm.x += 1;
            // my.sprite.leftLeg.x += 1;
            // my.sprite.rightLeg.x += 1;
            // my.sprite.eye.x += 1;
            // my.sprite.fang.x += 1;
            for(const property in my.sprite) {
                my.sprite[property].x -= 1;
            }
        }
        if(this.DKey.isDown) {
            // my.sprite.body.x -= 1;
            // my.sprite.nose.x -= 1;
            // my.sprite.leftHorn.x -= 1;
            // my.sprite.rightHorn.x -= 1;
            // my.sprite.smile.x -= 1;
            // my.sprite.leftArm.x -= 1;
            // my.sprite.rightArm.x -= 1;
            // my.sprite.leftLeg.x -= 1;
            // my.sprite.rightLeg.x -= 1;
            // my.sprite.eye.x -= 1;
            // my.sprite.fang.x -= 1;
            for(const property in my.sprite) {
                my.sprite[property].x += 1;
            }
        }
       
    }

}