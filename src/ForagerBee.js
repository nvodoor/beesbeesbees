var ForagerBee = function() {
	this.age = 10;
	this.job = 'find pollen';
	this.color = 'yellow';
	this.food = 'jelly';
	this.canFly = true;
	this.treasureChest = [];
};

ForagerBee.prototype = Object.create(Grub.prototype);
ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.forage = function () {
	_.each(arguments, function (arg) {
		this.treasureChest.push(arg);
	}.bind(this));
};

