describe('findAndReplace', function() {
  it("will search through a string to find a word", function() {
    var string = "Let's go to the mall!";
    var testWord = "base"
    expect(findAndReplace(string, testWord)).to.equal("Oops! You entered something wrong...");
  });

  it("will search through a string, find a word, and replace it", function() {
    var string = "The bassline is jumping.";
    expect(findAndReplace(string, "jumping", "pumping")).to.equal("The bassline is pumping.");
  });
});
