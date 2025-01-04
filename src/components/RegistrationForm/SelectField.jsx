const SelectField = ({ field, register, errors }) => (
  <div>
    <label htmlFor={field.fieldName}>{field.label}</label>
    <select
      id={field.fieldName}
      {...register(field.fieldName, {
        required: field.required && `${field.label} is required`,
      })}
    >
      {field.options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
    {errors[field.fieldName] && (
      <p style={{ color: 'red' }}>{errors[field.fieldName]?.message}</p>
    )}
  </div>
)

export default SelectField
