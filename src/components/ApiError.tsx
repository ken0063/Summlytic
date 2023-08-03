import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { FC } from "react";

type Props = {
  error: FetchBaseQueryError | SerializedError | undefined;
};

const ApiError: FC<Props> = ({ error }) => {
  return (
    <p className="font-inter font-bold text-black text-center">
      Well, that wasn't supposed to happen...
      <br />
      <span className="font-satoshi font-normal text-gray-700">
        {error?.data?.error}
      </span>
    </p>
  );
};

export default ApiError;
