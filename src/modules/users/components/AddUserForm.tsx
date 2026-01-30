import { useForm } from 'react-hook-form'
import {
  addUserSchema,
  type AddUserInputData,
} from '../validators/addUserSchema'
import { yupResolver } from '@hookform/resolvers/yup'
import InputField from './InputField'
import Button from '@/components/Button'
import { userAdded } from '../slices/usersSlice'
import { useAppDispatch } from '@/store/hooks'
import { useNavigate } from 'react-router'

export default function AddUserForm() {
  const navigate = useNavigate()
  const appDispatch = useAppDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddUserInputData>({
    resolver: yupResolver(addUserSchema),
  })

  const onSubmit = (data: AddUserInputData) => {
    const finalData = addUserSchema.cast(data)
    console.log(data, finalData)
    appDispatch(userAdded(finalData))

    navigate(-1)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full mx-auto flex flex-col gap-8 border border-gray-300 shadow-sm rounded-lg p-4 bg-white"
    >
      <div className="border-b border-gray-300 pb-4">
        <h1 className="text-2xl font-bold">Nowy użytkownik</h1>
        <p className="text-gray-600">Wypełnij dane, aby utworzyć profil.</p>
      </div>

      <section className="space-y-4">
        <h2 className="text-md font-semibold text-blue-600 uppercase tracking-wider">
          Dane konta
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <InputField
              label="Imię i nazwisko"
              register={register('name')}
              error={errors.name?.message}
            />
          </div>
          <InputField
            label="Nazwa użytkownika"
            register={register('username')}
            error={errors.username?.message}
          />
          <InputField
            label="Email"
            register={register('email')}
            error={errors.email?.message}
          />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-md font-semibold text-blue-600 uppercase tracking-wider">
          Kontakt
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField
            label="Telefon"
            register={register('phone')}
            error={errors.phone?.message}
          />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-md font-semibold text-blue-600 uppercase tracking-wider">
          Adres zamieszkania
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <InputField
              label="Ulica"
              register={register('address.street')}
              error={errors.address?.street?.message}
            />
          </div>
          <InputField
            label="Numer / Suite"
            register={register('address.suite')}
            error={errors.address?.suite?.message}
          />
          <div className="md:col-span-2">
            <InputField
              label="Miasto"
              register={register('address.city')}
              error={errors.address?.city?.message}
            />
          </div>
          <InputField
            label="Kod pocztowy"
            register={register('address.zipcode')}
            error={errors.address?.zipcode?.message}
          />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-md font-semibold text-blue-600 uppercase tracking-wider">
          Informacje o firmie
        </h2>
        <div className="flex flex-col gap-4">
          <InputField
            label="Nazwa firmy"
            required={false}
            register={register('company.name')}
            error={errors.company?.name?.message}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              label="Hasło reklamowe"
              required={false}
              register={register('company.catchPhrase')}
              error={errors.company?.catchPhrase?.message}
            />
            <InputField
              label="Branża"
              required={false}
              register={register('company.bs')}
              error={errors.company?.bs?.message}
            />
          </div>
        </div>
      </section>

      <div className="pt-4">
        <Button type="submit">Utwórz profil użytkownika</Button>
      </div>
    </form>
  )
}
