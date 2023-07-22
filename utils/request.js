class Request {
    defaultParams = {
        headers: {
            "Content-Type": "application/json"
        }
    }

    async get(url, params = {}) {
        const resRaw = await fetch(url, {
            ...this.defaultParams,
            ...params
        });

        return await resRaw.json();
    }

    async post(url, body, params) {
        const resRaw = await fetch(url, {
            method: "POST",
            body: JSON.stringify(body),
            ...this.defaultParams,
            ...params
        })

        return await resRaw.json();
    }
}

const RequestInstance = new Request();

export default RequestInstance;
