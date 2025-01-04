const IncrementDecrementField = ({ field, register, errors }) => (
  <div>
    <label htmlFor={field.fieldName}>{field.label}</label>
    <input
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
      <p style={{ color: 'red' }}>{errors[field.fieldName]?.message}</p>
    )}
  </div>
)

export default IncrementDecrementField
