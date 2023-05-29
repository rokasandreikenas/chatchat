import { FieldAttributes, useField } from "formik";
import Input from "../inputs/Input";
import Label from "../inputs/Label";
import ErrorMessage from "../inputs/ErrorMessage";

interface Props extends FieldAttributes<any> {
  label?: string;
}

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
