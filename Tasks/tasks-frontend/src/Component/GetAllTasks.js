import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Utilisation directe d'Axios

function GetAllTasks() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:8080/api/task/get-all-tasks') // endpoint backend
            .then(response => {
                setTasks(response.data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Chargement des tâches...</p>;
    }

    return (
        <div>
            <h1>Liste des tâches</h1>
            <ul>
                {tasks.length === 0 ? (
                    <p>Aucune tâche disponible</p>
                ) : (
                    tasks.map((task) => (
                        <li key={task.id}>
                            {task.title} - {task.description}
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
}

export default GetAllTasks;
