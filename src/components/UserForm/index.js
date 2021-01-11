import React from 'react'
import { useInputValue } from '../../hooks/useInputForm'
import { Title, Form, Input } from './styles'
import { SubmitButton } from '../SubmitButton'

export const UserForm = ({
  disabled,
  error,
  onSubmit,
  title = 'Regístrate'
}) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }

  return (
    <Form disabled={disabled} onSubmit={handleSubmit}>
      <Title>{title}</Title>
      <Input disabled={disabled} type="email" placeholder="Email" {...email} />
      <Input
        disabled={disabled}
        type="password"
        placeholder="Password"
        {...password}
      />
      <SubmitButton disabled={disabled} type="submit">
        {title}
      </SubmitButton>
      {error && <p>{error}</p>}
    </Form>
  )
}
