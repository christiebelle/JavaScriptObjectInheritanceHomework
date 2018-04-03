var Park = function(){
  this.enclosures = [];
};

Park.prototype.addDino = function (Dinosaur){
  this.enclosures.push(Dinosaur);
};

// Park.prototype.removeDino = function(type){
//   var dinotype = type;
//   for(i= 0)
//   for(dino of this.enclosures){
//     if(dino.type === dinotype){
//     var dinoIndex = this.enclosures.indexOf(dino);
//     this.enclosures.splice(dinoIndex, 1);
//     };
//   };
// };

module.exports = Park;
// Use TDD to write and make pass the following tests:
//
// Park:
//
// enclosure should start empty
// should be able to add dinosaur
// should be able to remove all dinosaurs of a particular type
// should get all the dinosaurs with an offspring count of more than 2
