var OrangeTree = function(age, height, oranges = []) {
	this.age = age;
	this.height = height;
	this.oranges = oranges
};

OrangeTree.prototype.oneYearOlder = function() {
	if (!this.isDead()) {
		return this.age += 1;
	} else {
		this.stayDead();
	};
};

OrangeTree.prototype.isMature = function() {
	return this.age >= 7;
};

OrangeTree.prototype.growOranges = function() {
	for (var i = 1; i < Math.floor(Math.random() * (80 - 50) + 50); i++) {
		if (this.isMature() && !this.isDead()) {
			this.oranges.push(new Orange)
		};
	};
};

OrangeTree.prototype.hasOranges = function() {
	if (this.oranges.length > 0) {
		return true
	} else {
		return false
	};
};

OrangeTree.prototype.growTaller = function() {
	if (!this.maxHeight()) {
		return this.height += 2.5;
	};
	this.stayMaxHeight();
};

OrangeTree.prototype.maxHeight = function() {
	return this.height === 25;
};

OrangeTree.prototype.stayMaxHeight = function() {
	if (this.height >= 25) {
		return this.height = 25;
	};
};

OrangeTree.prototype.isDead = function() {
	return this.age >= 100;
};

OrangeTree.prototype.stayDead = function() {
	if (this.age >= 100) {
		return this.age = 100;
	};
};

OrangeTree.prototype.passGrowingSeason = function() {
	this.oranges = [];
	this.oneYearOlder();
	this.growTaller();
	this.growOranges();
}