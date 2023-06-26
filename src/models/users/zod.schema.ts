import { object, string, number, date, TypeOf } from "zod";

/**
 * @openapi
 * components:
 *  schema:
 *   CreateUserInput:
 *    type: object
 *    required:
 *      - firstname
 *      - lastname
 *      - password
 *      - passwordConfirmation
 *      - email
 *      - phone
 *      - dateOfBirth
 *      - address
 *        - houseNumber
 *        - street
 *        - city
 *        - state
 *        - country
 *        - postalCode
 *    properties:
 *      firstname:
 *       type: string
 *       default: John
 *      lastname:
 *       type: string
 *       default: Doe
 *      password:
 *       type: string
 *       default: password123
 *      passwordConfirmation:
 *       type: string
 *       default: password123
 *      email:
 *        type: string
 *        default: johndoe@email.com
 *      phone:
 *        type: string
 *        default: 1234567
 *      dateOfBirth:
 *        type: string
 *        format: date
 *        default: 1990-01-01
 *      address:
 *        type: object
 *        required: true
 *        properties:
 *          houseNumber:
 *            type: string
 *            default: 123
 *          street:
 *            type: string
 *            default: Main Street
 *          city:
 *            type: string
 *            default: Toronto
 *          state:
 *            type: string
 *            default: Ontario
 *          country:
 *            type: string
 *            default: Canada
 *          postalCode:
 *            type: number
 *            default: 1234
 */
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

/**
 * @openapi
 * components:
 *  schema:
 *   LoginUserInput:
 *    type: object
 *    required:
 *      - password
 *      - email
 *    properties:
 *      password:
 *       type: string
 *       default: password123
 *      email:
 *        type: string
 *        default: johndoe@email.com
 */
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

/**
 * @openapi
 * components:
 *  schema:
 *   UpdateUserInput:
 *    type: object
 *    properties:
 *      phone:
 *       type: string
 *       default: 1234567
 *      address:
 *        type: object
 *        required: true
 *        properties:
 *          houseNumber:
 *            type: string
 *            default: 123
 *          street:
 *            type: string
 *            default: Main Street
 *          city:
 *            type: string
 *            default: Toronto
 *          state:
 *            type: string
 *            default: Ontario
 *          country:
 *            type: string
 *            default: Canada
 *          postalCode:
 *            type: number
 *            default: 1234
 */
export const UpdateUserSchema = object({
  body: object({
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
  params: object({
    id: string({ required_error: "user id is required" }),
  }),
});

export const UpdateDriverLicenseSchema = object({
  body: object({
    licenseNumber: string({
      required_error: "license number is required",
    }),
    expiryDate: string({
      required_error: "expiry date is required",
    }),
    issuedDate: string({
      required_error: "issues date is required",
    }),
  }),
  params: object({
    id: string({ required_error: "user id is required" }),
  }),
});

export const UpdatePasswordSchema = object({
  body: object({
    oldPassword: string({
      required_error: "email is required",
    }).email("not a valid email"),
    newPassword: string({
      required_error: "password is required",
    }).min(12, "password too short - should be 12 chars minimum"),
  }),
  params: object({
    id: string({ required_error: "user id is required" }),
  }),
});

/**
 * @openapi
 * components:
 *  schema:
 *   ForgotPasswordInput:
 *    type: object
 *    required:
 *      - email
 *    properties:
 *      email:
 *        type: string
 *        default: johndoe@email.com
 */
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
