import axios from 'axios';
import React, { Component } from 'react';

const endpoint = "http://localhost:9000";
const urlencoded = {
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
    },
}
class NoteAppService {

    createNote(task) {
        return axios.post(endpoint + '/api/task', task, urlencoded);
    }

    getNote() {
        return axios.get(endpoint + '/api/task');
    }

    updateNote(id) {
        return axios.put(endpoint + '/api/task/' + id,
            urlencoded);
    }

    undoNote(id) {
        return axios.put(endpoint + '/api/undoTask/' + id, urlencoded);
    }

    deleteNote(id) {
        return axios.delete(endpoint + '/api/deleteTask/' + id, urlencoded);
    }
    getNoteByUser(id) {
        return axios.get(endpoint + '/api/tasksByUser/' + id, urlencoded);
    }
    updateFullNote(id) {
        return axios.put(endpoint + '/api/updateTask/' + id, urlencoded);
    }

}
export default new NoteAppService()

