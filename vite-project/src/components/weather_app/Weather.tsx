import React, { useState } from "react";
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import LocationSearch from "./LocationSearch";
import LocationTable from "./LocationTable";

export const Weather = () => {
    // states
    const [locations, setLocations] = useState<string[]>(['Japan', 'China']);
    const addLocation = (location: string) => setLocations([location, ...locations]);

    // component
    return (
        <>
            <Box sx={{ py:3, px:1 }}>
                <Typography variant="h1" fontSize={40} fontWeight={500}>Weather App</Typography>
                <LocationSearch
                    onSearch={addLocation}
                />
                <LocationTable
                    locations={locations}
                />
            </Box>
        </>
    )
}

export default Weather;