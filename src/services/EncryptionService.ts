import { AES, enc as Encoding } from 'crypto-js';

const key = "";

const encrypt = (value: string) => AES.encrypt(value, key).toString();

const decrypt = (value: string) => AES.decrypt(value, key).toString(Encoding.Utf8);

const EncryptionService = { encrypt, decrypt };

export default EncryptionService;