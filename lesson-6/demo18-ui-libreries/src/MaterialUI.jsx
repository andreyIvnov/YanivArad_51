/* https://mui.com/material-ui/getting-started/installation */
// npm install @mui/material @emotion/react @emotion/styled
// npm install @mui/icons-material

import { useState, useEffect } from 'react';
import axios from 'axios';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import CardActionArea from '@mui/material/CardActionArea';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';


const MOVIES_URL = 'https://api.tvmaze.com/shows';

const MaterialUI = () => {
  const [movies, setMovies] = useState([]);
  const [showTable, setShowTable] = useState(false);
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(MOVIES_URL);
      setMovies(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <Stack spacing={2} direction='row'>
        <Button
          variant='contained'
          color='success'
          size='large'
          startIcon={
            <>
              <DeleteIcon />
              <SendIcon />
            </>
          }
          onClick={() => setShowTable(!showTable)}
        >
          {showTable ? 'Hide' : 'Show'}
        </Button>
        <Button
          variant='outlined'
          color='secondary'
          size='large'
          endIcon={<SendIcon />}
          onClick={() => setShowCards(!showCards)}
        >
          Cards
        </Button>
      </Stack>
      <Button
        variant='outlined'
        color='primary'
        // https://mui.com/system/getting-started/the-sx-prop/
        sx={{
          width: '150px',
          height: '50px',
          color: 'error.main',
          fontWeight: 'bold',
          borderRadius: '25px',
          fontSize: '18px',
          mt: '15px',
          mb: '5px',
        }}
        href='https://www.google.com/'
      >
        Google
      </Button>
      <IconButton color='primary' aria-label='add to shopping cart'>
        <AddShoppingCartIcon />
      </IconButton>

      {/* Table */}
      {showTable && (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align='center'>Name</TableCell>
                <TableCell align='center'>Language</TableCell>
                <TableCell align='center'>Premiered Year</TableCell>
                <TableCell align='center'>Rating Average</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {movies.map((movie) => (
                <TableRow
                  key={movie.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 3 } }}
                >
                  <TableCell component='th' scope='row'>
                    {movie.id}
                  </TableCell>
                  <TableCell align='center'>{movie.name}</TableCell>
                  <TableCell align='center'>{movie.language}</TableCell>
                  <TableCell align='center'>{movie.premiered}</TableCell>
                  <TableCell align='center'>{movie.rating.average}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {/* Cards */}
      {showCards &&
        movies.map((movie) => {
          return (
            <Card key={movie.id} sx={{ minWidth: 250,maxWidth: 500, mb: 2 }}>
              <CardHeader
                avatar={
                  <Avatar
                    sx={{ bgcolor: red[500], color: 'cyan' }}
                    aria-label='recipe'
                  >
                    R
                  </Avatar>
                }
                title={movie.name}
                subheader={movie.premiered}
              />
              <CardActionArea>
                <CardMedia
                  component='img'
                  image={movie.image.medium}
                  alt={`${movie.name}'s image`}
                />
              </CardActionArea>
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  Language: {movie.language}
                </Typography>
                <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                  Rating Average: {movie.rating.average}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <Button size='small'>Learn More</Button>
                <IconButton aria-label='add to favorites' color='secondary'>
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label='share'>
                  <ShareIcon />
                </IconButton>
              </CardActions>
            </Card>
          );
        })}
    </>
  );
};

export default MaterialUI;
