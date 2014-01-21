define(["ko", "model/person"], function(ko, Person) {

    return ko.observableArray([
        new Person("Annabelle", ["Arnie", "Anders", "Apple"]),
        new Person("Bertie", ["Boutros-Boutros", "Brianna", "Barbie", "Bee-bop"]),
        new Person("Charles", ["Cayenne", "Cleopatra"])
    ]);
});
