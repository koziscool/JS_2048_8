



model2048 = {

  side: 4,
  numSquares: 16,

  rowIndexes: {
    "left": [ [0,1,2,3], [4,5,6,7], [8,9,10,11], [12,13,14,15] ],
    "right": [ [3,2,1,0], [7,6,5,4], [11,10,9,8], [15,14,13,12] ],
    "up": [ [0,4,8,12], [1,5,9,13], [2,6,10,14], [3,7,11,15] ],
    "down":[ [12,8,4,0], [13,9,5,1], [14,10,6,2], [15,11,7,3] ],
  },

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
    this.values[zeroes[rand]] = (Math.random() < 0.9 ? 2 : 4);
  },

  move: function( direction ) {
    this.updateGrid( direction );
    this.addRandomTile();
  },

  updateGrid: function( direction ) {
    var indexes = this.rowIndexes[direction];
    var that = this;
    for( var i = 0; i < indexes.length ; i++ ) {
      var arr = indexes[i];
      var currentRow = arr.map( function(n){
        return that.values[n];
      } );
      var newRow = this.collapseRow(currentRow);
      for( var ai = 0; ai < arr.length ; ai++ ) {
        this.values[ arr[ai] ] = ( newRow[ai] ? newRow[ai] : 0 );
      }
    }
  },

  collapseRow: function( arr ) {
    var notZero = function(n) { return n !== 0; };
    var workingArr = arr.filter( notZero );
    for( var i = 0; i < workingArr.length ; i++ ) {
      if( workingArr[i] === workingArr[i+1] ){
        workingArr[i] *= 2;
        workingArr[i+1] = 0;
      }
    }
    workingArr = workingArr.filter( notZero );
    return workingArr;
  },
}
