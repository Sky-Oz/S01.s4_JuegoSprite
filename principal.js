var juego= new Phaser.Game(500,400,Phaser.CANVAS,'bloque_juego');
var fondoJuego;
var flappy;
var teclaDerecha;
var teclaIzquierda;
var teclaArriba;
var teclaAbajo;
var texto;
var style;

var estadoPrincipal={
	preload:function () {
	
	juego.load.image('fondo','img/bosque.png');
	juego.load.image('pajaro','img/pajaro1.png');
	juego.load.spritesheet('zeldas','img/personaje.png',64,64);

	},

	create:function(){
		fondoJuego = juego.add.tileSprite(0,0,500,400,'fondo');

		personaje =  juego.add.sprite(100,350,'zeldas');
		personaje.anchor.setTo(0.5);

		personaje.animations.add('derecha',[4,5,6,7],10,true);
		personaje.animations.add('izquierda',[0,1,2,3],10,true);

		juego.physics.arcade.enable(personaje);
		personaje.body.collideWorldBounds= true;

		teclaDerecha=juego.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
		teclaIzquierda=juego.input.keyboard.addKey(Phaser.Keyboard.LEFT);
		juego.physics.startSystem(Phaser.Physics.ARCADE);

		texto = juego.add.text(0,380,"DIEGO ACHO",{font:"20px Arial", fill:"#ffffff", align:"center"});
	},

	update:function(){
		fondoJuego.tilePosition.x-=1;
		if(teclaDerecha.isDown){
			personaje.position.x+=2;
			personaje.animations.play('derecha');
		}else if(teclaIzquierda.isDown){
			personaje.position.x-=2;
			personaje.animations.play('izquierda');
		}
	}

};

juego.state.add('principal',estadoPrincipal);
juego.state.start('principal');

