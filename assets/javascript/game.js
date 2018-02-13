
$(document).ready(function() {

//Declare global variables
//=======================================================================

var selectCharacter = 0;
var selectCharPower = 0;
var selectCharAttack = 0;
var selectCharCounterA = 0;
var enemyPower = 0;
var enemyAttack = 0;
var enemyCounterA = 0;
var numbAttack = 1;
var increaseCharAttack = 0;


var character = function(name, power, attack, counterAttack, img, me) {
	this.name = name,
	this.power = power,
	this.attack = attack,
	this.counterAttack = counterAttack,
	this.img = img,
	this.me = me
};

//Assign credentials to character Obi-Wan
var obi = new character("Obi-Wan Kenobi", 120, 10, 8, "obi-wan-kenobi.jpg", 0);
$("#nameObi").append(obi.name);
$("#obi").data("power", obi.power);
$("#obi").data("attack", obi.attack);
$("#obi").data("counterAttack", obi.counterAttack);
$("#obiPower").append(obi.power)
//console.log(obi);
//Assign credentials to character Luke
var luke = new character("Luke Skywalker", 110, 12, 9,"luke-skywalker.jpg", 0);
$("#nameLuke").append(luke.name);
$("#luke").data("power", luke.power);
$("#luke").data("attack", luke.attack);
$("#luke").data("counterAttack", luke.counterAttack);
$("#lukePower").append(luke.power);
//console.log(luke);
//Assign credentials to character Sidious
var sidious = new character("Darth Sidious", 150, 20, 10, "darth-sidious.jpg", 0);
$("#nameSidious").append(sidious.name);
$("#sidious").data("power", sidious.power);
$("#sidious").data("attack" , sidious.attack);
$("#sidious").data("counterAttack", sidious.counterAttack);
$("#sidPower").append(sidious.power);
//console.log(sidious);
//Assign credentials to character Maul
var maul = new character("Darth Maul", 180, 15, 20, "darth-maul.jpg", 0);
$("#nameMaul").append(maul.name);
$("#maul").data("power", maul.power);
$("#maul").data("attack", maul.attack);
$("#maul").data("counterAttack", maul.counterAttack);
$("#maulPower").append(maul.power);
//console.log(maul);

//Select your character and move the others to the enemies section
$(".character").click(function() {
	if(selectCharacter == 0) {
		$(this).addClass("selectCharacter");
		$(this).removeClass("character");
		$("#chooseOne").remove();
		$("#chosenChar").append(this);
		$("#opponentOptions").append($(".character"));
		$(".character").addClass("changeColor");
		selectCharPower = $(this).data("power");
		selectCharAttack = $(this).data("attack");
		selectCharCounterA = $(this).data("counterAttack")
		selectCharacter = 1;
		// console.log(selectCharPower);
		// console.log(selectCharAttack);
		// console.log(selectCharCounterA);
	}
});

//Choose an opponent and move to the defender section
//Opponent only has counterAttack power and not attack power
$(".character").click(function(){
	if(!$(this).hasClass("selectCharacter")) {
		$(this).addClass("enemyCharacter");
		$(".enemyCharacter").addClass("changeOppColor");
		enemyPower = $(this).data("power");
		enemyCounterA = $(this).data("counterAttack");
		$(this).removeClass("character");
		$("#defender").append(this);	
		}
});

// //To fight
		
$("#attack").click(function(){
	increaseCharAttack = numbAttack * selectCharAttack;
	if(selectCharPower>0 && enemyPower>0) {		
		selectCharPower = selectCharPower - enemyCounterA;				
		enemyPower = enemyPower - increaseCharAttack;
		$(".selectCharacter").children(selectCharPower).html(selectCharPower);
		$(".enemyCharacter").children(enemyPower).html(enemyPower);
		console.log("My power is " + selectCharPower);
		console.log("Defender power is " + enemyPower);
	}
		numbAttack = numbAttack + 1;

	if (selectCharPower <= 0) {
		alert("You Loss!  Game is over.");
		$(".selectCharacter").fadeOut("slow");
	} 
		else if (enemyPower <= 0) {
		alert("You Defeated Your Enemy! Choose The Next Opponent");
		$(".enemyCharacter").fadeOut("slow");		
	}	



});




});