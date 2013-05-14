
require.config({
 paths: {
   "jquery": "jquery/jquery.min",
   "underscore": "underscore/underscore-min",
   "backbone": "backbone/backbone-min",
   "personas" : "utils/personas"
 }
});
 
require(["jquery", "underscore", "backbone","personas"], function($, underscore, backbone, personas) {
    //$('#bloque').html('El color elegido es <b>' + util.getColor() + "</b>");
});