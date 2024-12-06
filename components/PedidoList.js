const PedidoList = ({ pedidos }) => {
    const [pedidosAtualizados, setPedidosAtualizados] = useState(pedidos)
    
    const atualizarStatus = (id, novoStatus) => {
    const pedidosAlterados = pedidosAtualizados.map((pedido) =>
    pedido.id === id ? { ...pedido, status: novoStatus } : pedido
    )
    setPedidosAtualizados(pedidosAlterados)
    }
    
    return (
    <div>
    <h2>Lista de Pedidos</h2>
    <ul>
    {pedidosAtualizados.map((pedido) => (
    <li key={pedido.id}>
    <p><strong>{pedido.numMesa}</strong> pediu: {pedido.itens}</p>
    <p>Status: {pedido.status}</p>
    <select
    value={pedido.status}
    onChange={(e) => atualizarStatus(pedido.id, e.target.value)}
    >
    <option value="Em preparo">Em preparo</option>
    <option value="Pronto">Pronto</option>
    <option value="Entregue">Entregue</option>
    </select>
    </li>
    ))}
    </ul>
    </div>
    )
    }
    
    export default PedidoList