import * as Yup from 'yup'

export const onboardingSchema = Yup.object({
  name: Yup.string().required('Імʼя обовʼязкове'),
  birthDate: Yup.date().required('Дата народження обовʼязкова'),
  gender: Yup.string().required('Стать обовʼязкова'),
  avatar: Yup.mixed().required('Аватар обовʼязковий')
})