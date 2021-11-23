
interface IProps {
  placeholder?: string;
  type?: string;
  value?: string;
  required?: boolean;
  className?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const TextField = ({
  className,
  type,
  value,
  onChange,
  required,
  placeholder,
}: IProps) => {
  return <input
    className={className || "text_field"}
    type={type || "text"}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    required={required || false} />;
};

export default TextField;