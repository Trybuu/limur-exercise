import type { UserData } from '../types/types'

interface UserDetailsViewProps {
  user: UserData
  onBack?: () => void
}

export default function UserDetailsView({
  user,
  onBack,
}: UserDetailsViewProps) {
  if (!user) return <p>Wystąpił problem z pobraniem użytkownika</p>

  return (
    <div className="mx-auto">
      <button
        onClick={onBack}
        className="mb-6 flex items-center text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
      >
        ← Wróć do listy
      </button>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-6">
        <div className="bg-linear-to-r from-blue-600 to-indigo-700 h-32" />
        <div className="px-8 pb-8">
          <div className="relative -mt-12 flex items-end space-x-5">
            <div className="h-24 w-24 rounded-2xl bg-white p-1 shadow-lg">
              <div className="h-full w-full rounded-xl bg-slate-100 flex items-center justify-center text-3xl font-bold text-blue-600">
                {user.name.charAt(0)}
              </div>
            </div>
            <div className="mb-2">
              <h1 className="text-3xl font-bold text-slate-900">{user.name}</h1>
              <p className="text-slate-500">@{user.username}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 mb-4 border-b pb-2">
              Informacje kontaktowe
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Email
                </label>
                <p className="text-slate-700">{user.email}</p>
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Telefon
                </label>
                <p className="text-slate-700">{user.phone}</p>
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Strona WWW
                </label>
                <p className="text-blue-600 hover:underline">{user.website}</p>
              </div>
            </div>
          </section>

          <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 mb-4 border-b pb-2">
              Adres zamieszkania
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Ulica
                </label>
                <p className="text-slate-700">
                  {user.address.street}, {user.address.suite}
                </p>
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Miasto
                </label>
                <p className="text-slate-700">
                  {user.address.zipcode} {user.address.city}
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="space-y-6">
          <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm h-full">
            <h2 className="text-lg font-bold text-slate-900 mb-4 border-b pb-2">
              Firma
            </h2>
            <div className="space-y-4">
              <div>
                <p className="font-bold text-blue-700 text-xl leading-tight">
                  {user.company?.name || 'Brak danych'}
                </p>
                <p className="text-slate-500 text-sm mt-1">
                  "{user.company?.catchPhrase || 'Brak danych'}"
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <label className="text-xs font-semibold text-slate-400 uppercase">
                  Profil działalności
                </label>
                <p className="text-sm text-slate-600 mt-1 capitalize">
                  {user.company?.bs || 'Brak danych'}
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
