import { useState } from 'react'

import Modal from "./Modal"
import { server_calls_wish } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData_wish } from '../custom-hooks/FetchData';


const columns: GridColDef[] = [

    { field: 'name', headerName: "Name", flex: 1},
    { field: 'rarity', headerName: "Rarity", flex: 1},
    { field: 'size', headerName: "Size", flex: 1}

]

function Table() {
    let [ open, setOpen ] = useState(false);
    const { wishData, getData } = useGetData_wish();
    const [ selectionModel, setSelectionModel ] = useState<string[]>([])

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
        server_calls_wish.delete(selectionModel[0]);
        getData();
        console.log(`Selection model: ${selectionModel}`)
    }


  return (
    <>
        <Modal 
            id={selectionModel}
            open={open}
            onClose={handleClose}
        />
        
        <div className="flex flex-row">

        </div>
        <div className={ open ? "hidden" : "container mx-10 my-10 flex flex-col"}
            style={{ height: 600, width: '100%'}}
        >
            <h2 className="p-5 bg-yellow-300 my-3 rounded text-center">Rebels & Imperials Core Set Released in June 2007</h2>
            <DataGrid
             rows={wishData} 
             columns={columns} 
            onRowSelectionModelChange={ (item:any) => {
                setSelectionModel(item)
            }}
            componentsProps={{
                pagination: {
                    rowsPerPageOptions: [5]
                }
            }}
            />
        </div>
    </>
  )
}

export default Table