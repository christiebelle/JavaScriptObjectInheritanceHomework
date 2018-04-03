var assert = require('assert');
var Park = require('../park.js');
var Dinosaur = require('../dinosaur.js')

describe ('Park', function(){

  var park, dino1, dino2, dino3, dino4;

  beforeEach(function(){
    park = new Park();
    dino1 = new Dinosaur("Blue", "Velociraptor", 3);
    dino2 = new Dinosaur("Delta", "Velociraptor", 2);
    dino3 = new Dinosaur("Diggle", "T-Rex", 4);
    dino4 = new Dinosaur("Cisco", "Triceratops", 3);
  });

  it('enclosure should start empty', function(){
    assert.strictEqual(park.enclosures.length, 0);
    assert.deepStrictEqual(park.enclosures, []);
  });

  it('enclosure should be able to add dinosaurs', function(){
    park.addDino(dino1);
    park.addDino(dino4);
    assert.strictEqual(park.enclosures.length, 2);
    assert.deepStrictEqual(park.enclosures, [dino1, dino4]);
  });

  // it('enclosure should be able to remove dinos of certain type', function(){
  //   park.addDino(dino1);
  //   park.addDino(dino2);
  //   park.addDino(dino4);
  //   park.removeDino("Velociraptor");
  //   assert.strictEqual(park.enclosures.length, 1);
  //   assert.deepStrictEqual(park.enclosures, [dino4]);
  // });

  it('should be able to return all dinos with offspring count of more than 2', function(){
    park.addDino(dino1);
    park.addDino(dino2);
    park.addDino(dino3);
    park.addDino(dino4);
    assert.strictEqual(park.filteredDinos.length, 3);
    assert.deepStrictEqual(park.filterDinos, [dino1, ,dino3, dino4]);
  });

});


// Park:
//
// enclosure should start empty
// should be able to add dinosaur
// should be able to remove all dinosaurs of a particular type
// should get all the dinosaurs with an offspring count of more than 2
