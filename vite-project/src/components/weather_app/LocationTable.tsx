import React, { FC } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";

interface LocationTableProps {
    locations: string[]
}

export const LocationTable: FC<LocationTableProps> = ({locations}) => {
    return (
        <Box mt={5} px={3}>
            <Typography variant="h2" fontSize={30}>Locations</Typography>
            <Box mt={2}>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Name</TableCell>
                                <TableCell align="left">Weather</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {locations.map((location, index) => {
                                return (
                                    <TableRow key={index}>
                                        <TableCell component="td" align="center">{location}</TableCell>
                                        <TableCell component="td" align="center">Rain</TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    )
}

export default LocationTable;