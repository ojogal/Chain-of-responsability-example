class Request {
  constructor(requestType, requestData) {
    this.requestType = requestType;
    this.requestData = requestData;
  }
}

class RequestHandler {
  setNext(next) {
    this.next = next;
  }

  handle(request) {
    if (this.canHandle(request)) {
      this.processRequest(request);
    } else if (this.next) {
      this.next.handle(request);
    } else {
      console.log(`No handler found for request of type: ${request.requestType}`);
    }
  }

  canHandle(request) {
    return false;
  }

  processRequest(request) {
    // handle the request
  }
}

class ConcreteHandler1 extends RequestHandler {
  canHandle(request) {
    return request.requestType === 'type1';
  }

  processRequest(request) {
    console.log(`ConcreteHandler1 can handle request of type ${request.requestType}`);
  }
}

class ConcreteHandler2 extends RequestHandler {
  canHandle(request) {
    return request.requestType === 'type2';
  }

  processRequest(request) {
    console.log(`ConcreteHandler2 can handle request of type ${request.requestType}`);
  }
}

const h1 = new ConcreteHandler1();
const h2 = new ConcreteHandler2();

h1.setNext(h2);

const request = new Request('type1', 'request data');
h1.handle(request);