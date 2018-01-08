describe("an orange tree", function() {
  var matureTree;
  var immatureTree;
  var deadTree;

  beforeEach(function() {
    firstOrange = new Orange();
    secondOrange = new Orange();
    thirdOrange = new Orange();
    matureTree = new OrangeTree(7, 12, [firstOrange, secondOrange, thirdOrange]);
    immatureTree = new OrangeTree(5, 8);
    deadTree = new OrangeTree(200, 50)
  });

  it("has an age", function() {
    expect(matureTree.age).toEqual(7)
  });

  it("has a height", function() {
    expect(matureTree.height).toEqual(12)
  });

  it("has a collection of oranges", function() {
    expect(matureTree.oranges).toEqual([firstOrange, secondOrange, thirdOrange])
  });

  describe("reporting whether it's mature", function() {

    it("is mature if it has reached fruit-bearing age", function() {
      expect(matureTree.isMature()).toEqual(true)
    });

    it("is not mature if it has not reached fruit-bearing age", function() {
      expect(immatureTree.isMature()).toEqual(false)
    });
  });

  describe("reporting whether it's dead", function() {
    
    it("is dead if it's reached the maximum age for an orange tree", function() {
      expect(deadTree.isDead()).toEqual(true)
    });

    it("is not dead if it's not reached the maximum age for an orange tree", function() {
      expect(matureTree.isDead()).toEqual(false)
    });
  });

  describe("reporting whether it has oranges", function() {
    it("has oranges if it's collection of oranges is not empty");
    it("has no oranges if it's collection of oranges is empty");
  });

  describe("passing a growing season", function() {
    describe("when it's alive", function() {
      it("gets older");

      describe("when the tree is shorter than the maximum height for an orange tree", function() {
        it("grows taller");
      });

      describe("when the tree has reached the maximum height for an orange tree", function() {
        it("does not grow");
      });

      describe("when it's mature", function() {
        it("produces oranges");
      });

      describe("when it's not mature", function() {
        it("does not produce fruit");
      });
    });

    describe("when it's dead", function() {
      it("does not get older");
      it("does not grow");
      it("does not produce fruit");
    });
  });

  describe("picking an orange", function() {
    describe("when the tree has oranges", function() {
      it("returns one of its oranges");
      it("no longer has the returned orange in its collection of oranges");
    });

    describe("when the tree has no oranges", function() {
      it("returns undefined");
    });
  });
});
