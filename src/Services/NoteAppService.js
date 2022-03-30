import axios from 'axios';
import React, { Component } from 'react';
// const USER_API_BASE_URL = "http://localhost:5000/api";
const endpoint = "http://localhost:9000";

class NoteAppService {

    createNote(task) {
        return axios.post(endpoint + '/api/task', task, { headers: { "Content-Type": "application/x-www-form-urlencoded", }, });
    }

    getNote() {
        return axios.get(endpoint + '/api/task');
    }

    updateNote(id) {
        return axios.put(endpoint + '/api/task/' + id, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        });
    }

    undoNote(id) {
        return axios.put(endpoint + '/api/undoTask/' + id, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        });
    }

    deleteNote(id) {
        return axios.delete(endpoint + '/api/deleteTask/' + id, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        });
    }
    getNoteByUser(id) {
        return axios.get(endpoint + '/api/tasksByUser/' + id, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        });
    }
    updateFullNote(id) {
        return axios.put(endpoint + '/api/updateTask/' + id, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        });
    }

}
export default new NoteAppService()

