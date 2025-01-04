const TextField = ({ field, register, errors }) => (
  <div>
    <label htmlFor={field.fieldName}>{field.label}</label>
    <input
      type="text"
      id={field.fieldName}
      placeholder={field.placeholder}
      {...register(field.fieldName, {
        required: field.required && `${field.label} is required`,
        pattern: field.validation?.pattern && {
          value: new RegExp(field.validation.pattern),
          message: field.validation.feedback,
        },
      })}
    />
    {errors[field.fieldName] && (
      <p style={{ color: 'red' }}>{errors[field.fieldName]?.message}</p>
    )}
  </div>
)

export default TextField
