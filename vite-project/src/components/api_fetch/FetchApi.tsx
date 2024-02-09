import useUser, {useUserType, UserType} from "../utils/featchUser";
import {
    TableContainer,
    Table,
    TableBody,
    TableHead,
    TableRow,
    TableCell,
    Paper
} from "@mui/material";
export const FetchApi = () => {
    const res: useUserType = useUser("https://jsonplaceholder.typicode.com/posts");

    if (res.isError) {
        return (
            <div>Error</div>
        )
    }
    if (res.isLoading) {
        return (
            <div>Loading</div>
        )
    }
    console.log(res.data);

    const userArr: UserType[] | [] = res.data ?? [];

    return (
        <>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>UserId</TableCell>
                            <TableCell>Title</TableCell>
                            <TableCell>Body</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {userArr.map((user) => {
                            return (
                                <TableRow key={user.id}>
                                    <TableCell>{user.id}</TableCell>
                                    <TableCell>{user.userId}</TableCell>
                                    <TableCell>{user.title}</TableCell>
                                    <TableCell>{user.body}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default FetchApi;