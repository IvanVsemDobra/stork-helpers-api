'use client'

import { useState, useEffect, useRef } from 'react'
import { Formik, Form, Field, ErrorMessage, useFormikContext } from 'formik'
import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import styles from './OnboardingForm.module.css'

import { onboardingSchema } from '@/lib/validation/onboarding.schema'
import { submitOnboarding } from '@/lib/api/onboarding'

interface OnboardingFormValues {
  name: string
  birthDate: string
  gender: string
  avatar: File | null
}

function AvatarPreview({
  defaultAvatar,
  setPreview,
}: {
  defaultAvatar: string
  setPreview: (src: string) => void
}) {
  const { values } = useFormikContext<OnboardingFormValues>()

  useEffect(() => {
    if (values.avatar) {
      const url = URL.createObjectURL(values.avatar)
      setPreview(url)
      return () => URL.revokeObjectURL(url)
    }
    setPreview(defaultAvatar)
  }, [values.avatar, defaultAvatar, setPreview])

  return null
}

function GenderDropdown({
  value,
  setFieldValue,
}: {
  value: string
  setFieldValue: (field: string, value: string) => void
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const options = [
    { value: 'male', label: 'Хлопчик' },
    { value: 'female', label: 'Дівчинка' },
    { value: 'unknown', label: 'Ще не знаю' },
  ]

  const selected = options.find(o => o.value === value)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div ref={ref} className={styles.dropdown}>
      <button
        type="button"
        className={`${styles.dropdownTrigger} ${
          value ? styles.filled : styles.placeholder
        }`}
        onClick={() => setOpen(prev => !prev)}
      >
        {selected ? selected.label : 'Оберіть стать'}
        <svg className={styles.arrow} viewBox="0 0 24 24">
          <path d="M7 10l5 5 5-5z" />
        </svg>
      </button>

      {open && (
        <div className={styles.dropdownMenu}>
          {options.map(option => (
            <div
              key={option.value}
              className={styles.dropdownItem}
              onClick={() => {
                setFieldValue('gender', option.value)
                setOpen(false)
              }}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default function OnboardingForm() {
  const router = useRouter()
  const defaultAvatar = '/images/avatar-image.svg'
  const [preview, setPreview] = useState(defaultAvatar)

  const mutation = useMutation({
    mutationFn: (formData: FormData) => submitOnboarding(formData),
    onSuccess: () => {
      toast.success('Форма успішно надіслана!')
      router.push('/')
    },
    onError: (err: Error) =>
      toast.error(err.message || 'Помилка при відправці'),
  })

  const handleDateChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setFieldValue: (field: string, value: string) => void
  ) => {
    let val = e.target.value.replace(/\D/g, '')
    if (val.length > 2 && val.length <= 4) val = val.slice(0, 2) + '.' + val.slice(2)
    if (val.length > 4) val = val.slice(0, 5) + '.' + val.slice(5, 9)
    setFieldValue('birthDate', val)
  }

  return (
    <Formik<OnboardingFormValues>
      initialValues={{
        name: '',
        birthDate: '',
        gender: '',
        avatar: null,
      }}
      validationSchema={onboardingSchema}
      onSubmit={(values) => {
        const formData = new FormData()
        formData.append('name', values.name)
        formData.append('birthDate', values.birthDate)
        formData.append('gender', values.gender)
        if (values.avatar) formData.append('avatar', values.avatar)
        mutation.mutate(formData)
      }}
    >
      {({ setFieldValue, values }) => (
        <>
          <Form className={styles.form}>
            <AvatarPreview defaultAvatar={defaultAvatar} setPreview={setPreview} />

            <div className={styles.avatar}>
              <img src={preview} alt="Avatar" className={styles.avatarImage} />
              <label className={styles.uploadLabel}>
                <span className={styles.uploadButton}>Завантажити фото</span>
                <input
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={(e) =>
                    setFieldValue('avatar', e.currentTarget.files?.[0] || null)
                  }
                />
              </label>
            </div>

            <div className={styles.fields}>
              <div className={styles.fieldGroup}>
                <label className={styles.label}>Стать дитини</label>
                <GenderDropdown
                  value={values.gender}
                  setFieldValue={setFieldValue}
                />
                <ErrorMessage name="gender" component="div" className={styles.error} />
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.label}>Планова дата пологів</label>
                <Field
                  type="text"
                  name="birthDate"
                  placeholder="16.07.2025"
                  className={styles.input}
                  maxLength={10}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleDateChange(e, setFieldValue)
                  }
                />
                <ErrorMessage name="birthDate" component="div" className={styles.error} />
              </div>
            </div>
          </Form>

          <div className={styles.submitWrapper}>
            <button
              type="submit"
              disabled={mutation.isPending}
              className={styles.submitButton}
              onClick={() => document.querySelector('form')?.requestSubmit()}
            >
              {mutation.isPending ? 'Відправка…' : 'Зберегти'}
            </button>
          </div>
        </>
      )}
    </Formik>
  )
}