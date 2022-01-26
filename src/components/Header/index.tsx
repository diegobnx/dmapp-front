import * as C from './style';
import LogoSvg from "../../svgs/dmapp.svg?component";

export const Header = () => {
  return (
    <C.Container>
      <C.Logo><LogoSvg /></C.Logo>
      <C.NavMenu>NavMenu</C.NavMenu>
    </C.Container>
  )
}