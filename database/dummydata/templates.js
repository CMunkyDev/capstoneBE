let hardObj = {
    name: `hard_api`,
    resources: [
        {
            name: `widgets`,
            requiredFields: [],
            optionalFields: [],
            routes: [
                {
                    name: 'show',
                    method: 'GET',
                },
                {
                    name: 'index',
                    method: 'GET',
                },
                {
                    name: 'create',
                    method: 'POST',
                },
                {
                    name: 'update',
                    method: 'PUT',
                },
                {
                    name: 'update',
                    method: 'PATCH',
                },
                {
                    name: 'delete',
                    method: 'DELETE',
                }
            ]
        }
    ]
}

let medObj = {
    name: `med_api`,
    resources: [
        {
            name: `whizbangs`,
            requiredFields: [],
            optionalFields: [],
            routes: [
                {
                    name: 'show',
                    method: 'GET',
                },
                {
                    name: 'index',
                    method: 'GET',
                },
                {
                    name: 'create',
                    method: 'POST',
                },
                {
                    name: 'update',
                    method: 'PUT',
                },
                {
                    name: 'update',
                    method: 'PATCH',
                },
                {
                    name: 'delete',
                    method: 'DELETE',
                }
            ]
        }
    ]
}

let ezObj = {
    name: `ez_api`,
    resources: [
        {
            name: `doohickies`,
            requiredFields: [],
            optionalFields: [],
            routes: [
                {
                    name: 'show',
                    method: 'GET',
                },
                {
                    name: 'index',
                    method: 'GET',
                },
                {
                    name: 'create',
                    method: 'POST',
                },
                {
                    name: 'update',
                    method: 'PUT',
                },
                {
                    name: 'update',
                    method: 'PATCH',
                },
                {
                    name: 'delete',
                    method: 'DELETE',
                }
            ]
        }
    ]
}

module.exports = [
    ezObj,
    medObj,
    hardObj
]