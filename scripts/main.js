;
//var app = app || {};
$(function () {

    /*app.MyObject = Backbone.Model.extend({
     defaults: {
     name: 'name',
     description: '-',
     size: 100
     },
     initialize: function () {
     console.log('obj created');
     this.on("change", function () {
     console.log('obj changed');
     var json = app.myObject.changedAttributes();
     console.log(json);
     });
     },
     validate: function (attrs) {
     if (attrs.size > 570) {
     console.log("incorrect");
     return "incorrect";
     }
     },
     increaseSize: function () {
     app.myObject.set({
     size: this.get('size') + 100
     }, {
     validate: true
     });
     }
     });

     app.myObject = new app.MyObject({
     name: 'rocket',
     description: 'super'
     });


     app.myObject.set({
     size: 250,
     type: 'active'
     });


     $('#btn').on("click", function () {
     app.myObject.increaseSize();
     });*/


    //part 2

    var model1 = new RocketModel();
    var view = new RocketView({
        model: model1,
        el: "#rocket"
    });


});