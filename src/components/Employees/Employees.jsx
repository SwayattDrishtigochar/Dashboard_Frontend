import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { useGetApprovedUsersQuery } from '../../slices/api/adminApiSlice';
import { useSelector, useDispatch } from 'react-redux';
import { setApproved } from '../../slices/requestSlice';
import { DataGrid } from '@mui/x-data-grid';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  IconButton,
  Skeleton,
} from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';

import { useMediaQuery } from '@mui/material';
import EmployeeCard from '../EmployeeCard/EmployeeCard';

const Employees = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const [rows, setRows] = useState([]);
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { data: employees, isFetching } = useGetApprovedUsersQuery(
    userInfo.company,
    {
      refetchOnMountOrArgChange: true,
    }
  );

  useEffect(() => {
    if (employees) {
      setRows(employees);
    }
  }, [employees]);

  const columns = [
    {
      field: 'fname',
      headerName: 'Name',
      align: 'center',
    },
    {
      field: 'email',
      headerName: 'Email',
      align: 'center',
      flex: 1,
    },
    {
      field: 'role',
      headerName: 'Role',
      align: 'center',
      flex: 1,
    },

    {
      field: 'phone',
      headerName: 'Phone Number',
      align: 'center',
      flex: 1,
    },
    {
      field: 'createdAt',
      headerName: 'Date Joined',
      align: 'center',
      flex: 1,
    },
    { field: 'lastLogin', headerName: 'Last Login', align: 'center', flex: 1 },
  ];

  const getRowId = (row) => row._id;

  return (
    <>
      <Box
        sx={{ pt: 2, background: '#fefefe' }}
        // border='1px solid black'
        borderRadius='20px'
      >
        <Typography variant='h6' gutterBottom>
          Employees
        </Typography>

        <DataGrid
          loading={isFetching}
          sx={{
            '& .MuiDataGrid-columnHeaderTitleContainer': {
              justifyContent: 'center',
            },
            display: isMobile ? 'none' : 'block',
          }}
          rows={rows}
          hideFooter
          columns={columns}
          autoHeight
          disableSelectionOnClick
          getRowId={getRowId}
          slots={{
            loadingOverlay: LinearProgress,
          }}
          // slots={{ toolbar: GridToolbar }}
        />
        <Grid
          container
          spacing={1}
          sx={{ display: isMobile ? 'block' : 'none' }}
        >
          {employees?.map((employee) => (
            <Grid item key={employee._id} xs={12} sm={6} md={4} lg={2}>
              <EmployeeCard employee={employee} isFetching={isFetching} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Employees;
