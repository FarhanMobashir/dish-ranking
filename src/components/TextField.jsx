import styles from "../styles/AuthForm.module.css";

export const TextField = ({
  label,
  value,
  onChange,
  type = "text",
  placeholder = "",
}) => {
  return (
    <div>
      <label className={styles.label} htmlFor="">
        {label}:
        <input
          value={value}
          onChange={onChange}
          type={type}
          className={styles.input}
          placeholder={placeholder}
        />
      </label>
    </div>
  );
};
