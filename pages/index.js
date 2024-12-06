import { useState } from 'react'
import PedidoForm from '../components/PedidoForm'
import PedidoList from '../components/PedidoList'

export default function Home() {
const [pedidos, setPedidos] = useState([])

const adicionarPedido = (pedido) => {
setPedidos([...pedidos, pedido])
}

return (
<div>
<h1>Controle de Pedidos</h1>
<PedidoForm adicionarPedido={adicionarPedido} />
<PedidoList pedidos={pedidos} />
</div>
)
}