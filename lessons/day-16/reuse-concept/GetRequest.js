const Request = require("./Request");

// Child class/ Sub class/ Derived class
class GetRequest extends Request{
    
    // Overriding the parent class method
    setMethod(){
        super.setMethod("GET");
    }

    myNewMethod(){
        console.log("This is my new method");
    }
}

let getRequest = new GetRequest();
getRequest.setMethod();
getRequest.sendRequest();
getRequest.verifyResponse();
getRequest.myNewMethod();