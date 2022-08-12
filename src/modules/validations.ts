import isEmail from 'validator/lib/isEmail';

export default function validations(
  email = '',
  _password = '',
  _username = '',
) {
  const password = _password.split('');
  const username = _username.split('');
  const errors = [];
  const letras = 'abcdefghijklmnopqrstuvxyzABCDEFGHIJKLMNOPQRSTUVXYZ';
  const simbolos = `?./-=+[]<>@!#$%'&*(){}:|;," `;

  // verifica se o email é válido:
  if (!isEmail(email)) errors.push('E-mail inválido!');
  // verifica se a senha tem ao menos 8 caracteres:
  if (password.length < 8)
    errors.push('A senha deve ter ao menos 8 caracteres!');
  // verifica se a senha inica ou termina com espaço vazio:
  if (password[0] === ' ' || password[password.length - 1] === ' ')
    errors.push('A senha não pode iniciar nem terminar com espaços!');
  // verifica se a senha contém ao menos um número:
  if (!password.some((char) => Number.isInteger(Number.parseInt(char, 10))))
    errors.push('A senha deve conter ao menos um número!');
  // verifica se a senha contém ao menos uma letra (maiúscula ou minúscula):
  if (!password.some((char) => letras.indexOf(char) >= 0))
    errors.push('A senha deve conter ao menos uma letra!');
  // verifica se a senha contém ao menos um símbolo:
  if (!password.some((char) => simbolos.indexOf(char) >= 0))
    errors.push(`A senha deve conter ao menos um dos símbolos: ${simbolos}`);
  // verifica se a senha só contem os números,símbolos e letras permitidos:
  if (
    password.some(
      (char) =>
        !(
          simbolos.indexOf(char) >= 0 ||
          letras.indexOf(char) >= 0 ||
          Number.isInteger(Number.parseInt(char, 10))
        ),
    )
  )
    errors.push(`A senha informada possui caracteres inválidos!`);
  // verifica se o username tem ao menos 6 caracteres:
  if (username.length < 6)
    errors.push('O nome de usuário deve ter ao menos 6 caracteres!');
  // verifica se o nome de usuário só contem os números,símbolos e letras permitidos:
  if (
    username.some(
      (char) =>
        !(
          simbolos.indexOf(char) >= 0 ||
          letras.indexOf(char) >= 0 ||
          Number.isInteger(Number.parseInt(char, 10))
        ),
    )
  )
    errors.push(`O nome de usuário informado possui caracteres inválidos!`);
  // Verifica se o nome de usuário tem, no máximo, 2 espaços em branco:
  let spaces = 0;
  username.forEach((char) => {
    if (char === ' ') spaces += 1;
  });
  if (spaces > 2)
    errors.push(`O nome de usuário não deve conter mais de 2 espaços vazios!`);
  // retorna o array de erros:
  return errors;
}
