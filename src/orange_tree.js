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

OrangeTree.prototype.oneFootTaller = function() {
	return this.height += 1;
}

OrangeTree.prototype.maximumHeight = function() {
	this.stayMaxHeight();
	return this.height <= 100
};

OrangeTree.prototype.stayMaxHeight = function() {
	if (this.height > 100) {
		return this.height = 100;
	};
}

OrangeTree.prototype.isDead = function() {
	this.stayDead();
	return this.age >= 200;
};

OrangeTree.prototype.stayDead = function() {
	if (this.age > 200) {
		return this.age = 200;
	};
};

OrangeTree.prototype.passGrowingSeason = function() {
	this.oneYearOlder();
	this.oneFootTaller();
}