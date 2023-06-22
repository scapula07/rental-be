import HttpException from "./HttpException";

class InvalidInputException extends HttpException {
  constructor() {
    super(403, `Invalid Input`);
  }
}

export default InvalidInputException;
