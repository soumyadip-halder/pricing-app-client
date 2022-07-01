import React from 'react'
import { Card } from 'react-bootstrap'
import { routes } from '../util/Constants'

const CardCatalogue = ({ name, price, sku, storeId, date, id }) => {
  const { DEFAULT, PATCH_PRICE_ID } = routes
  const newurl = PATCH_PRICE_ID.replace(':id', id)

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Product Name: {name}</Card.Title>
        <hr />
        <Card.Subtitle className="mb-2 text-muted">
          Product priced at Rs {price}
        </Card.Subtitle>

        <table style={{ width: '100%' }}>
          <tbody>
            <tr>
              <td>Name:</td>
              <td>{name}</td>
            </tr>
            <tr>
              <td>Store Id:</td>
              <td>{storeId}</td>
            </tr>
            <tr>
              <td>SKU:</td>
              <td>{sku}</td>
            </tr>
            <tr>
              <td>Price:</td>
              <td>Rs {price}</td>
            </tr>
            <tr>
              <td>Date:</td>
              <td>{date}</td>
            </tr>
          </tbody>
        </table>
        <hr />
        <Card.Link href={`${DEFAULT}${newurl}`}>Update Product</Card.Link>
      </Card.Body>
    </Card>
  )
}

export default CardCatalogue
