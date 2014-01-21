define(['ko'], function(ko) {

    return function appViewModel() {
        this.firstName = ko.observable("Bertx");
        this.lastName = ko.observable("Bertington");
        this.fullName = ko.computed(function() {
            return this.firstName() + " " + this.lastName();
        }, this);
    }
});
