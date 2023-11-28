
function CadastarFuncionario() {
    return (
        <div className="container">

            <div className="row m-1">
                <div className="col-3 alert alert-secondary m-2">
                    <div className="col-7">
                        <h5>Consultas Pendentes</h5>
                            <h1>2</h1>
                    </div>
                    <div className="col-12 alert alert-warning">Aguardando Pagamentos</div>
                </div>
                <div className="col-3 alert alert-danger m-2">
                    <div className="col-7">
                    <h5>Consultas de Hoje</h5>
                    <h1>4</h1>
                    </div>
                    <div className="col-12">Aguardando para Hoje</div>
                </div>
                <div className="col-3 alert alert-danger m-2">
                    <div className="col-7">
                    <h5>Auardando</h5>
                    <h1>4</h1>
                    </div>
                    <div className="col-12">Aguardando Atendimentos</div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h5>Proximas Consultas</h5>
                </div>
            </div>
          <div className="row">
            <div className="col">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </table>
            </div>

          </div>
        </div>
    )
}
export default CadastarFuncionario;