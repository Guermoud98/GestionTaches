import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';  

function GetTaskById() {
    const [task, setTask] = useState(null);
    const { id } = useParams();  // Récupère l'id de l'URL

    useEffect(() => {
        axios.get(`http://localhost:8080/api/task/${id}`)  // Appel à l'API
            .then(response => setTask(response.data))
            .catch(error => console.error('Erreur:', error));
    }, [id]);

    if (!task) {
        return <div>Chargement...</div>;
    }

    return (
        <div>
            <h1>Détails de la tâche</h1>
            <p><strong>ID :</strong> {task.id}</p>
            <p><strong>Titre :</strong> {task.title}</p>
            <p><strong>Description :</strong> {task.description}</p>
        </div>
    );
}

export default GetTaskById;
