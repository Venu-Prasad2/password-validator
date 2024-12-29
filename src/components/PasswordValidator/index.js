import {useState} from 'react'
import {
  Bg,
  ValidateCard,
  Head,
  Text,
  PasswordInput,
  ErrorMessage,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')
  const setNameError = password.length < 8

  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  return (
    <Bg>
      <ValidateCard>
        <Head>Password Validator</Head>
        <Text>Check how strong and secure is your Password</Text>
        <PasswordInput
          type="password"
          value={password}
          onChange={onChangePassword}
        />
        {setNameError && (
          <ErrorMessage>
            Your password must be at least 8 characters
          </ErrorMessage>
        )}
      </ValidateCard>
    </Bg>
  )
}
export default PasswordValidator
