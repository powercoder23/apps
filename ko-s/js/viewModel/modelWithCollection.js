define(['ko'], function(ko) {

    // The view model is an abstract description of the state of the UI, but without any knowledge of the UI technology (HTML)
    var viewModel = function(list) {
        this.person = ko.observableArray(list);
        this.showRenderTimes = ko.observable(false);
    };

    return viewModel
});
