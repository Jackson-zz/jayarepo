Course = function(name) {
    this.name = name || "name not set";
}

Course.prototype.toString = function() { return 'Course ' + this.name; }

db.courses.setConstructor(Course);

