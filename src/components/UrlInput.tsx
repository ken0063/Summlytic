import { CornerDownLeft, Link2 } from "lucide-react";
import {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { FC } from "react";
import { Schema } from "../types/article";

interface Props {
  register: UseFormRegister<Schema>;
  handleSubmit: UseFormHandleSubmit<Schema, undefined>;
  errors: FieldErrors<Schema>;
  submitForm: (data: Schema) => Promise<void>;
}

const UrlInput: FC<Props> = ({
  handleSubmit,
  submitForm,
  register,
  errors,
}) => {
  return (
    <>
      <form
        className="relative flex items-center justify-center"
        onSubmit={handleSubmit(submitForm)}
      >
        <Link2 className="absolute left-0 w-5 my-2 ml-3 text-gray-500" />
        <input
          placeholder="Paste the article link"
          type="url"
          required
          className="url_input peer"
          {...register("url")}
        />

        <button
          type="submit"
          className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700"
          aria-label="Enter"
        >
          <CornerDownLeft className="w-4 h-4" />
        </button>
      </form>

      {errors && (
        <p className="ml-3 text-sm text-red-500">{errors?.url?.message}</p>
      )}
    </>
  );
};

export default UrlInput;
