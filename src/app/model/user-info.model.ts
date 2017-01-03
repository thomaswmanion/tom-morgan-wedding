import { UserKey } from './user-key.model';

export class UserInfo {
    constructor(
        public name: string,
        public key: UserKey
    ) {}
}