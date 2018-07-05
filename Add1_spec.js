var app3 = require('./Add1.js');

describe ("Addition", function(){
    it("The function should add two numbers", function (){
        var value = app3.AddNum(5,6);
        expect(value).toBe(11);
    });
});