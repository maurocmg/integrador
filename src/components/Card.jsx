export default function Card({name, specie, gender, image, onClose}) {
   return (
      <div>
         <button onClick={onClose}>X</button>
         <h2>{name}</h2>
         <h2>{specie}</h2>
         <h2>{gender}</h2>
         <img  src={image} alt="Image not found" />
      </div>
   );
}
