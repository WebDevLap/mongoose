import React from 'react';
import { Input } from '../../components/Inputs';
import { InputField } from '../../components/Input.styled';
import {
  SignUpEl,
  SignUpContainer,
  SignUpList,
  SignUpTitle,
  SignUpGlobError,
  SignUpSubmit,
} from './styled';
import { USERS_DATA } from '../../API/API';
import axios from 'axios';
import { addModalWindowItem, removeModalWindowItem } from '../../store/slices/ModalWindowSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
export const availableNameLetters = 'qwertyuiopasdfghjklzxcvbnmйцукенгшщзхъфывапролджэячсмитьбю_';

export function emailValider(email: string, setEmailError: Function) {
  if (email.length === 0) {
    setEmailError('Поле пустое!');
  } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.toLowerCase())) {
    setEmailError('Неверная почта!');
  } else {
    setEmailError('Валидное поле!');
  }
}

export function passwordValider(password: string, setPasswordError: Function) {
  if (password.length === 0) {
    setPasswordError('Пустое поле');
  } else if (password.length < 6) {
    setPasswordError('Не меньше 7 символов');
  } else {
    setPasswordError('Валидное поле!');
  }
}

export const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('');
  const [isEmailFocus, setIsEmailFocus] = React.useState(false);
  const [emailError, setEmailError] = React.useState<string>('Ошибка');
  const [IsEmailError, setIsEmailError] = React.useState<boolean>(false);

  const [name, setName] = React.useState('');
  const [isNameFocus, setIsNameFocus] = React.useState(false);
  const [nameError, setNameError] = React.useState<string>('Ошибка');
  const [IsNameError, setIsNameError] = React.useState<boolean>(false);

  const [password1, setPassword1] = React.useState('');
  const [isPassword1Focus, setIsPassword1Focus] = React.useState(false);
  const [password1Error, setPassword1Error] = React.useState<string>('Ошибка');
  const [IsPassword1Error, setIsPassword1Error] = React.useState<boolean>(false);

  const [password2, setPassword2] = React.useState('');
  const [isPassword2Focus, setIsPassword2Focus] = React.useState(false);
  const [password2Error, setPassword2Error] = React.useState<string>('Ошибка');
  const [IsPassword2Error, setIsPassword2Error] = React.useState<boolean>(false);

  const [isSubmitDisabled, setIsSubmitDisabled] = React.useState<boolean>(true);
  const dispatch = useDispatch();

  interface IGlobError {
    value: string;
    state: 'email' | 'name' | 'password1' | 'password2' | '';
  }

  const [globError, setGlobError] = React.useState<IGlobError>({
    value: '',
    state: '',
  });

  function onInputChange(e: any, f: (v: string) => void) {
    switch (e.target.name) {
      case 'email':
        f(e.target.value);
        break;
      case 'name':
        if (
          availableNameLetters
            .split('')
            .includes(e.target.value.toLowerCase()[e.target.value.length - 1])
        ) {
          f(e.target.value);
        }
        if (e.target.value.length === 0) {
          setName('');
        }
        break;
      case 'password1':
        f(e.target.value);
        break;
      case 'password2':
        f(e.target.value);
        break;
    }
  }

  React.useEffect(() => {
    emailValider(email, setEmailError);
    if (globError.state === 'email') {
      setGlobError({ value: '', state: '' });
    }
  }, [email]);

  React.useEffect(() => {
    if (name.length === 0) {
      setNameError('Пустое поле');
    } else if (name.length > 1) {
      setNameError('Валидное поле!');
    } else {
      setNameError('Слишком мало символов');
    }
  }, [name]);

  React.useEffect(() => {
    passwordValider(password1, setPassword1Error);
    if (password1.length > 0) {
      if (password2 !== password1) {
        setPassword2Error('Пароли не совпадают');
      } else {
        setPassword2Error('Валидное поле!');
      }
    }
  }, [password1]);

  React.useEffect(() => {
    if (password2.length === 0) {
      setPassword2Error('Пустое поле');
    } else if (password2 !== password1) {
      setPassword2Error('Пароли не совпадают');
    } else {
      setPassword2Error('Валидное поле!');
    }
  }, [password2]);

  React.useEffect(() => {
    if (
      emailError === 'Валидное поле!' &&
      nameError === 'Валидное поле!' &&
      password1Error === 'Валидное поле!' &&
      password2Error === 'Валидное поле!'
    ) {
      setIsSubmitDisabled(false);
    } else {
      setIsSubmitDisabled(true);
    }
  }, [emailError, nameError, password1Error, password2Error]);

  function onInputBlur(e: any) {
    switch (e.target.name) {
      case 'email':
        setIsEmailFocus(false);
        setIsEmailError(true);
        break;
      case 'name':
        setIsNameFocus(false);
        setIsNameError(true);
        break;
      case 'password1':
        setIsPassword1Focus(false);
        setIsPassword1Error(true);

        break;
      case 'password2':
        setIsPassword2Focus(false);
        setIsPassword2Error(true);

        break;
    }
  }

  function onInputFocus(e: any) {
    switch (e.target.name) {
      case 'email':
        setIsEmailFocus(true);
        setIsEmailError(false);
        break;
      case 'name':
        setIsNameFocus(true);
        setIsNameError(false);
        break;
      case 'password1':
        setIsPassword1Focus(true);
        setIsPassword1Error(false);
        break;
      case 'password2':
        setIsPassword2Focus(true);
        setIsPassword2Error(false);
        break;
    }
  }
  function onSubmit(e: any) {
    e.preventDefault();

    (async function () {
      try {
        dispatch(addModalWindowItem('Проверка данных'));

        const { data: usersData } = await axios.get(USERS_DATA);

        usersData.forEach((el: any) => {
          if (el.email.toLowerCase() === email.toLowerCase()) {
            setGlobError({
              value: 'Пользователь с такой почтой уже существует',
              state: 'email',
            });
            throw new Error();
          }
        });
        dispatch(removeModalWindowItem('Проверка данных'));
        dispatch(addModalWindowItem('Добавление нового пользователя'));
        const { data: postUsers } = await axios.post(USERS_DATA, {
          email: email,
          name: name,
          password: password1,
        });
        navigate('/');
      } catch (err) {
        console.log('register error');
      } finally {
        dispatch(removeModalWindowItem('Проверка данных'));
        dispatch(removeModalWindowItem('Добавление нового пользователя'));
      }
    })();
  }

  return (
    <SignUpEl>
      <SignUpContainer>
        <SignUpTitle>Регистрация</SignUpTitle>
        <form action="#" onSubmit={onSubmit}>
          <SignUpGlobError active={globError.value === '' ? false : true}>
            {globError.value}
          </SignUpGlobError>
          <SignUpList>
            <Input
              placehold="Введите вашу почту"
              isInputFocus={isEmailFocus}
              input={email}
              setInput={setEmail}
              error={emailError}
              isError={IsEmailError}>
              <InputField
                name="email"
                value={email}
                onChange={(e) => onInputChange(e, setEmail)}
                onFocus={(e) => onInputFocus(e)}
                onBlur={(e) => onInputBlur(e)}
              />
            </Input>

            <Input
              placehold="Введите ваше имя"
              isInputFocus={isNameFocus}
              input={name}
              setInput={setName}
              error={nameError}
              isError={IsNameError}>
              <InputField
                name="name"
                value={name}
                onChange={(e) => onInputChange(e, setName)}
                onFocus={(e) => onInputFocus(e)}
                onBlur={(e) => onInputBlur(e)}
              />
            </Input>

            <Input
              placehold="Придумайте пароль"
              isInputFocus={isPassword1Focus}
              input={password1}
              setInput={setPassword1}
              error={password1Error}
              isError={IsPassword1Error}>
              <InputField
                name="password1"
                value={password1}
                onChange={(e) => onInputChange(e, setPassword1)}
                onFocus={(e) => onInputFocus(e)}
                onBlur={(e) => onInputBlur(e)}
              />
            </Input>

            <Input
              placehold="Повторите пароль"
              isInputFocus={isPassword2Focus}
              input={password2}
              setInput={setPassword2}
              error={password2Error}
              isError={IsPassword2Error}>
              <InputField
                name="password2"
                value={password2}
                onChange={(e) => onInputChange(e, setPassword2)}
                onFocus={(e) => onInputFocus(e)}
                onBlur={(e) => onInputBlur(e)}
              />
            </Input>
          </SignUpList>
          <SignUpSubmit type="submit" disabled={isSubmitDisabled}>
            Отправить
          </SignUpSubmit>
        </form>
      </SignUpContainer>
    </SignUpEl>
  );
};
