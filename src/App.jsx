import { useState } from "react"

function App() {
  const [game, setGame] = useState([])
  const [title, setTitle] = useState("")
  const [cover, setCover] = useState("")
        /* |        \*/
        /* V         V \*/
        /*ESTADO  FUNC P MUDAR O ESTADO*/

  const addGame = ({ title, cover }) => {
    const id = Math.floor(Math.random() * 1000000)
    const game = {id, title, cover}
    setGame((state) => [...state, game])
    /*state = estado atual. 
    [...state, game] cria um novo array que contém todos os itens do array state original, seguidos pelo novo jogo game.*/
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    addGame({ title, cover })
    setTitle("")
    setCover("")
  }

  return (
    <div className="app">
      <h1>Biblioteca de Jogos</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Título:</label>
          <input 
            type="text"
            name="title"
            id="title"
            value={title} /*value eh o estado atual*/
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="cover">Capa:</label>
          <input 
            type="text"
            name="cover" 
            id="cover"
            value={cover} /*value eh o estado atual*/
            onChange={(e) => setCover(e.target.value)}
            /*O parâmetro e (event) é um objeto que contém informações sobre o evento que ocorreu. */
            /*e.target refere-se ao elemento que disparou o evento (neste caso, o elemento input). */
            /*e.target.value é o valor atual do input, ou seja, o texto que o usuário digitou. */

            /**title é uma string vazia "". O input é renderizado como <input type="text" value="" />. */
            /**onChange dispara e setTitle("A") é chamado.
            O estado title é atualizado para "A". */
          />
        </div>
        <button>Adicionar</button>
      </form>
      <div className="games">
        {games.map((game) => (
          <div key={game.id}>
            <img src={game.cover} alt="" />
            <div>
              <h2>{game.title}</h2>
              <button>Remover jogo</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App