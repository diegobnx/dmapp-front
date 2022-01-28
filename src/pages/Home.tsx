import { Companies } from '../components/Companies';
import { Header } from '../components/Header';
import { SubMenu } from '../components/SubMenu';
import { Merchan } from "../components/Merchan";

export const Home = () => {
  return (
    <>
      <Header />
      <SubMenu />
      <Companies />
      <Merchan />
    </>
  );
}