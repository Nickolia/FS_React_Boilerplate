import redis from 'redis';
const client = redis.createClient();

class User {
    constructor(user_email) {
        this.user_email = user_email;
        this.user = {};
    }

    getDefaultUser() {
        this.user = {
            notExist: true,
            email: '',
            name: '',
            photo: '',
        };
    }

    getUserInBase() {
        return new Promise((res) => {
            client.get(this.user_email, (user) => {
                if (user) {
                    this.user = user;
                } else {
                    this.getDefaultUser();
                }
                res();
            });
        });
    }

    getUser() {
        return new Promise((res) => {
            if (this.user_email) {
                this.getUserInBase().then(() => {
                    res(this.getData());
                });
            } else {
                this.getDefaultUser();
                res(this.getData());
            }
        });
    }

    getData() {
        return {
            notExist: this.user.notExist,
            name: this.user.name,
            photo: this.user.photo,
            email: this.user.email,

        };
    }

    static userVerification(req, res, next) {
        const user = new User(req.session.user_email);
        user.getUser().then((userData) => {
            req.currentUser = userData;
            next();
        });
    }
}

export default User;
