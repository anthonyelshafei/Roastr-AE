import axios from "axios";
// import filterParams from "./filterParams";

export default {
    // Adds a user to the database
    addUser: function(userData) {
        return axios.post("/api/users", userData);
    },
    // Deletes the user with the given id
    deleteUser: function(id) {
        return axios.delete("/api/users/" + id);
    },
    // Gets the user with the given id
    getUser: function(id) {
        return axios.get("/api/users/" + id);
    },

    getByName: function(name) {
        return axios.get("/api/users/user/" + name)
    },

    findRecipient: function(name) {
        return axios.get("/api/users/recipient/" + name)
    },
    // Gets all users
    getUsers: function() {
        return axios.get("/api/users");
    },
    // Adds an roast to the database
    addRoast: function(roastData) {
        return axios.post("/api/roasts", roastData);
    },
    // Deletes the roast with the given id
    deleteRoast: function(id) {
        return axios.delete("/api/roasts/" + id);
    },
    // Gets the roast with the given id
    getRoast: function(id) {
        return axios.get("/api/roasts/" + id);
    },
    // Gets all roasts
    getRoasts: function() {
        return axios.get("/api/roasts");
    },
    getPendings: function(name) {
        return axios.get("/api/roasts/users/pending/" + name)
    },
    getInbox: function(name) {
        return axios.get("api/roasts/users/inbox/" + name)
    }
};