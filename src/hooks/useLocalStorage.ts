export default function useLocalStorage(key: string) {
    const get = () => {
        const value = window.localStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    };

    const set = (value: any) => {
        window.localStorage.setItem(key, JSON.stringify(value));
    };

    const remove = () => {
        window.localStorage.removeItem(key);
    };

    return {get, set, remove};
}