import styles from './FormInput.module.scss';

const FormInput = ({
  label,
  type,
  name,
  placeholder,
  required,
  className = '',
  onChange,
  value,
}) => {
  const combinedStyles = `${styles.formInput} ${className}`;

  return (
    <div className={combinedStyles}>
      <label htmlFor={name}>{label || name}</label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default FormInput;
