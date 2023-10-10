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
  customerId: string;
  password: string;
  phone: string;
  dateOfBirth: Date;
  profileImage: {
    publicId: string;
    url: string;
  };
  address: {
    houseNumber: string;
    street: string;
    city: string;
    state: string;
    country: string;
    postalCode: Number;
  };
  driverLicense: {
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
  insurance: {
    publicId: string;
    url: string;
    uploaded: boolean;
    approved: boolean;
  };
  investmentType: string;
  roles: SchemaDefinitionProperty<string[]>;
  emailVerified: boolean;
}

const UserSchema = new Schema<IUser>(
  {
    // Personal details
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    customerId: { type: String },
    password: { type: String, required: true },
    phone: { type: String, unique: true },
    dateOfBirth: { type: Date },
    profileImage: { publicId: String, url: String },

    // Address
    address: {
      houseNumber: { type: String },
      street: { type: String },
      city: { type: String },
      state: { type: String },
      country: { type: String },
      postalCode: { type: Number },
    },

    // File upload
    driverLicense: {
      publicId: String,
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
      publicId: String,
      url: String,
      uploaded: Boolean,
      approved: Boolean,
    },

    // Investment details
    investmentType: {
      type: String,
      enums: ["monthly", "bi-monthly", "quaterly"],
      default: "monthly",
    },

    // User Role
    roles: {
      type: String,
      enum: { values: ["customer", "partner", "admin", "super-admin"] },
      required: true,
    },

    // Email verification
    emailVerified: {
      type: Boolean,
      default: false,
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
