import { FieldAttributes, useField } from "formik";
import ErrorMessage from "../inputs/ErrorMessage";
import Input from "../inputs/Input";
import Label from "../inputs/Label";

type Props = {
  label?: string;
} & FieldAttributes<unknown>;

const FormikInput = ({ label, ...props }: Props) => {
  const [field, meta] = useField(props.name);

  return (
    <>
      <Label>
        {label}
        <Input {...field} {...props} />
      </Label>
      {meta.touched && meta.error && <ErrorMessage>{meta.error}</ErrorMessage>}
    </>
  );
};

export default FormikInput;
