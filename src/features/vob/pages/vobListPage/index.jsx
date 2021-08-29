import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import React, { useEffect, useState } from 'react';
import vobApi from '../../../../api/vobApi';
import TablePaginationActions from '../../../../components/tablePaginationActions';

VobListPage.propTypes = {};

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function VobListPage(props) {
  const classes = useStyles();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [listData, setListData] = useState([]);
  const [totalData, setTotalData] = useState(0);

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, totalData - page * rowsPerPage);

  useEffect(() => {
    const fetchData = async () => {
      let params = {
        _page: page,
        _limit: -1, // in the current, get all data to FE and pagination is handled by FE
      };
      const apiResponse = await vobApi.getAll(params);
      if (apiResponse.isOk) {
        const apiData = apiResponse.data;
        setListData(apiData.listData);
        setTotalData(apiData.total);
      }
    };
    fetchData();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Paper>
      <TableContainer>
        <Table className={classes.table} aria-label="custom pagination table">
          <TableHead>
            <TableRow>
              <TableCell>Word</TableCell>
              <TableCell>Word Type</TableCell>
              <TableCell>Spelling</TableCell>
              <TableCell>Meaning</TableCell>
              <TableCell>Example</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? listData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : listData
            ).map((data) => (
              <TableRow key={data.id}>
                <TableCell component="th" scope="row">
                  {data.word}
                </TableCell>
                <TableCell>{data.wordTypeName}</TableCell>
                <TableCell>{data.spelling}</TableCell>
                <TableCell>{data.meaning}</TableCell>
                <TableCell>...</TableCell>
              </TableRow>
            ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={5} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        rowsPerPageOptions={[5, 10, 20, 30]}
        count={totalData}
        rowsPerPage={rowsPerPage}
        page={page}
        SelectProps={{
          inputProps: { 'aria-label': 'rows per page' },
          native: true,
        }}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        ActionsComponent={TablePaginationActions} // just a custom action. If you dont like -> remote this row
        style={{ display: 'flex', justifyContent: 'flex-end' }}
      />
    </Paper>
  );
}

export default VobListPage;
