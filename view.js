

view2048 = {
  
  model: model2048,

  init: function(  ) {
    this.$grid = $("#grid-2048");
    for( var i = 0; i < this.model.numSquares ; i++ ) {
      var $square = $("<div><div class='value'>" + this.model.values[i] + "</div></div>");
      $square.addClass("square");
      this.$grid.append( $square );
    }
  },
};



