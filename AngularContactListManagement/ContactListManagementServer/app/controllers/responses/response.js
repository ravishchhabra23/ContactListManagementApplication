exports.structure = {
    success: {
        status: 'success',
        result: null,
        code:200,
        message: 'Success'
    },
    faildata: {
        status: 'failed',
        result: null,
        code:400,
        message: 'Error while fetching data'
    },
    error: {
        status: 'error',
        result: null,
        code:500,
        message: 'There was an error during processing request'
    },
    authenticationerror: {
        status: 'error',
        code:401,
        result: null,
        message: 'There was an error while authenticating'
    },
    invalidrequest: {
        status: 'error',
        code:101,
        result: null,
        message: 'Invalid request'
    },
    tokenexpired: {
        status: 'token',
        result: null,
        message: 'Token is expired'
    },
    unauthorized: {
        status: 'error',
        code:403,
        result: null,
        message: 'Unauthorized request'
    },
    userexits: {
        status: 'error',
        result: null,
        message: 'User already exits'
    }
}
