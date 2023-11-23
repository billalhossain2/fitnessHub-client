import React from 'react'
import ProductItem from './ProductItem'
import { Grid } from '@mui/material'

const Products = () => {
  return (
    <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
        <ProductItem></ProductItem>
        <ProductItem></ProductItem>
        <ProductItem></ProductItem>
        <ProductItem></ProductItem>
        <ProductItem></ProductItem>
        <ProductItem></ProductItem>
    </Grid>
  )
}

export default Products