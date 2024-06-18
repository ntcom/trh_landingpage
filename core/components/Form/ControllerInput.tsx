import React from "react";
import { Controller } from "react-hook-form";
import InputCustom from "../InputCustom/InputCustom";

export default function ControllerInput(props: any) {
  const { control, name, label, disabled, ...rest } = props;

  return (
    <Controller
      render={({ field, fieldState: { error } }) => (
        <InputCustom
          id={name}
          label={label}
          control={control}
          nameInput={name}
          error={error?.message && error.message}
          disabled={disabled}
          {...field}
          {...rest}
        />
      )}
      name={name}
      control={control}
    />
  );
}
