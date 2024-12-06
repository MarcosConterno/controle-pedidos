import { useState } from 'react'

const PedidoForm = ({ adicionarPedido }) => {
const [numMesa, setNumMesa] = useState('')
const [itens, setItens] = useState('')
const [status, setStatus] = useState('Em preparo')

const handleSubmit = (e) => {
e.preventDefault()
if (numMesa && itens) {
adicionarPedido({
numMesa,
itens,
status,
id: Date.now(), // ID único para cada pedido
})
setnumMesa('')
setItens('')
}
}

return (
<form onSubmit={handleSubmit}>
<div>
<label>Número da Mesa:</label>
<input
type="text"
value={numMesa}
onChange={(e) => setnumMesa(e.target.value)}
required
/>
</div>
<div>
<label>Itens do Pedido:</label>
<input
type="text"
value={itens}
onChange={(e) => setItens(e.target.value)}
required
/>
</div>
<div>
<label>Status:</label>
<select value={status} onChange={(e) => setStatus(e.target.value)}>
<option value="Em preparo">Em preparo</option>
<option value="Pronto">Pronto</option>
<option value="Entregue">Entregue</option>
<option value="Entregue">Pago</option>
</select>
</div>
<button type="submit">Adicionar Pedido</button>
</form>
)
}

export default PedidoForm