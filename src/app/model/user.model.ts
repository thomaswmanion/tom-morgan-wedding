import { UserInfo } from './user-info.model';


export class User {
    userInfo: UserInfo;
    constructor(
        public email: string,
        public password: string
    ) {}
}
