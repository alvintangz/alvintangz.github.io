import { FieldProps } from "formik";
import "./TextAreaGroup.css";

interface TextAreaGroupProps extends FieldProps {
    label: string;
}

const TextAreaGroup = ({
    label,
    field,
    form: { errors, submitCount },
    ...props
}: TextAreaGroupProps) => {
    const error = submitCount ? (errors[field.name] as string) : null;
    const errorClass = error ? "border-quaternary border-2" : "";
    return (
        <div className="mb-3">
            <div className="mb-1">
                <label htmlFor={field.name}>{label}</label>
            </div>
            <textarea
                {...field}
                {...props}
                className={"field-textarea " + errorClass}
            ></textarea>
            {error && (
                <div className="text-quaternary text-xs relative">
                    <div className="absolute right-0">{error}</div>
                </div>
            )}
        </div>
    );
};

export default TextAreaGroup;
