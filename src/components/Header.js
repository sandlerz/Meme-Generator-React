import trollface from '../img/Troll Face.png'

export default function Header() {
  return (
    <header>
      <div>
        <img src={trollface} />
        <h1>Meme Generator</h1>
      </div>
      <p>
        React Course - Project 3
      </p>
    </header>
  )
}