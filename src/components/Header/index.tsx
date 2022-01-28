import * as C from './style';
import { ReactComponent as LogoSvg } from "../../svgs/dmapp.svg";

export const Header = () => {
  return (
    <C.Container>
      <C.Logo>
        <LogoSvg width={350} />
      </C.Logo>
      <C.NavMenu>
        <ul>
          <li>HOME</li>
          <li>CATEGORIAS</li>
          <li>CONTATO</li>
          <li>SOBRE</li>
        </ul>
      </C.NavMenu>
      <C.Account>
        <ul>
          <li>Login</li>
          <li>Minha Conta</li>
        </ul>
      </C.Account>
    </C.Container>
  );
}