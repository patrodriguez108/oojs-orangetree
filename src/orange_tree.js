var OrangeTree = function(age, height, oranges = []) {
	this.age = age;
	this.height = height;
	this.oranges = oranges
};

OrangeTree.prototype.isMature = function() {
	return this.age >= 7;
};

OrangeTree.prototype.isDead = function() {
	this.stayDead();
	return this.age >= 200;
};

OrangeTree.prototype.stayDead = function() {
	if (this.age > 200) {
		return this.age = 200;
	};
};

OrangeTree.prototype.hasOranges = function() {
	if (this.oranges.length > 0) {
		return true
	} else {
		return false
	};
}