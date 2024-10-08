import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Project from "../services/Project.js";

export const Report = () => {

    const {idProject} = useParams();

    const [reports, setReports] = useState([]);

    useEffect(() => {
        Project.getReport(idProject).then(response => {

            setReports(response.data);
        }).catch(error => {
            console.error("Fetch error: ", error);
        })
    }, [idProject]);

    return (
        <div>
            <div className='container text-lg-start'>
                <Link to={`/project/${idProject}`} className='btn btn-primary btn-lg '>Regresar</Link>
            </div>
            <h3>Reporte</h3>
            <table className='table mt-2'>
                <thead className='table-dark align-middle'>
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
                    {reports.map(report => (
                        <tr key={report.id}>
                            <td>{report.first_name}</td>
                            <td>{report.last_name}</td>
                            <td>{report.email}</td>
                            <td>{report.phone_number}</td>
                            <td>{report.assigned}</td>
                            <td>{report.pending}</td>
                            <td>{report.in_progress}</td>
                            <td>{report.complete}</td>
                            <td>
                                <Link to={`/tasks/details/${report.id}/${idProject}`} className='btn btn-warning'>Detalles</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}