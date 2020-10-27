import {
  ErrorMessage,
  Field,
  Form,
  Formik,
  useFormik,
  yupToFormErrors,
} from "formik";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import * as Yup from "yup";
import { firebase } from "../config/firebase";

const StyledErrorMessage = styled(ErrorMessage)`
  color: red;
  font-size: 12px;
  margin-top: 2px;
`;

const Input = ({ setIsLoggedIn }) => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(value) => {
        firebase
          .auth()
          .signInWithEmailAndPassword(value.email, value.password)
          .then(setIsLoggedIn(true));
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .required("Email is Required")
          .email("Email is invalid"),
        password: Yup.string()
          .required("Password is required")
          .min(6, "Password should be min 6 characters"),
      })}
    >
      {(formik) => (
        <div class="flex min-w-full items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
          <div class="max-w-xs w-full">
            <div></div>
            <Form class="">
              <input type="hidden" name="remember" value="true" />
              <div class="rounded-md shadow-sm">
                <div>
                  <Field
                    name="email"
                    type="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                    placeholder="Email address"
                  />
                  <StyledErrorMessage name="email" component="p" />
                </div>
                <div class="-mt-px">
                  <Field
                    name="password"
                    type="password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                    placeholder="Password"
                  />
                  <StyledErrorMessage name="password" component="p" />
                </div>
              </div>

              <div class="mt-6 flex items-center justify-between">
                <div class="text-xs leading-5">
                  <a
                    href="#"
                    class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div class="mt-6">
                <button
                  type="submit"
                  class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                >
                  <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                    <svg
                      class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400 transition ease-in-out duration-150"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                  Sign in
                </button>
              </div>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Input;
