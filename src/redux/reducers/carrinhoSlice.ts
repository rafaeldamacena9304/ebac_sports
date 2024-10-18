import { createSlice } from "@reduxjs/toolkit";

export type Produto = {
    id: number;
    nome: string;
    preco: number;
    imagem: string;
  };


const initialState: { itensNoCarrinho: Produto[] } = {
    itensNoCarrinho: []
}


export const carrinhoSlice = createSlice({
    name: 'carrinho',
    initialState,
    reducers: {
        adicionarAoCarrinho: (state, action) => {
            state.itensNoCarrinho.push(action.payload);
        }
    }
})

export const { adicionarAoCarrinho } = carrinhoSlice.actions