import { useEffect, useState } from "react"

const minhalista = [
  { id: '1', value: 'Fruta'},
  { id: '2', value: 'Legume'},
  { id: '3', value: 'Carne'},

]

export default function App() {

  const[ produtos, setProdutos] = useState(minhalista);
  const[ pesquisa, setPesquisa] = useState('');

  useEffect(
    () => {
      if(pesquisa) {
        const novaLista = minhalista.filter( (item) => {
          return item.value.toLowerCase().includes(pesquisa.toLowerCase());
        } );
        setProdutos(novaLista);
      } else {
        setProdutos(minhalista);
      }
    }
  ,[pesquisa])

  return (
    <div>
      <h1>Efeitos Colaterais</h1>
      <input 
        value={pesquisa}
        onChange = {(e) => setPesquisa(e.target.value)}
        placeholder="pesquise aqui..." type="text" />

        {produtos.map( (item) => {
          return (
            <div key={item.id}>
              <h4> {item.value} </h4>
            </div>
          )
        })} 
    </div>
  )
}
