import Users from "../../models/users/users.model";

interface IUser {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  phone: string;
  dateOfBirth: Date;
  address: {
    street: string;
    city: string;
    state: string;
    country: string;
    postalCode: Number;
  };
}

export default class UsersService {
  users = Users;

  createUser = async (userData: IUser) => {
    console.log(userData);

    try {
      const newUser = await this.users.create({
        ...userData,
      });
      return newUser;
    } catch (error) {
      console.log(error);
    }
  };

  getUserById = async (id: string) => {
    try {
      const user = await this.users.findById(id);

      return user;
    } catch (error) {
      console.log(error);
    }
  };

  getUserByEmail = async (email: string) => {
    try {
      const user = await this.users.findOne({ email: email });

      return user;
    } catch (error) {
      console.log(error);
    }
  };

  updateUser = async (id: string, userData: IUser) => {
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

  getAllUsers = async () => {
    try {
      const users = await this.users.find({}, { password: 0 });

      return users;
    } catch (error) {}
  };
}
