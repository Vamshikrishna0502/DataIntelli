import "./index.css"
const Card = (props)  =>{
    const {cardDetails} = props
    const {name,date} = cardDetails
  return (
    <div className="content-card">
      <h3>{name}</h3>
      <p>{date}</p>
    </div>
  );
}


export default Card