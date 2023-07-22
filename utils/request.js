class Request {
    defaultParams = {
        headers: {
            "Content-Type": "application/json"
        }
    }

    async generateReturnValue(res) {
        const data = {
            code: res.status,
            text: res.statusText,
            body: await res.json(),
        }

        if (res.status >= 400) {
            return {
                status: 'error',
                ...data
            }
        }

        return {
            status: 'success',
            ...data
        }
    }

    async get(url, params = {}) {
        const res = await fetch(url, {
            ...this.defaultParams,
            ...params
        });

        return this.generateReturnValue(res)
    }

    async post(url, body, params = {}) {
        const res = await fetch(url, {
            method: "POST",
            body: JSON.stringify(body),
            ...this.defaultParams,
            ...params
        });

        return this.generateReturnValue(res);
    }
}

const RequestInstance = new Request();

export default RequestInstance;
