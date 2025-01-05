import styles from './styles/registrationForm.module.scss'

const TextField = ({ field, register, errors }) => (
  <div className={styles.cyberformgroup}>
    <label htmlFor={field.fieldName} className="cyber-label">
      {field.label}
    </label>
    <input
      className={styles.cyberinput}
      type="text"
      id={field.fieldName}
      {...register(field.fieldName, {
        required: field.required && `${field.label} is required`,
      })}
    />
    {errors[field.fieldName] && (
      <p className={styles.cybererror}>{errors[field.fieldName]?.message}</p>
    )}
  </div>
)

export default TextField
