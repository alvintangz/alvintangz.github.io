import { FieldProps } from "formik";

interface InputGroupProps extends FieldProps {
    label: string;
    type: string;
}

const InputGroup = ({
    label,
    type,
    field,
    form: { errors, submitCount },
    ...props
}: InputGroupProps) => {
    const error = submitCount ? (errors[field.name] as string) : null;
    const errorClass = error ? "!border-quaternary border-2" : "";
    return (
        <div className="mb-3">
            <div className="mb-1">
                <label htmlFor={field.name}>{label}</label>
            </div>
            <div>
                <input
                    type={type}
                    {...field}
                    {...props}
                    className={
                        "px-3 py-2 rounded-lg border-tertiary border w-full " +
                        errorClass
                    }
                />
                {error && (
                    <div className="text-quaternary text-xs mt-1 relative">
                        <div className="absolute right-0">{error}</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default InputGroup;
