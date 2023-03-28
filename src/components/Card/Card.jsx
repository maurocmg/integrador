import styled from 'styled-components'

const Button = styled.button`
   position: relative;
   right: -120px;
   top: -10px;
   background-color: gray;
   color: white;
   border: 1px solid black;
   border-radius: 5px;
   font-weight: bold;
   font-size: 10px;
   padding: 10px;
   margin: 25px 0px 25px 0px;
   `;

const Div = styled.div`
   width: 300px;
   display: inline-block;
   background-color: #b56912;
   border-radius: 10px;
   color: white;
   overflow: hidden;
   margin: 25px 25px 25px 0px;  
`;

const SpecGen = styled.h2`
   display: inline-block;
   font-size: 16px;
   margin: 5px 15px 0px 5px; 
   
`;


export default function Card({name, species, gender, image, onClose}) {
   return (
      <Div>
         <Button onClick={onClose}>X</Button>
         <h2>{name}</h2>
         <SpecGen>{species}</SpecGen>
         <SpecGen>{gender}</SpecGen>
         <img  src={image} alt="Not found" />
      </Div>
   );
}
