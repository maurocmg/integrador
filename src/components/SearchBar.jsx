import styled from 'styled-components';

const Button = styled.button`
   background-color: gray;
   color: white;
   border: 1px solid black;
   border-radius: 5px;
   font-weight: bold;
   font-size: 15px;
   padding: 10px;
   margin: 25px 0px 25px 0px;
   `;

 const Search = styled.input`
   margin-right: 10px;
   padding: 10px;
   border-radius: 5px;
   `;

export default function SearchBar(props) {
   return (
      <div>
         <Search type='search' />
      <Button onClick={()=> props.onSearch('Función onSearch')}>Agregar</Button>
      </div>
   );
}
