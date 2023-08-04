import './style.css'

export default function itemList({title, description}) {
  return (
    <div className='repositoriesItem'>
      <h3>{title}</h3>
      <p>{description}</p>
      <hr />
    </div>
  )
}
