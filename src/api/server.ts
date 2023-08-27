const token = 'dfdff70a57893b'

export const server_calls = {
    get: async () => { 
        const response = await fetch(`https://starwarscoreset.onrender.com/api/coresets`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },

    create: async (data: any = {}) => {
        const response = await fetch(`https://starwarscoreset.onrender.com/api/coresets`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            throw new Error('Failed to create new data on the server')
        }

        return await response.json()
    },

    update: async (id: string, data:any = {}) => {
        const response = await fetch(`https://starwarscoreset.onrender.com/api/coresets/${id}`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)

        })

        if (!response.ok) {
            throw new Error('Failed to update data on the server')
        }

        return await response.json()
    },

    delete: async (id: string) => {
        const response = await fetch(`https://starwarscoreset.onrender.com/api/coresets/${id}`,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
        })

        if (!response.ok) {
            throw new Error('Failed to delete data from the server')
        }
        return;
    },
}

export const server_calls_wish = {
    get: async () => { 
        const response = await fetch(`https://starwarscoreset.onrender.com/api/wish`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },

    // create: async (data: any = {}) => {
    //     const response = await fetch(`http://127.0.0.1:5000/api/wish`,
    //     {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Access-Control-Allow-Origin': '*',
    //             'x-access-token': `Bearer ${token}`
    //         },
    //         body: JSON.stringify(data)
    //     })

    //     if (!response.ok) {
    //         throw new Error('Failed to create new data on the server')
    //     }

    //     return await response.json()
    // },

    // update: async (id: string, data:any = {}) => {
    //     const response = await fetch(`http://127.0.0.1:5000/api/wish/${id}`,
    //     {
    //         method: 'PUT',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Access-Control-Allow-Origin': '*',
    //             'x-access-token': `Bearer ${token}`
    //         },
    //         body: JSON.stringify(data)

    //     })

    //     if (!response.ok) {
    //         throw new Error('Failed to update data on the server')
    //     }

    //     return await response.json()
    // },

    // delete: async (id: string) => {
    //     const response = await fetch(`http://127.0.0.1:5000/api/wish/${id}`,
    //     {
    //     })

    //     if (!response.ok) {
    //         throw new Error('Failed to delete data from the server')
    //     }
    //     return;
    // },
}


