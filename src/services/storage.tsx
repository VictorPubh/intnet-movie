export const getStorage = (key: string) => {
    if (typeof window !== "undefined") {
        return window.localStorage.getItem(key) || null
    }
}

export const setStorage = (key: string, value: number[]) => {
    if (typeof window !== "undefined") {
        window.localStorage.setItem(key, value)
    }
}