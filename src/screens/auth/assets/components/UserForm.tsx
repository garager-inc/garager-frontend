import React from 'react'
import InputForm from './InputForm'

interface UserFormProps {
  formValues: {
    email: string
    password: string
    username: string
    surname: string
    confirmPassword: string
    cpf: string
    phone: string
  }
  isLoading: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  error: string | null
  showSubmitButton?: boolean
  onContinue?: () => void
}

const UserForm: React.FC<UserFormProps> = ({
  formValues,
  onChange,
  onSubmit,
  error,
  isLoading,
  showSubmitButton = true,
  onContinue,
}) => {
  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      {error && (
        <div className="mb-4 p-2 bg-red-100 text-red-700 border border-red-300 rounded-md">
          {error}
        </div>
      )}
      <div className="flex flex-row gap-4">
        <InputForm
          isRequired={true}
          nameid="username"
          span="Nome"
          type="text"
          value={formValues.username}
          onChange={onChange}
        />
        <InputForm
          isRequired={true}
          nameid="surname"
          span="Sobrenome"
          type="text"
          value={formValues.surname}
          onChange={onChange}
        />
      </div>
      <InputForm
        isRequired={true}
        nameid="cpf"
        span="CPF (apenas números)"
        type="text"
        value={formValues.cpf}
        onChange={onChange}
      />
      <InputForm
        isRequired={true}
        nameid="phone"
        span="Número de telefone"
        type="text"
        value={formValues.phone}
        onChange={onChange}
      />
      <InputForm
        isRequired={true}
        nameid="email"
        span="Email"
        type="text"
        value={formValues.email}
        onChange={onChange}
      />
      <InputForm
        isRequired={true}
        nameid="password"
        span="Senha"
        type="password"
        value={formValues.password}
        onChange={onChange}
      />
      <InputForm
        isRequired={true}
        nameid="confirmPassword"
        span="Confirme sua senha"
        type="password"
        value={formValues.confirmPassword}
        onChange={onChange}
      />
      {showSubmitButton && (
        <button
          type="submit"
          className="w-full bg-gg-rich-black text-white p-2 rounded-lg mb-6 transition-colors duration-200 ease-in-out hover:bg-gg-lavender-blush hover:text-black hover:border hover:border-gray-300"
        >
          {isLoading ? 'Carregando...' : 'Registrar'}
        </button>
      )}
      {!showSubmitButton && onContinue && (
        <button
          type="button"
          onClick={onContinue}
          className="w-full bg-gg-lavender-blush border-solid p-2 rounded-lg mt-4 transition-colors duration-200 ease-in-out hover:bg-gg-rich-black hover:text-white"
        >
          Continuar
        </button>
      )}
    </form>
  )
}

export default UserForm
