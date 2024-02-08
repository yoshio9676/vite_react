import { FC, useState } from "react"
import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

interface LocationSearchProps {
    onSearch: (search: string) => void;
}

export const LocationSearch: FC<LocationSearchProps> = ({onSearch}) => {
    const [locationSearch, setLocationSearch] = useState<string>('');
    const disabledSearch = locationSearch.trim() === '';

    const addLocation = () => {
        onSearch(locationSearch);
        setLocationSearch('');
    }

    return (
        <Box>
            <TextField
                fullWidth
                id="outlined-textarea"
                label="Add Location"
                placeholder="Location"
                onChange={e => setLocationSearch(e.target.value)}
                sx={{ mx:'auto', display:'block', mt:5, width:'80%' }}
            />
            <Button
                variant="contained"
                color="success"
                sx={{ display:'block', mt:1, width: '50%', mx:'auto' }}
                onClick={addLocation}
                disabled={disabledSearch}
            >Search</Button>
        </Box>
    )
}

export default LocationSearch;