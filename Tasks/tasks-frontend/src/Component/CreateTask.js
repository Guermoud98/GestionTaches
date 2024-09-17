import React, { useState } from 'react';
import api from '../api';

function CreateTask() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const submit = async (event) => {
        event.preventDefault();

        try {
            await api.post('', { title, description });
            alert('Tâche créée avec succès');
        } catch (error) {
            console.error('Erreur lors de la création de la tâche:', error);
        }
    };

    return (
        <div>
            <h1>Créer une nouvelle tâche</h1>
            <form onSubmit={submit}>
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
                <button type="submit">Créer</button>
            </form>
        </div>
    );
}

export default CreateTask;
