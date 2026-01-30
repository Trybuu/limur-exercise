import * as yup from 'yup'

const addUserSchema = yup.object({
  id: yup
    .number()
    .default(() => Math.floor(Math.random() * 1_000_000_000) + Date.now()),
  name: yup
    .string()
    .min(5, 'Imię i nazwisko musi składać się minimum 5 znaków')
    .max(50, 'Imię i nazwisko za długie')
    .required('Imię i nazwisko jest wymagane')
    .trim(),
  username: yup
    .string()
    .min(3, 'Nazwa użytkownika musi składać się minimum z 3 znaków')
    .max(30, 'Nazwa użytkownika za długa')
    .required('Nazwa użytkownika jest wymagana')
    .trim(),
  email: yup
    .string()
    .email('Niepoprawny format')
    .required('E-mail jest wymagany')
    .trim(),
  address: yup.object({
    street: yup
      .string()
      .min(3, 'Nazwa ulicy musi składać się minimum z 3 znaków')
      .max(50, 'Nazwa ulicy za długa')
      .required('Nazwa ulicy jest wymagana')
      .trim(),
    suite: yup
      .string()
      .min(1, 'Numer lokalu musi składać się minimum z 1 znaku')
      .max(30, 'Numer lokalu za długi')
      .required('Numer lokalu jest wymagany')
      .trim(),
    city: yup
      .string()
      .min(2, 'Miasto musi składać się minimum z 2 znaków')
      .max(50, 'Nazwa miasta za długa')
      .required('Miasto jest wymagane')
      .trim(),
    zipcode: yup
      .string()
      .matches(
        /^\d{5}-\d{4}$/,
        'Niepoprawny format kodu pocztowego (poprawny format: 12345-6789)',
      )
      .required('Kod pocztowy jest wymagany')
      .trim(),
  }),
  phone: yup
    .string()
    .min(7, 'Numer telefonu jest za krótki')
    .max(16, 'Numer telefonu jest za długi')
    .required('Numer telefonu jest wymagany')
    .trim(),
  company: yup
    .object({
      name: yup.string().max(100, 'Nazwa firmy za długa').trim().default(''),
      catchPhrase: yup
        .string()
        .max(100, 'Hasło reklamowe za długie')
        .trim()
        .default(''),
      bs: yup.string().max(100, 'Nazwa branży za długa').trim().default(''),
    })
    .required(),
})

export type AddUserInputData = yup.InferType<typeof addUserSchema>
export { addUserSchema }
