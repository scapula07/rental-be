import HttpException from "./HttpException";

class UnAuthorizedException extends HttpException {
  constructor(message?: string) {
    super(401, message || "Unauthorized");
  }
}

export default UnAuthorizedException;
