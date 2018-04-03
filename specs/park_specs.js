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
  
});
