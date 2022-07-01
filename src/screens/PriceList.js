import { useState, useEffect } from 'react'
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap'
import moment from 'moment'
import { connect } from 'react-redux'
import {
  getAllPrice,
  postPriceFunc,
  getAllPriceByUserid,
} from '../redux/Actions/Pricing'
import CardCatalogue from '../components/CardCatalogue'
import FilterScreen from '../components/FilterScreen'

const PriceList = (props) => {
  const [filename, setFilename] = useState('')
  const [show, setShow] = useState(false)
  const [actualfile, setActualFile] = useState()
  const {
    pricingList,
    isLoading,
    errorMessage,
    postPriceFunc,
    getAllPrice,
    getAllPriceByUserid,
    userId,
    uploadsuccess,
  } = props

  useEffect(() => {
    getAllPrice(null)
  }, [])

  const handleFileUpload = () => {
    const file = actualfile
    const reader = new FileReader()

    reader.onload = function (e) {
      setFilename('')
      const text = e.target.result
      const data = text.split('\n')
      const jsondata = []
      for (let i = 1; i < data.length; i++) {
        const col = data[i].split(',')
        if (
          col[0].trim() !== '' &&
          col[1].trim() !== '' &&
          col[2].trim() !== '' &&
          col[3].trim() !== '' &&
          col[4].trim() !== ''
        ) {
          const dt = moment(col[4].trim(), 'YYYY-MM-DD', true)
          if (dt.isValid() && !isNaN(col[3])) {
            const obj = {
              storeId: col[0],
              sku: col[1],
              name: col[2],
              price: Number(col[3]),
              date: col[4],
            }
            jsondata.push(obj)
          }
        }
      }
      console.log(jsondata)
      postPriceFunc(jsondata)
    }

    reader.readAsText(file)
  }

  if (isLoading) {
    return <div>Loading....</div>
  }

  if (errorMessage !== '') {
    return <div className="text-danger">{errorMessage}</div>
  }

  return (
    <>
      <Container className="mr-5">
        <Row>
          <Col xs={12} sm={8} className="mb-2">
            <div className="custom-file">
              <input
                type="file"
                accept=".csv"
                className="custom-file-input"
                id="inputGroupFile01"
                aria-describedby="inputGroupFileAddon01"
                onChange={(e) => {
                  setFilename(e.target.files[0].name)
                  setActualFile(e.target.files[0])
                }}
              />
              <label className="custom-file-label" htmlFor="inputGroupFile01">
                Choose file
              </label>
            </div>
          </Col>
          <Col xs={12} sm={4}>
            <Button
              className={filename === '' ? 'invisible' : 'visible'}
              onClick={handleFileUpload}
            >
              Upload
            </Button>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col xs={12} className="mb-2">
            {pricingList !== [] ? (
              <Button
                variant="primary"
                type="button"
                onClick={() => getAllPriceByUserid(userId, null)}
              >
                Click to view the products you have uploaded
              </Button>
            ) : null}
          </Col>
          <Col xs={12}>
            {pricingList !== [] ? (
              <Button
                variant="primary"
                type="button"
                onClick={() => setShow(true)}
              >
                Filter options
              </Button>
            ) : null}
          </Col>
          <Col xs={12}>
            {uploadsuccess ? (
              <Button
                variant="primary"
                type="button"
                onClick={() => getAllPrice(null)}
              >
                Click to view all
              </Button>
            ) : null}
          </Col>
        </Row>
        {pricingList !== [] ? (
          <>
            <br />
            <div>
              Showing: <strong>{pricingList.length}</strong> Products{' '}
              {uploadsuccess ? <strong>uploaded just now</strong> : null}
            </div>
            <br />
          </>
        ) : null}

        <Row>
          {pricingList !== []
            ? pricingList.map((price) => (
                <Col className="mb-2" key={price._id}>
                  <CardCatalogue
                    name={price.name}
                    sku={price.sku}
                    date={price.date}
                    storeId={price.storeId}
                    price={price.price}
                    id={price._id}
                  />
                </Col>
              ))
            : null}
        </Row>
      </Container>
      <Modal
        show={show}
        onHide={() => setShow((p) => !p)}
        backdrop="static"
        keyboard={false}
      >
        <FilterScreen setShow={setShow} />
      </Modal>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    pricingList: state.pricingReducer.pricingList,
    isLoading: state.pricingReducer.isLoading,
    errorMessage: state.pricingReducer.errorMessage,
    userId: state.loginReducer.userId,
    uploadsuccess: state.pricingReducer.uploadsuccess,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    postPriceFunc: (req) => dispatch(postPriceFunc(req)),
    getAllPrice: (params) => dispatch(getAllPrice(params)),
    getAllPriceByUserid: (userId, params) =>
      dispatch(getAllPriceByUserid(userId, params)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PriceList)
