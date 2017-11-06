
$(document).ready(function() {

//Declare global variables
//=======================================================================
var charHealthP = 0;
var charAttackP = 0;
var charCounterAttack = 0;
var power = 0;
var random = 0;
var hasBeenClicked = false;

var characterArray = ["Obi-Wan Kanobi", "Luke Skywalker", "Darth Sidious", "Darth Maul"];







//=========================================================================

//FUNCTIONS
//=========================================================================
	function healthPower() {
		for (var i=0; i<120; i++) {
			var random = Math.floor((Math.random() * 101) + 100);
		}
		charHealthP = random;	
	}

	function attackPower() {
		for (var i=0; i<120; i++) {
			var random = Math.floor((Math.random() * 20) + 5);
		}
		charAttackP = random;
	}

	function counterAttackPower(){
		for (var i=0; i<120; i++) {
			var random = Math.floor((Math.random() * 20) + 1);
		}
		charCounterAttack = random;		
	}

	function powerObi () {
		healthPower();
		$("#powerObi").text(charHealthP);
		attackPower();
		counterAttackPower();
	}

	function powerLuke () {
		healthPower();
		$("#powerLuke").text(charHealthP);
		attackPower();
		counterAttackPower();
	}

	function powerSid () {
		healthPower();
		$("#powerSid").text(charHealthP);
		attackPower();
		counterAttackPower();
	}

	function powerMaul () {
		healthPower();
		$("#powerMaul").text(charHealthP);
		attackPower();
		counterAttackPower();
	}

	
		


//===========================================================================

//Games Process
//============================================================================
	powerObi();
	powerLuke();
	powerSid();
	powerMaul();

	
			





});