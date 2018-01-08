var OrangeTree = function(age, height, oranges = []) {
	this.age = age;
	this.height = height;
	this.oranges = oranges
};

OrangeTree.prototype.isMature = function() {
	return this.age >= 7;
};