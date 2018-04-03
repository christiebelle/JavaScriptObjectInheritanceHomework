var Park = function(){
  this.enclosures = [];
};

Park.prototype.addDino = function (Dinosaur) {
  this.enclosures.push(Dinosaur);
};

module.exports = Park;
// Use TDD to write and make pass the following tests:
//
// Park:
//
// enclosure should start empty
// should be able to add dinosaur
// should be able to remove all dinosaurs of a particular type
// should get all the dinosaurs with an offspring count of more than 2
