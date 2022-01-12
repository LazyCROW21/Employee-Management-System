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
    static logout() {
        return fetch(base_url+'/logout', {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                'Content-type': 'application/json'
            }
        });
    }
}

module.exports = AuthService;
