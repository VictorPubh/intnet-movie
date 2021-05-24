export const getStorage = (key: string) => {
    if (typeof window !== "undefined") {
        return window.localStorage.getItem(key) || null
    }
}

export const getMovies = () => {
    const storage = getStorage('movies')
    if(storage) {
        return storage
            .split('|')
            .map((m) => {
                return JSON.parse(m)
            })
    } else {
        return []
    }
}

export const setStorage = (key: string, value: any) => {
    if (typeof window !== "undefined") {
        window.localStorage.setItem(key, value)
    }
}