import useSWR from "swr";

export interface useUserType {
    data: UserType[] | undefined,
    isError: boolean,
    isLoading: boolean
}

export interface UserType {
    id: number,
    userId: number,
    title: string,
    body: string
}
export const fetcher = (url: string): Promise<UserType[]> => fetch(url).then(res => res.json());

export const useUser = (url: string): useUserType => {
    const {data, error, isLoading} = useSWR(url, fetcher)
    
    return {
        data,
        isError: error,
        isLoading
    }
}

export default useUser;