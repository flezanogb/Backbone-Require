
$(function(){

	 // Generamos el modelo
	 var Persona = Backbone.Model.extend();

	 // Coleccion de modelos Persona
	 var Personas = Backbone.Collection.extend({
		 model: Persona,
		 url: 'data/data-personas.json'
	 });
	
	// Vista   
	var PersonasView = Backbone.View.extend({
	   template: _.template($('#personaTemplate').html()),
	   render: function(eventName) {	
		  _.each(this.model.models, function(Persona){
			 var personaTemplate = this.template(Persona.toJSON());
			 $(this.el).append(personaTemplate);
		  }, this);
		  return this;
	   }
	});
	
	var personas = new Personas;
	var App = new AppView;
			
	var AppView = Backbone.View.extend({
	  el: "body",
	  render: function(){
		var lPersonasView = new PersonasView({model:personas});
		var lHtml = lPersonasView.render().el;		
		$('#container').html(lHtml);

	  },	  
	  initialize: function(){
		var lOptions = {};
		lOptions.success = this.render;
		personas.fetch(lOptions);
	  }
	});			
			
 });  