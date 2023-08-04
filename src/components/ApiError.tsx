import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { FC } from "react";

type Props = {
  error: FetchBaseQueryError | SerializedError | undefined;
};

const ApiError: FC<Props> = ({ error }) => {
  const formatedError = () => {
    if (error) {
      if ("status" in error) {
        const errMsg =
          "error" in error ? error.error : JSON.stringify(error?.data);

        return errMsg;
      } else {
        return error.message;
      }
    }
  };

  const errorMessage = formatedError();

  return (
    <p className="font-bold text-center text-black font-inter">
      Well, that wasn't supposed to happen...
      <br />
      <span className="font-normal text-gray-700 font-satoshi">
        {errorMessage}
      </span>
    </p>
  );
};

export default ApiError;
