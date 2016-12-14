import q from "q";
import CouchDbApi from "graphql-findme-db-api";

import connSettings from "../../conn-settings";

export default class ProfilService {
    constructor() {
        let connection = new CouchDbApi.Connection(connSettings);

        this.userDAO = new CouchDbApi.UserDAO(connection);
        this.profileDAO = new CouchDbApi.ProfileDAO(connection);
    }

    createProfile(profile) {
        return this.profileDAO.create(profile);
    }

    getProfile(profileId) {
        return this.profileDAO.findById(profileId);
    }

    findByLogin(login) {
        return this.profileDAO.findByLogin(login);
    }

    findById(profileId) {
        return this.profileDAO.findById(profileId);
    }

    linkProfile(userId) {
        let deferred = q.defer();

        this.profileDAO.findByUserId(userId)
            .then((data) => {
                if (data && data[0]) {
                    localStorage.setItem("sessionProfileId", data[0]._id);

                    deferred.resolve(data);
                } else {
                    deferred.reject("create user fail");
                }
            })
            .catch(deferred.reject);

        return deferred.promise;
    }

    findProfileByUserId(userId) {
        return this.profileDAO.findByUserId(userId);
    }

    updateProfile(profile) {
        return this.profileDAO.update(profile);
    }

    remove(profile) {
        return this.profileDAO.remove(profile);
    }

    getAdminRight(userId) {
        return this.userDAO.findById(userId);
    }
}
