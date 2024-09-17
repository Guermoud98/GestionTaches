import React, { useState } from 'react';
import api from '../api';

function UpdateTask() {
    const [taskId, setTaskId] = useState(''); // ID de la tâche à mettre à jour
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const submit = async (event) => {
        event.preventDefault();

        try {
            await api.put(`http://localhost:8080/api/task/${taskId}`, { title, description }); // Met à jour la tâche via l'API
            alert('Tâche mise à jour avec succès');
        } catch (error) {
            console.error('Erreur lors de la mise à jour de la tâche:', error);
            alert('Erreur lors de la mise à jour');
        }
    };

    return (
        <div>
            <h1>Mettre à jour une tâche</h1>
            <form onSubmit={submit}>
                <div>
                    <label>ID de la tâche</label>
                    <input
                        type="text"
                        value={taskId}
                        onChange={(e) => setTaskId(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Titre</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Mettre à jour</button>
            </form>
        </div>
    );
}

export default UpdateTask;
