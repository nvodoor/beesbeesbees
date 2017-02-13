var HoneyMakerBee = function() {
	this.age = 10;
	this.job = 'make honey';
	this.color = 'yellow';
	this.food = 'jelly';
	this.honeyPot = 0;
};

HoneyMakerBee.prototype = Object.create(Grub.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

HoneyMakerBee.prototype.makeHoney = function () {
	this.honeyPot++;
};

HoneyMakerBee.prototype.giveHoney = function () {
	this.honeyPot--;
}