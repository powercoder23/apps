define(["ko"], function(ko) {

    var Person = function(name, children) {
        this.name = name;
        this.children = ko.observableArray(children);

        this.addChild = function() {
            this.children.push("New child");
        }.bind(this);
    }

    return Person
});
