const CheckboxField = ({ field, register }) => (
  <div>
    <label>{field.label}</label>
    {field.options.map((option, index) => (
      <div key={index}>
        <label htmlFor={`${field.fieldName}-${index}`}>
          <input
            type="checkbox"
            id={`${field.fieldName}-${index}`}
            {...register(`${field.fieldName}[${index}]`)}
            value={option}
          />
          {option}
        </label>
      </div>
    ))}
  </div>
)
export default CheckboxField
