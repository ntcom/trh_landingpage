import React from "react";
import { Controller } from "react-hook-form";
import { MultiSelect } from "../MultipleSelect/MultipleSelect";

export default function ControllerMultiSelect(props: any) {
  const { control, name, label, disabled, options, ...rest } = props;

  return (
    <Controller
      render={({ field, fieldState: { error } }) => {
        return (
          <MultiSelect
            id={name}
            options={options}
            label={label}
            control={control}
            nameSelect={name}
            error={error?.message && error.message}
            disabled={disabled}
            {...field}
            {...rest}
          />
        )
      }}
      name={name}
      control={control}
    />
  );
}
