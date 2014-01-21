define(["sammy", "ko"], function(Sammy, ko) {

    // Client-side routes    
    return Sammy(function() {
        this.get('#/:else', function() {
            alert("this.params.folder = " + this.params.else)
        });

        this.get('#/page/:number', function() {
            this.render("templates/childView2.html").replace('#container').then(function() {
                require(['viewModel/modelWithCollection', 'collections/personCollection'], function(ViewModel, PersonCollection) {
                    ko.applyBindings(new ViewModel(new PersonCollection()), document.getElementById('peopleContainer'));
                })
            });
        });

        this.get('/', function() {
            this.render("templates/childView1.html").replace('#container').then(function() {
                require(['viewModel/appModel'], function(AppViewModel) {
                    ko.applyBindings(new AppViewModel(), document.getElementById('simpleBinding'));
                })
            });
        });

    })
});
