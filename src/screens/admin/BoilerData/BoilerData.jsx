import { useEffect, useState } from 'react';
import AdminHeader from '../AdminHeader/AdminHeader';
import { Box, TablePagination, TextField } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useGetAllBoilerDataQuery } from '../../../slices/boilerApiSlice';

const BoilerData = () => {
  const [boiler, setBoiler] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalRecords, setTotalRecords] = useState(0);
  const [date, setDate] = useState('');

  const [focus, setFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value));
    setPage(0);
  };
  const { data, isLoading } = useGetAllBoilerDataQuery({
    page: (page + 1).toString(),
    limit: rowsPerPage.toString(),
    date: date ? new Date(date).toISOString().split('T')[0] : '',
  });

  useEffect(() => {
    if (data) {
      setBoiler(data.data);
      setTotalRecords(data.totalDocuments);
    }
  }, [data]);

  const columns = [
    {
      field: 'time',
      headerName: 'Time',
      filterable: false,
      flex: 1,
      align: 'center',
    },
    {
      field: 'steamPressure',
      headerName: 'Steam Pressure',
      flex: 1,

      align: 'center',
    },
    {
      field: 'mainValveControls',
      headerName: 'Main Valve Controls',
      flex: 1,
      align: 'center',
    },
    { field: 'feedPump1', headerName: 'Feed Pump 1', flex: 1, align: 'center' },
    { field: 'feedPump2', headerName: 'Feed Pump 2', flex: 1, align: 'center' },
    {
      field: 'waterLevel',
      headerName: 'Water Level',
      flex: 1,
      align: 'center',
    },
  ];

  // Specify a custom id generator using the getRowId prop
  const getRowId = (row) => row._id;

  return (
    <>
      <Box
        display='flex'
        width='100%'
        alignItems='center'
        justifyContent='center'
        sx={{ mt: '70px' }}
      >
        <AdminHeader />
        <div style={{ width: '90%', display: 'flex', flexDirection: 'column' }}>
          <DataGrid
            sx={{
              '& .MuiDataGrid-columnHeaderTitleContainer': {
                justifyContent: 'center',
              },
            }}
            rows={boiler}
            hideFooter
            columns={columns}
            loading={isLoading}
            autoHeight
            disableSelectionOnClick
            getRowId={getRowId}
            slots={{ toolbar: GridToolbar }}
          />
          <Box
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            marginTop='10px'
          >
            <TextField
              onFocus={onFocus}
              onBlur={onBlur}
              onChange={(e) => {
                setDate(e.target.value);
                if (e.target.value) setHasValue(true);
                else setHasValue(false);
              }}
              label='Date'
              type={hasValue || focus ? 'date' : 'text'}
              value={date}
            />

            <TablePagination
              component='div'
              rowsPerPageOptions={[5, 10, 15]}
              count={totalRecords}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Box>
        </div>
      </Box>
    </>
  );
};

export default BoilerData;
