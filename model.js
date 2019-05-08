



model2048 = {

  side: 4,
  numSquares: 16,

  values: [],

  init: function(  ) {
    for( var i = 0; i < this.numSquares ; i++ ) {
      this.values[i] = 0;
    }
    this.addRandomTile();
    this.addRandomTile();

  },

  addRandomTile: function(  ) {
    var zeroes = [];
    for( var i = 0; i < this.numSquares ; i++ ) {
      if( this.values[i] === 0  ) zeroes.push(i);
    }
    var rand = Math.floor(Math.random() * zeroes.length);
    this.values[rand] = (Math.random() < 0.9 ? 2 : 4);
  },
}
