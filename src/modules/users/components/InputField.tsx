import type { UseFormRegisterReturn } from 'react-hook-form'

interface InputFieldProps {
  label: string
  required?: boolean
  register: UseFormRegisterReturn
  error?: string
}

export default function InputField({
  label,
  required = true,
  register,
  error,
}: InputFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-bold">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type="text"
        {...register}
        className="px-4 py-2 border border-gray-300 rounded-lg"
      />
      <p className="text-s text-red-500">{error || ' '}</p>
    </div>
  )
}
