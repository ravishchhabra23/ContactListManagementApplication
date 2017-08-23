import {Injectable} from '@angular/core';

@Injectable()
export class RestApisService {
    loginUser: any = {
        'url': '/user/login', 'method': 'POST', 'headers': {}, 'data': null
    };

    logOutUser: any = {
        'url': '/user/logout', 'method': 'POST', 'headers': {}, 'data': null
    };

    registerUser: any = {
        'url': '/user/register', 'method': 'POST', 'headers': {}, 'data': null
    };

    loginAdmin: any = {
        'url': '/admin/login', 'method': 'POST', 'headers': {}, 'data': null
    };

    logOutAdmin: any = {
        'url': '/admin/logout', 'method': 'POST', 'headers': {}, 'data': null
    };

    getUsers: any = {
        'url': '/admin/user/details', 'method': 'GET', 'headers': {}, 'data': null
    };

    createUser: any = {
        'url': '/admin/user/create', 'method': 'POST', 'headers': {}, 'data': null
    };

    getUser: any = {
        'url': '/admin/user/', 'method': 'GET', 'headers': {}, 'data': null
    };

    editUser: any = {
        'url': '/admin/user/', 'method': 'PUT', 'headers': {}, 'data': null
    };

    deleteUser: any = {
        'url': '/admin/user/', 'method': 'DELETE', 'headers': {}, 'data': null
    };

    getUserContacts: any = {
        'url': '/user/contact/details', 'method': 'GET', 'headers': {}, 'data': null
    };

    createUserContact: any = {
        'url': '/user/contact/create', 'method': 'POST', 'headers': {}, 'data': null
    };

    getContactUser: any = {
        'url': '/user/contact/', 'method': 'GET', 'headers': {}, 'data': null
    };
    
    editUserContact: any = {
        'url': '/user/contact/', 'method': 'PUT', 'headers': {}, 'data': null
    };

    deleteUserContact: any = {
        'url': '/user/contact/', 'method': 'DELETE', 'headers': {}, 'data': null
    };
}
