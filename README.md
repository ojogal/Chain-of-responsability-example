Here is an example of a simple JavaScript implementation of the Chain of Responsibility pattern.

In this example, we have a Request class that represents the request to be handled, and a RequestHandler class that serves as a base class for concrete handlers. ConcreteHandler1 and ConcreteHandler2 are classes that inherit from RequestHandler and can handle requests of specific types.

The handle method of RequestHandler checks if the current object can handle the request, and if it can, it processes the request. If it cannot handle the request, it passes it on to the next object in the chain (if one exists). 

In this example, an instance of ConcreteHandler1 is created, and an instance of ConcreteHandler2 is created. Then the next property of h1 is set to h2, so that when h1 is not able to handle the request, the request is passed to h2. 
Finally, a request of type 'type1' is created and passed to h1, which can handle it and process it. 

Note that this is a simplified example, and in a real-world scenario, you may need to add more complexity to the classes and methods in order to handle different types of requests, handle errors, and so on.