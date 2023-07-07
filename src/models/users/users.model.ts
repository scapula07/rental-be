import {
  Types,
  Schema,
  Document,
  model,
  Model,
  SchemaDefinitionProperty,
} from "mongoose";
import bcrypt from "bcrypt";

export interface IUser extends Document {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  phone: string;
  dateOfBirth: Date;
  profileImage: string;
  address: {
    houseNumber: string;
    street: string;
    city: string;
    state: string;
    country: string;
    postalCode: Number;
  };
  driverLicense: {
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
  insurance: {
    url: string;
    uploaded: boolean;
    approved: boolean;
  };
  roles: SchemaDefinitionProperty<string[]>;
}

const UserSchema = new Schema<IUser>(
  {
    // Personal details
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    profileImage: { type: String, required: false },
    // Address
    address: {
      houseNumber: { type: String, required: true },
      street: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      country: { type: String, required: true },
      postalCode: { type: Number, required: true },
    },

    // File upload
    driverLicense: {
      url: String,
      details: {
        licenseNumber: String,
        expiryDate: Date,
        issuedDate: Date,
        licenseClass: String,
      },
      uploaded: Boolean,
      approved: Boolean,
    },
    insurance: {
      url: String,
      uploaded: Boolean,
      approved: Boolean,
    },

    // User Role
    roles: {
      type: [String],
      enum: { values: ["user", "partner", "admin"] },
      default: ["user"],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// UserSchema.methods.matchPassword = async function(enteredPassword : string) {
//   return await bcrypt.compare(enteredPassword, this.password);
// };

const Users = model<IUser>("User", UserSchema);

export default Users;
