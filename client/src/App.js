import { useState, useEffect } from 'react';

import { 
  Table, 
  Button,  
  FormGroup,
} from 'reactstrap';

const API_BASE = 'http://localhost:3000';

function App() {
  const [todos, setTodos] = useState([]);
  const [activePopup, setActivePopup] = useState(false);
  const [novaMarca, setNovaMarca] = useState('');
  const [novoModelo, setNovoModelo] = useState('');
  const [novaVersao, setNovaVersao] = useState('');
  const [novoAno, setNovoAno] = useState('');
  const [novaQuilometragem, setNovaQuilometragem] = useState('');
  const [novaObservacao, setNovaObservacao] = useState('');

  useEffect(() => {
    GetTodos();  

    console.log(todos)
  }, [])

  const GetTodos = () => {
    fetch(API_BASE + '/anuncios')
      .then(res => res.json())
      .then(data => setTodos(data))      
      .catch(err => console.error(err))
  }

  const deleteTodo = async id => {
    await fetch(API_BASE + '/anuncios/delete/' + id, {
      method: "DELETE"});     

    const deletedTodo = todos.filter(todo => todo.id !== id)

    setTodos(deletedTodo)
  };

  const addTodo = async () => {
    const data = await fetch(API_BASE + '/anuncios', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        marca: novaMarca,
        modelo: novoModelo,
        versao: novaVersao,
        ano: novoAno,
        quilometragem: novaQuilometragem,
        observacao: novaObservacao,
      })
    }).then(res => res.json());

    setTodos([...todos, data]);
    setActivePopup(false);
    setNovaMarca('');
    setNovoModelo('');
    setNovaVersao();
    setNovoAno('');
    setNovaQuilometragem();
    setNovaObservacao();
  }

  return (
    <div className="App">
      <h1>WebMotors Anúncios!</h1>           

      <div className="todos">
        <Table className="table-bordered text-center">
          <thead className="thead-dark">
            <tr>
              <th>Marca</th>
              <th>Modelo</th>
              <th>Versão</th>
              <th>Ano</th>
              <th>Quilometragem</th>
              <th>Observação</th>
              <th>Ações</th>
              </tr>
          </thead>
            <tbody>
              { todos.map(product => (
                <tr key={product.id}>
                  <td>{product.marca}</td>
                  <td>{product.modelo}</td>
                  <td>{product.versao}</td>
                  <td>{product.ano}</td>
                  <td>{product.quilometragem}</td>
                  <td>{product.observacao}</td>                  
                  <td>
                    <Button color="info" size="sm" onClick={e => this.onEdit(product)}>Editar</Button>
                    <Button color="danger" size="sm" onClick={() => deleteTodo(product.id)}>Deletar</Button>
                  </td>
                </tr>
             ))}
                </tbody>
            </Table>         
      </div>   

      <div>
        <h2> Cadastro de Anúncios</h2>
        <form>
          <FormGroup>
            <label for="description">Marca:</label>
            <input type="text" onChange={e => setNovaMarca(e.target.value)} value={novaMarca}
            />
          </FormGroup>
          <FormGroup>
            <div className="form-row">
            <div className="col-md-8">
             <label for="price">Modelo:</label>
             <input type="text" onChange={e => setNovoModelo(e.target.value)} value={novoModelo} 
                 />
            </div>
            <div className="col-md-6">
              <label for="quantity">Versão:</label>
              <input type="text" onChange={e => setNovaVersao(e.target.value)} value={novaVersao} 
                />
            </div>
            <div className="col-md-6">
              <label for="quantity">Ano:</label>
              <input type="text" onChange={e => setNovoAno(e.target.value)} value={novoAno} 
                />
            </div>
            <div className="col-md-6">
              <label for="quantity">Quilometragem:</label>
              <input type="text" onChange={e => setNovaQuilometragem(e.target.value)} value={novaQuilometragem} 
                />
            </div>
            <div className="col-md-6">
              <label for="quantity">Observações:</label>
              <input type="text" onChange={e => setNovaObservacao(e.target.value)} value={novaObservacao} 
                />
            </div>
            </div>
          </FormGroup>
            <button color="primary" block onClick={addTodo}>Salvar</button>
        </form>
      </div>
{/* 
      {activePopup ? (
        <div className="popup">
          <div className="closePopup" onClick={() => setActivePopup(false)}>X</div>
          <div className="content">
            <h3>Add New Task</h3>
            <input 
              type="text"
              className="add-todo-input"
              onChange={e => setNovaMarca(e.target.value)}
              value={novaMarca}
            />
            <button className="button" onClick={addTodo}>Create Task</button>

          </div>

        </div>
      ) : ''} */}
    </div>
  );
}

export default App;

{/* <div key={task.id}>           

<div className="text">{task.marca}</div>
<div className="text">{task.modelo}</div>
<div className="text">{task.ano}</div>
<div className="text">{task.observacao}</div>
<div className="text">{task.versao}</div>
<div className="text">{task.quilometragem}</div>


<div className="delete-todo" onClick={() => deleteTodo(task.id)}>X</div> */}
{/* <div className="update-todo" onClick={() => deleteTodo(task.id)}>Update</div> */}
{/* // </div> */}