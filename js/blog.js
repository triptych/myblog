$(function() {
 
    Parse.$ = jQuery;
 
    // Replace this line with the one on your Quickstart Guide Page
Parse.initialize("Va5kCfu9on0c2KYIEer1ehI6Prwx8y53tdVJyC8f", "VKJuqBPUsNgWHWZs0ecBv72ZNhDOLM4a8z7N1Od1");

    var TestObject = Parse.Object.extend("TestObject");
    var testObject = new TestObject();
    testObject.save({foo: "bar"}).then(function(object) {
      alert("yay! it worked");
    });
 
});
