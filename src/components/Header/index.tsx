import { useSelector } from 'react-redux';
import * as S from './styles';
import { paraReal } from '../Produto';
import cesta from '../../assets/cesta.png';
import { Produto } from '../../App';

type Props = {
  favoritos: Produto[];
  itensNoCarrinho: Produto[];
};

const Header = ({ favoritos }: Props) => {
  const itensNoCarrinho = useSelector((state: { carrinho: { itensNoCarrinho: Produto[] } }) => state.carrinho.itensNoCarrinho);

  const valorTotal = itensNoCarrinho.reduce((acc, item) => {
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
