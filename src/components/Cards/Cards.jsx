import Card from '../Card/Card';
import styled from 'styled-components';

const Div = styled.div`
   display: flex;
   justify-content: space-evenly;
   margin: 10px 0px 10px 0px;
   `;


export default function Cards(props) {
   const { characters } = props;
   return <Div>
      {characters.map((each)=>(
         <Card
         key={each.id}           
         name={each.name}
         species={each.species}
         gender={each.gender}
         image={each.image}
         onClose={() => window.alert('Emulamos que se cierra la card')}
         />
      ))}
   </Div>;
}
