import jwt, { SignOptions } from "jsonwebtoken";
import config from "../config";

const accessTokenPrivateKey = config.jwt.accessTokenPrivateKey || "";
const accessTokenPublicKey = config.jwt.accessTokenPublicKey || "";
const accessTokenExpiresIn = config.jwt.accessTokenExpiresIn || 15;

export const signJwt = (payload: Object) => {
  const options = {
    expiresIn: "30m",
  } as SignOptions;
  // payload has to be an object
  return jwt.sign({ payload: payload }, accessTokenPrivateKey, options);
};

export const verifyJwt = <T>(token: string): T | null => {
  try {
    return jwt.verify(token, accessTokenPrivateKey) as T;
  } catch (error) {
    return null;
  }
};
