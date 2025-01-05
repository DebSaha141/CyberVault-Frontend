import styles from './styles/registrationForm.module.scss'

const IncrementDecrementField = ({ field, register, errors }) => (
  <div className={styles.cyberformgroup}>
    <label htmlFor={field.fieldName}>{field.label}</label>
    <input
      className={styles.cyberinput}
      type="number"
      id={field.fieldName}
      {...register(field.fieldName, {
        required: field.required && `${field.label} is required`,
        min: {
          value: field.validation?.min,
          message: `Minimum value is ${field.validation?.min}`,
        },
        max: {
          value: field.validation?.max,
          message: `Maximum value is ${field.validation?.max}`,
        },
      })}
    />
    {errors[field.fieldName] && (
      <p className={styles.cybererror}>{errors[field.fieldName]?.message}</p>
    )}
  </div>
)

export default IncrementDecrementField
