import React from 'react';
import { useParams } from 'react-router-dom'; // Importer useParams
import api from '../api'; // Assurez-vous que le chemin est correct

function DeleteTask() {
    const { id } = useParams(); // Récupérer l'ID depuis les paramètres de l'URL

    const handleDelete = async () => {
        try {
            await api.delete(`http://localhost:8080/api/task/${id}`); // Envoyer la requête DELETE
            alert('Tâche supprimée avec succès');
        } catch (error) {
            console.error('Erreur lors de la suppression de la tâche:', error);
            alert('Erreur lors de la suppression de la tâche');
        }
    };

    return (
        <div>
            <button onClick={handleDelete}>Supprimer la tâche</button>
        </div>
    );
}

export default DeleteTask;
