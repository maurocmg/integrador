import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   return <div>
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
   </div>;
}
