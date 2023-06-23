import HttpException from "./HttpException";

class InvalidInputException extends HttpException {
  constructor(message: string) {
    super(400, message || "Invalid input");
  }
}

export default InvalidInputException;
