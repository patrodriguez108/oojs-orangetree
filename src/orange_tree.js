var OrangeTree = function(age, height, oranges = []) {
	this.age = age;
	this.height = height;
	this.oranges = oranges
};

OrangeTree.prototype.oneYearOlder = function() {
	return this.age += 1;
};

OrangeTree.prototype.isMature = function() {
	return this.age >= 7;
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
		return this.height += 2.5
	}
};

OrangeTree.prototype.maxHeight = function() {
	return this.height === 25
};

OrangeTree.prototype.isDead = function() {
	this.stayDead();
	return this.age >= 100;
};

OrangeTree.prototype.stayDead = function() {
	if (this.age > 100) {
		return this.age = 100;
	};
};

OrangeTree.prototype.passGrowingSeason = function() {
	this.oneYearOlder();
	this.growTaller();
}