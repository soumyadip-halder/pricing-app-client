import { useState, useEffect } from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import moment from 'moment'
import { connect } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import { getAllPriceById, patchPriceFunc } from '../redux/Actions/Pricing'

const PriceUpdate = (props) => {
  const { id } = useParams()
  const history = useHistory()
  const {
    oneprice,
    isLoading,
    errorMessage,
    getAllPriceById,
    patchPriceFunc,
    patched,
  } = props
  const [storeId, setStoreId] = useState('')
  const [sku, setSku] = useState('')
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [date, setDate] = useState('')

  useEffect(() => {
    getAllPriceById(id, null)
  }, [id])

  useEffect(() => {
    setStoreId(oneprice.storeId)
    setSku(oneprice.sku)
    setName(oneprice.name)
    setPrice(oneprice.price)
    setDate(oneprice.date)
  }, [oneprice])

  useEffect(() => {
    if (patched) {
      history.goBack()
    }
  }, [patched])

  if (isLoading) {
    return <div>Loading....</div>
  }

  if (errorMessage !== '') {
    return <div className="text-danger">{errorMessage}</div>
  }

  return (
    <Container>
      <Form>
        <strong>Product Update Form</strong>
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
              <Form.Label>Price: </Form.Label>
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
              <Form.Label>Date: </Form.Label>
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
      <Row>
        <Col>
          <Button
            variant="primary"
            type="button"
            onClick={() =>
              patchPriceFunc({ storeId, sku, name, price, date }, id)
            }
          >
            Save and Exit
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

const mapStateToProps = (state) => {
  return {
    oneprice: state.pricingReducer.oneprice,
    isLoading: state.pricingReducer.isLoading,
    errorMessage: state.pricingReducer.errorMessage,
    patched: state.pricingReducer.patched,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllPriceById: (id, params) => dispatch(getAllPriceById(id, params)),
    patchPriceFunc: (req, id) => dispatch(patchPriceFunc(req, id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PriceUpdate)
