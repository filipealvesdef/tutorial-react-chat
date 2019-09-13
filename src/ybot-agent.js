import uuid from 'uuid/v1';

class YBotAgent {
    constructor(endpoint) {
        this.endpoint = endpoint;
        this.userid = uuid();
    }

    sendMessage(msg) {
        const params = new URLSearchParams({
            question: msg,
            userid: this.userid,
        });
        return fetch(this.endpoint + '?' + params).then(
            r => r.json()
        ).then( r => {
            const [response, status] = r;
            return status === 200 ? [response.response.answer] : [];
        });
    }
}

export default YBotAgent;
