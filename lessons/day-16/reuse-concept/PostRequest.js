const Request = require("./Request");

// Child class/ Sub class/ Derived class
class PostRequest extends Request{
    
    // Overriding the parent class method
    setMethod(){
        super.setMethod("POST");
    }

    myNewMethod(){
        console.log("This is my new method");
    }
}

let postRequest = new PostRequest();
postRequest.setMethod();
postRequest.sendRequest();
postRequest.verifyResponse();