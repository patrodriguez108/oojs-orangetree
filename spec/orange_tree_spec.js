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
    deadTree = new OrangeTree(100, 25)
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
      expect(matureTree.isMature()).toBe(true)
    });

    it("is not mature if it has not reached fruit-bearing age", function() {
      expect(immatureTree.isMature()).toBe(false)
    });
  });

  describe("reporting whether it's dead", function() {
    
    it("is dead if it's reached the maximum age for an orange tree", function() {
      expect(deadTree.isDead()).toBe(true)
    });

    it("is not dead if it's not reached the maximum age for an orange tree", function() {
      expect(matureTree.isDead()).toBe(false)
    });
  });

  describe("reporting whether it has oranges", function() {
    
    it("has oranges if it's collection of oranges is not empty", function() {
      expect(matureTree.hasOranges()).toBe(true)
    });

    it("has no oranges if it's collection of oranges is empty", function() {
      expect(immatureTree.hasOranges()).toBe(false)
    });
  });

  describe("passing a growing season", function() {
    describe("when it's alive", function() {
      it("gets older", function() {
        matureTree.passGrowingSeason();
        expect(matureTree.age).toEqual(8);
      });

      describe("when the tree is shorter than the maximum height for an orange tree", function() {
        it("grows taller", function() {
          matureTree.passGrowingSeason();
          expect(matureTree.height).toEqual(14.5)
        });
      });

      describe("when the tree has reached the maximum height for an orange tree", function() {
        it("does not grow", function() {
          deadTree.passGrowingSeason();
          expect(deadTree.height).toEqual(25)
        });
      });

      describe("when it's mature", function() {
        it("produces oranges", function() {
          matureTree.passGrowingSeason();
          expect(matureTree.oranges.length).toBeGreaterThan(3)
        });
      });

      describe("when it's not mature", function() {
        it("does not produce fruit", function() {
          immatureTree.passGrowingSeason();
          expect(immatureTree.oranges.length).toEqual(0)
        });
      });
    });

    describe("when it's dead", function() {
      
      it("does not get older", function() {
        deadTree.oneYearOlder();
        expect(deadTree.age).toEqual(100)
      });

      it("does not grow", function() {
        deadTree.growTaller();
        expect(deadTree.height).toEqual(25)
      });

      it("does not produce fruit", function() {
        deadTree.growOranges();
        expect(deadTree.oranges.length).toEqual(0)
      });

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
