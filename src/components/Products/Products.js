import React from 'react';
import Grid from '@mui/material/Grid';
import Product from './Product/Product';

import useStyles from './styles'

const products = [
    {id: 1, name: 'Shoes', description: 'Running shoes', price: '$5', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzjxphP5tzHlG0MnR6oFQlUrdqzcZ0vK__yQ&usqp=CAU'},
    {id: 2, name: 'Macbook', description: 'Apple macbook', price:'$10', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzjxphP5tzHlG0MnR6oFQlUrdqzcZ0vK__yQ&usqp=CAU'}
]

const Products = () => {
  const classes = useStyles();
    return(
      <main className={classes.content}>
      <div className={classes.toolbar} />
          <Grid container justify='center' spacing={4}>
            {products.map(product => {
               return(
                   <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                      <Product product={product} />
                   </Grid>
               )
            })}
          </Grid>
      </main>
    )
}

export default Products