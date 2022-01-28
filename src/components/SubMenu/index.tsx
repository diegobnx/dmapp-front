import * as C from './styles';

export const SubMenu = () => {
  return (
    <C.Container>
      <C.SearchBox>
        <C.SearchField placeholder="Pesquise empresas!" type="text"></C.SearchField>
        <C.ButtonSearch>Buscar</C.ButtonSearch>
      </C.SearchBox>
    </C.Container>
  );
}