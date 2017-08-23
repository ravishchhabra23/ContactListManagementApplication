import {Injectable} from '@angular/core';

@Injectable()
export class ApiConfigService {

    apiConfig: any = {
        'domain': 'http://localhost:',
        'port': '7001'
    };

    apiServerUrl: string = this.apiConfig.domain + this.apiConfig.port;

}
