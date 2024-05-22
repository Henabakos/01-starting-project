export const CoreConcept = ({image,title,description}) =>{
    return(
      <li>
        <img src={image} alt="image" />
        <h2>{title}</h2>
        <p>{description}</p>
      </li>
    )
  }