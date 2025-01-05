import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import formData from '../../data/test/form.json'
import TextField from './TextField'
import SelectField from './SelectField'
import CheckboxField from './CheckboxField'
import IncrementDecrementField from './Increment-Decrement'
import styles from './styles/RegistrationForm.module.scss'

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    trigger,
    reset,
    formState: { errors },
  } = useForm()
  const [currentStep, setCurrentStep] = useState(0)

  const onSubmit = (data) => {
    console.log('Form Data:', data)
    reset()
  }

  const handleNext = async () => {
    const isValid = await trigger(
      formData.sections[currentStep].fields.map((field) => field.fieldName),
    )

    if (isValid) {
      setCurrentStep((prev) => prev + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  return (
    <form className={styles.cybercontainer} onSubmit={handleSubmit(onSubmit)}>
      <h1 className={styles.cybertitle}>{formData.infoObject.formTitle}</h1>
      <p className={styles.cybersubtitle}>{formData.infoObject.description}</p>

      <div>
        <h2 className={styles.cybertitle}>
          {formData.sections[currentStep].sectionTitle}
        </h2>
        {formData.sections[currentStep].fields.map((field, index) => {
          switch (field.type) {
            case 'text':
              return (
                <TextField
                  key={index}
                  field={field}
                  register={register}
                  errors={errors}
                />
              )
            case 'select':
              return (
                <SelectField
                  key={index}
                  field={field}
                  register={register}
                  errors={errors}
                />
              )
            case 'checkbox':
              return (
                <CheckboxField key={index} field={field} register={register} />
              )
            case 'increment-decrement':
              return (
                <IncrementDecrementField
                  key={index}
                  field={field}
                  register={register}
                  errors={errors}
                />
              )
            default:
              return null
          }
        })}
      </div>
      <div>
        {currentStep > 0 && (
          <button
            type="button"
            className={styles.cybersubmitbutton}
            onClick={handlePrevious}
          >
            Previous
          </button>
        )}
        {currentStep < formData.sections.length - 1 ? (
          <button
            type="button"
            className={styles.cybersubmitbutton}
            onClick={handleNext}
          >
            Next
          </button>
        ) : (
          <button type="submit" className={styles.cybersubmitbutton}>
            Submit
          </button>
        )}
      </div>
    </form>
  )
}

export default RegistrationForm
