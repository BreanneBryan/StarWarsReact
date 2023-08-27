import { useState } from 'react'
import Button from "./Button.tsx"
import Modal from "./Modal"
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';


const columns: GridColDef[] = [
    { field: 'id', headerName: "ID", width: 90},
    { field: 'name', headerName: "Name", flex: 1},
    { field: 'rarity', headerName: "Rarity", flex: 1},
    { field: 'size', headerName: "Size", flex: 1}

]


function DataTable() {
    let [ open, setOpen ] = useState(false);
    const { contactData, getData } = useGetData();
    const [ selectionModel, setSelectionModel ] = useState<string[]>([])

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
        server_calls.delete(selectionModel[0]);
        getData();
        console.log(`Selection model: ${selectionModel}`)
        setTimeout( () => {window.location.reload()}, 500)
    }
    
  return (
    <>
        <Modal 
            id={selectionModel}
            open={open}
            onClose={handleClose}
        />
        <div className="flex flex-row">
            <div>
                <button
                    className="p-3 bg-yellow-300 rounded m-3 hover:bg-slate-800 hover:text-white"
                    onClick={() => handleOpen()}
                >
                    Add to Wish List
                </button>
            </div> 
            <Button onClick={handleOpen} className="p-3 bg-yellow-300 rounded m-3 hover:bg-slate-800 hover:text-white" >Update</Button>
            <Button onClick={deleteData} className="p-3 bg-yellow-300 rounded m-3 hover:bg-slate-800 hover:text-white" >Delete</Button>
        </div>
        <div className={ open ? "hidden" : "container mx-10 my-5 flex flex-col"}
            style={{ height: 400, width: '100%'}}
        >
            <h2 className="p-3 bg-yellow-300 my-2 rounded">Welcome to My Wish List for Star Wars miniture collection. </h2>
            <DataGrid
             rows={contactData} 
             columns={columns} 
            checkboxSelection={true} 
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

export default DataTable