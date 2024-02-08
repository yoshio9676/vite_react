// material ui HP
// https://mui.com/

import React, {useState} from "react"
import { Button } from '@mui/material';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid'

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const MaterialUi = () => {
    const [page, setPage] = useState(1);
    const handlePageChange = (event, value) => {
        setPage(value);
    }
    return (
        <>
            <Stack direction={"row"} spacing={4} m={1}>
                <Button>text</Button>
                <Button variant="contained">contained</Button>
                <Button variant="outlined">outlined</Button>
            </Stack>

            <Box m={3}>
                <Button>Primary</Button>
                <Button disabled>Disabled</Button>
                <Button href="#text-buttons">Link</Button>
            </Box>

            <Box sx={{ textAlign: "center", my:1 }}>
                <Button variant="contained" sx={{ m:1 }}>Contained</Button>
                <Button variant="contained" sx={{ m:1 }} disabled>Disabled</Button>
                <Button variant="contained" sx={{ m:1 }} href="#contained-buttons">Link</Button>
            </Box>

            <Container sx={{ textAlign: "center" }}>
                <Button variant="contained" disableElevation>Disable elevation</Button>
            </Container>

            <Grid container justifyContent={"center"} m={1}>
                <Grid item xs={4} textAlign={"center"}>
                    <Button variant="outlined">Primary</Button>
                </Grid>
                <Grid item xs={4} textAlign={"center"}>
                    <Button variant="outlined">Primary</Button>
                </Grid>
                <Grid item xs={4} textAlign={"center"}>
                    <Button variant="outlined">Primary</Button>
                </Grid>
                <Grid item xs={4} textAlign={"center"}>
                    <Button variant="outlined">Primary</Button>
                </Grid>
                <Grid item xs={4} textAlign={"center"}>
                    <Button variant="outlined">Primary</Button>
                </Grid>
                <Grid item xs={4} textAlign={"center"}>
                    <Button variant="outlined">Primary</Button>
                </Grid>
                <Grid item xs={4} textAlign={"center"}>
                    <Button variant="outlined">Primary</Button>
                </Grid>
                <Grid item xs={4} textAlign={"center"}>
                    <Button variant="outlined">Primary</Button>
                </Grid>
                <Grid item xs={4} textAlign={"center"}>
                    <Button variant="outlined">Primary</Button>
                </Grid>
            </Grid>

            <Container>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ArrowDownwardIcon/>}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography>Accordion 1</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur elit.
                            Suspendisse melesuad lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon/>}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Typography>Accordion 2</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur elit.
                            Suspendisse melesuad lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion disabled>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Typography>Disabled Accordion</Typography>
                    </AccordionSummary>
                </Accordion>
            </Container>

            <Stack spacing={2}>
                <Pagination count={10000} showFirstButton showLastButton></Pagination>
                <Pagination count={1000} />
                <Pagination count={10} />
                <Pagination count={10} />
                <Pagination count={10} />
                <Pagination count={100} variant="outlined" />
                <Pagination count={100} variant="outlined" />
                <Pagination count={100} variant="outlined" />
                <Pagination count={100} variant="outlined" />
                <Pagination count={100} shape="rounded"/>
                <Pagination count={100} variant="outlined" shape="rounded"/>
                <Pagination count={100} size="small"/>
                <Pagination count={100} size="large" slot={{ color: "primary" }}/>
            </Stack>

            <Stack my={2}>
                <Pagination
                    count={10}
                    renderItem={(item) => {
                        <PaginationItem
                            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                            {...item}
                        />
                    }}
                />
            </Stack>

            <Stack my={4}>
                <Typography>Page: {page}</Typography>
                <Pagination
                    count={10}
                    page={page}
                    onChange={handlePageChange}
                ></Pagination>
            </Stack>
        </>
    )
}

export default MaterialUi;