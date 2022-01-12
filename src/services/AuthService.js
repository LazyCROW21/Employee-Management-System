const base_url = 'http://localhost:5000/auth';

class AuthService {
    static login(data) {
        return fetch(base_url+'/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    }
}

module.exports = AuthService;
