var assert = require('assert');
var Dinosaur = require('../dinosaur.js')

describe ('Park', function(){

  var dino1, dino2, dino3, dino4;

  beforeEach(function(){
    dino1 = new Dinosaur("Blue", "Velociraptor", 3);
    dino2 = new Dinosaur("Delta", "Velociraptor", 2);
    dino3 = new Dinosaur("Diggle", "T-Rex", 4);
    dino4 = new Dinosaur("Cisco", "Triceratops", 3);
  });

  it ('should have a name', function(){
    assert.strictEqual(dino1.name, "Blue");
  });

  it ('should have a type', function(){
    assert.strictEqual(dino2.type, "Velociraptor");
  });

  it ('should have a reproductive rate', function(){
    assert.strictEqual(dino3.offspring, 4);
  });


});
