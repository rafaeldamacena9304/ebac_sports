import { useSelector } from 'react-redux';
import * as S from './styles';
import { paraReal } from '../Produto';
import cesta from '../../assets/cesta.png';
import { Produto } from '../../App';
import { RootState } from '../../redux/rootReducer';

type Props = {
  favoritos: Produto[];
  itensNoCarrinho: Produto[];
};

const Header = ({ favoritos }: Props) => {
  const itensNoCarrinho = useSelector((state: RootState) => state.carrinho.itensNoCarrinho);

  const valorTotal = itensNoCarrinho.reduce((acc: any, item: any) => {
    acc += item.preco;
    return acc;
  }, 0);

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favoritos.length} favoritos</span>
        <img src={cesta} />
        <span>
          {itensNoCarrinho.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  );
};

export default Header;
