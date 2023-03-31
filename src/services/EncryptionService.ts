import { AES, enc as Encoding } from 'crypto-js';

const key = "";

interface IEncryptionService {
    encrypt: (value: string) => string;
    decrypt: (value: string) => string;
};

const encrypt = (value: string): string => AES.encrypt(value, key).toString();

const decrypt = (value: string): string => AES.decrypt(value, key).toString(Encoding.Utf8);

const EncryptionService: IEncryptionService = { encrypt, decrypt };

export default EncryptionService;