export const Report = () => {

    function showDetails() {
        alert("detalles");
    }

    return (
        <div>
            <h3>Reporte</h3>
            <table>
                <thead>
                    <tr>
                        <th>Nombre(s)</th>
                        <th>Apellido paterno</th>
                        <th>Apellido materno</th>
                        <th>Teléfono</th>
                        <th>Asignadas</th>
                        <th>Pendientes</th>
                        <th>En progreso</th>
                        <th>Completas</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td>un nombre</td>
                    <td>un paterno</td>
                    <td>un materno</td>
                    <td>un cel</td>
                    <td>un asignadas</td>
                    <td>un pendiente</td>
                    <td>un en progreso</td>
                    <td>un completa</td>
                    <td><button onClick={showDetails}>Detalles</button></td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}