var PersonModel = function(){
    var self = this;
    self.firstName = ko.observable("");
    self.lastName = ko.observable("");
    self.gender = ko.observable("");
    self.id = ko.observable("");
};


(function () {
    var self = {};
   
    self.name = ko.observable("").extend({ minLength: 3});

    self.nameDasherized = ko.computed(function () { 
        const splitted = self.name().split("");
        const dasherized = splitted.join("-");
        return dasherized;
    });

    self.genders = ["Male", "Female"];

    self.newPerson = ko.observable(new PersonModel());
    self.persons = ko.observableArray([]);
    self.addPerson = function () {
        self.persons.push(self.newPerson());
        self.newPerson(new PersonModel());
    };

    self.removePerson = function (item) {
        self.persons.remove(item);
    };

    ko.applyBindings(self);
    return self;
  })();