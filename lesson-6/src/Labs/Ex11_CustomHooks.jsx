import { useState } from "react"
import useFetch from "../hooks/useFetch"
import useMinimalFetch from "../hooks/useMinimalFetch";
const USERS_ENDPOINT = "https://jsonplaceholder.typicode.com/users";

import { Paper } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid";

function Ex11_CustomHooks() {
    const users = useFetch(USERS_ENDPOINT);
    // const users = useMinimalFetch(USERS_ENDPOINT)

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 180 },
        { field: 'email', headerName: 'Email', width: 180 },
        {
            field: 'city',
            headerName: 'City',
            width: 150,
            valueGetter: (value, row) => `${row.address?.city}`
        },
    ];

    const paginationModel = { page: 0, pageSize: 5 };


    return (
        <>
            <div>
                Ex11_CustomHooks
            </div>
            {console.log(users)}
            {users && users.length > 0 &&
                // <ul style={{ textAlign: 'left' }}>
                //     {users.map(user => {
                //         return (
                //             <li key={user.id}>
                //                 <Stack direction="row" spacing={2}>
                //                     {/* <Button
                //                         variant="contained"
                //                         color="success"
                //                         size="small"
                //                         endIcon={<Add />}
                //                     >
                //                     </Button> */}
                //                     <IconButton color="primary" aria-label="add to shopping cart">
                //                         <AddShoppingCartIcon/>
                //                     </IconButton>
                //                     <div>
                //                         ID: {user.id}
                //                     </div>
                //                     <div>
                //                         Name: {user.name}
                //                     </div>
                //                 </Stack>
                //             </li>
                //         )
                //     })}
                // </ul>
                <Paper sx={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={users}
                        columns={columns}
                        initialState={{ pagination: { paginationModel } }}
                        pageSizeOptions={[5, 10]}
                        checkboxSelection
                        sx={{ border: 0 }}
                    />
                </Paper>
            }
        </>
    )
}

export default Ex11_CustomHooks