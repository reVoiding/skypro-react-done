/* eslint-disable react/jsx-props-no-spreading */
import useInputRequired from '../hooks/useInputRequired'

const LoginPass = () => {
  const reqLogin = useInputRequired('Введите логин', true)
  const reqPass = useInputRequired('Введите пароль', true)

  return (
    <div className="App">
      <form>
        <input {...reqLogin} />
        {reqLogin.error && (
          <span style={{ color: 'red' }}>{reqLogin.error}</span>
        )}
        <br />
        <input {...reqPass} />
        {reqPass.error && <span style={{ color: 'red' }}>{reqPass.error}</span>}
      </form>
    </div>
  )
}

export default LoginPass
