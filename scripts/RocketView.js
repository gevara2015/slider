var RocketView = Backbone.View.extend({

    events: {
        "click .changeSize": "changeSize",
        "click .deleteRow" : "deleteRow",
        "blur .desc"       : "editValue",
        "blur .name"       : "editValue",
        "blur .size"       : "editValue"
    },

    initialize: function () {
        this.listenTo(this.model, "change", this.render);
    },

    render: function () {
    }
});