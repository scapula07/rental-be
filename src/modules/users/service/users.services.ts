import Users from "../models/users.model";
import logger from "../../../utils/logger";

interface IUser {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  phone: string;
  dateOfBirth?: Date;
  address: {
    houseNumber: string;
    street: string;
    city: string;
    state: string;
    country: string;
    postalCode: Number;
  };
  role: string;
}

interface IUpdateUser {
  profileImage?: {
    publicId: string;
    url: string;
  };
  phone?: string;
  address?: {
    houseNumber: string;
    street: string;
    city: string;
    state: string;
    country: string;
    postalCode: Number;
  };
  driverLicense?: {
    publicId: string;
    url: string;
    details: {
      licenseNumber: string;
      expiryDate: Date;
      issuedDate: Date;
      licenseClass: string;
    };
    uploaded: boolean;
    approved: boolean;
  };
  insurance?: {
    publicId: string;
    url: string;
    uploaded: boolean;
    approved: boolean;
  };
  roles?: string[];
}

export default class UsersService {
  users = Users;

  createUser = async (userData: IUser) => {
    try {
      const newUser = await this.users.create({
        ...userData,
      });
      return newUser;
    } catch (error) {
      logger.error(error);
      console.log(error);
    }
  };

  getUserById = async (id: string) => {
    try {
      const user = await this.users.findById(id);

      return user;
    } catch (error) {
      logger.error(error);
    }
  };

  getUserByEmail = async (email: string) => {
    try {
      const user = await this.users.findOne({ email: email });

      return user;
    } catch (error) {
      logger.error(error);
    }
  };

  updateUser = async (id: string, userData: IUpdateUser) => {
    try {
      const updatedUser = await this.users.findByIdAndUpdate(
        id,
        {
          ...userData,
        },
        { new: true, password: 0 } //Don't return password
      );
      return updatedUser;
    } catch (error) {}
  };

  updatePassword = async (id: string, password: string) => {
    try {
      const updatedUser = await this.users.findByIdAndUpdate(
        id,
        {
          password: password,
        },
        { new: true, password: 0 } //Don't return password
      );
      return updatedUser;
    } catch (error) {}
  };

  getAllUsers = async () => {
    try {
      const users = await this.users.find({}, { password: 0 });

      return users;
    } catch (error) {}
  };

  getUserByRole = async (role: string) => {
    try {
      const users = await this.users.find({ role: role }, { password: 0 });

      return users;
    } catch (error) {}
  };

  deleteUser = async (id: string) => {
    try {
      const deletedUser = await this.users.findByIdAndDelete(id);
      return deletedUser;
    } catch (error) {}
  };
}
