import SecureStorage from 'expo-secure-store';

export interface AuthModel { key: string };

export const AuthKeys = { key: 'key' };

export interface IStoreService {
    isEnabled: () => void;
    save: (value: string) => void;
    read: () => void;
    clear: () => void;
    isLoggedIn: () => void;
}

const isEnabled = (): Promise<boolean> => SecureStorage.isAvailableAsync();

const save = (value: string) => SecureStorage.setItemAsync(AuthKeys.key, value);

const read = () => SecureStorage.getItemAsync(AuthKeys.key);

const clear = () => SecureStorage.deleteItemAsync(AuthKeys.key);

const isLoggedIn = async () => (await read()) != null;

const StoreService: IStoreService = { isEnabled, save, read, clear, isLoggedIn };

export default StoreService;