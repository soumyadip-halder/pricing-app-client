import { Form, Modal, Container, Row, Col, Button } from 'react-bootstrap'
import { useState } from 'react'
import { connect } from 'react-redux'
import { getAllPrice } from '../redux/Actions/Pricing'

const FilterScreen = (props) => {
  const { setShow, getAllPrice } = props
  const [storeId, setStoreId] = useState('')
  const [sku, setSku] = useState('')
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [date, setDate] = useState('')

  const handleFilter = (e) => {
    e.preventDefault()
    let queryStr = ''
    if (storeId !== '') {
      queryStr = queryStr + `storeId=${storeId}&`
    }
    if (sku !== '') {
      queryStr = queryStr + `sku=${sku}&`
    }
    if (name !== '') {
      queryStr = queryStr + `name=${name}&`
    }
    if (price !== 0) {
      queryStr = queryStr + `price=${price}&`
    }
    if (date !== '') {
      queryStr = queryStr + `date=${date}&`
    }
    if (queryStr !== '') {
      queryStr = queryStr.slice(0, queryStr.length - 1)
    }
    getAllPrice(queryStr)
    setShow((p) => !p)
  }

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Filter fields</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Form>
            <strong>Enter Filter Criteria</strong>
            <Row>
              <Col>
                <div className="form-outline mb-3"></div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Store Id: </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="1234"
                    onChange={(e) => setStoreId(e.target.value)}
                    value={storeId}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>SKU: </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="23459394"
                    onChange={(e) => setSku(e.target.value)}
                    value={sku}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Product Name: </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Abcd"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Price greater than equal to: </Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="1200"
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Date greater than equal to: </Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="2022-07-01"
                    onChange={(e) => setDate(e.target.value)}
                    value={date}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          type="button"
          onClick={() => setShow((p) => !p)}
        >
          Close
        </Button>
        <Button variant="primary" type="button" onClick={handleFilter}>
          Filter
        </Button>
      </Modal.Footer>
    </>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllPrice: (params) => dispatch(getAllPrice(params)),
  }
}

export default connect(null, mapDispatchToProps)(FilterScreen)
