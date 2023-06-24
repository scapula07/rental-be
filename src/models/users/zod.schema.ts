import { object, string, number, date, TypeOf } from "zod";

export const CreateUserSchema = object({
  body: object({
    firstname: string({
      required_error: "firstname is required",
    }),
    lastname: string({
      required_error: "lastname is required",
    }),
    password: string({
      required_error: "password is required",
    }).min(12, "password too short - should be 12 chars minimum"),
    passwordConfirmation: string({
      required_error: "passwordConfirmation is required",
    }),
    email: string({
      required_error: "email is required",
    }).email("not a valid email"),
    phone: string({
      required_error: "Phone number is required",
    }).min(7, "Phone number too short - should be 7 minimum"),
    dateOfBirth: date({
      required_error: "date of birth is required",
    }),
    address: object({
      houseNumber: string({
        required_error: "house number is required",
      }),
      street: string({
        required_error: "street is required",
      }),
      city: string({
        required_error: "city is requred",
      }),
      state: string({
        required_error: "state is required",
      }),
      country: string({
        required_error: "country is required",
      }),
      postalCode: number({
        required_error: "postal code is required",
      }).min(4, "postal code too short - should be 4 minimum"),
    }),
  }).refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords don't match",
    path: ["confirm"], // path of error
  }),
});

export const LoginUserSchema = object({
  body: object({
    email: string({
      required_error: "email is required",
    }).email("not a valid email"),
    password: string({
      required_error: "password is required",
    }).min(12, "password too short - should be 12 chars minimum"),
  }),
});

export const UpdateUserSchema = object({
  body: object({
    id: string({ required_error: "user id is required" }),
    phone: string().min(7, "Phone number too short - should be 7 minimum"),
    address: object({
      houseNumber: string(),
      street: string(),
      city: string(),
      state: string(),
      country: string(),
      postalCode: number().min(
        4,
        "postal code too short - should be 4 minimum"
      ),
    }),
  }),
});

export const UpdateDriverLicenseSchema = object({
  body: object({
    id: string({ required_error: "user id is required" }),
    licenseNumber: string({
      required_error: "license number is required",
    }),
    expiryDate: string({
      required_error: "expiry date is required",
    }),
  }),
});

export const UpdatePasswordSchema = object({
  body: object({
    id: string({ required_error: "user id is required" }),
    oldPassword: string({
      required_error: "email is required",
    }).email("not a valid email"),
    newPassword: string({
      required_error: "password is required",
    }).min(12, "password too short - should be 12 chars minimum"),
  }),
});
export const ForgotPasswordSchema = object({
  body: object({
    email: string({
      required_error: "email is required",
    }).email("not a valid email"),
  }),
});

export type CreateUserInput = Omit<
  TypeOf<typeof CreateUserSchema>,
  "body.passwordConfirmation"
>;
