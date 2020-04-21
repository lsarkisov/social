import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import {
  Container,
  Row,
  Col,
  Dropdown,
  ButtonGroup,
  Button,
  Form,
} from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import { modelBookingInfo } from 'actions/model'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function IcDropDown(props) {
  const { value, items, callback } = props
  return (
    <Dropdown as={ButtonGroup} alignRight={true}>
      <Button variant="light">{value || 'select'}</Button>
      <Dropdown.Toggle split variant="primary" />
      <Dropdown.Menu className="super-colors">
        {items &&
          items.map((item, i) => (
            <Dropdown.Item key={i} onSelect={() => callback(item)} eventKey={i}>
              {item}
            </Dropdown.Item>
          ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default function ModelEditProfileBooking(props) {
  const [name, setName] = useState(null)
  const [startDate, setStartDate] = useState(null)
  const [gender, setGenger] = useState(null)
  const [age, setAge] = useState(null)
  const [hairColor, setHairColor] = useState(null)
  const [hairType, setHairType] = useState(null)
  const [eyeColor, setEyeColor] = useState(null)
  const [ethnicity, setEthnicity] = useState(null)
  const [country, setCountry] = useState(null)
  const [city, setCity] = useState(null)
  const [dressSizeEU, setDressSizeEU] = useState(null)
  const [shoeSizeEU, setShoeSizeEU] = useState(null)
  const [height, setHeight] = useState(null)

  const [languages, setLanguages] = useState([])
  const [categories, setCategories] = useState([])

  const { t } = useTranslation()

  const { bookingInfo } = useSelector((state) => state.modelBooking)
  const dispatch = useDispatch()

  useState(() => {
    if (!bookingInfo) {
      return false
    }

    Object.keys(bookingInfo).map((item, i) => {
      if (item === 'name') {
        setName(bookingInfo[item])
      }
      if (item === 'startDate') {
        setStartDate(bookingInfo[item])
      }
      if (item === 'gender') {
        setGenger(bookingInfo[item])
      }
      if (item === 'age') {
        setAge(bookingInfo[item])
      }
      if (item === 'hairColor') {
        setHairColor(bookingInfo[item])
      }
      if (item === 'hairType') {
        setHairType(bookingInfo[item])
      }
      if (item === 'eyeColor') {
        setEyeColor(bookingInfo[item])
      }
      if (item === 'ethnicity') {
        setEthnicity(bookingInfo[item])
      }
      if (item === 'country') {
        setCountry(bookingInfo[item])
      }
      if (item === 'city') {
        setCity(bookingInfo[item])
      }
      if (item === 'dressSizeEU') {
        setDressSizeEU(bookingInfo[item])
      }
      if (item === 'shoeSizeEU') {
        setShoeSizeEU(bookingInfo[item])
      }
      if (item === 'height') {
        setHeight(bookingInfo[item])
      }
      if (item === 'languages') {
        setLanguages(bookingInfo[item] || [])
      }
      if (item === 'categories') {
        setCategories(bookingInfo[item] || [])
      }
    })
  }, [bookingInfo])

  useEffect(() => {
    dispatch(
      modelBookingInfo({
        name,
        startDate:
          startDate && typeof startDate !== 'number'
            ? Date.parse(startDate)
            : startDate,
        gender,
        age,
        hairColor,
        hairType,
        eyeColor,
        ethnicity,
        country,
        city,
        dressSizeEU,
        shoeSizeEU,
        height,
        languages: languages && languages.length ? languages : null,
        categories: categories && categories.length ? categories : null,
      }),
    )
  }, [
    name,
    startDate,
    gender,
    age,
    hairColor,
    hairType,
    eyeColor,
    ethnicity,
    country,
    city,
    dressSizeEU,
    shoeSizeEU,
    height,
    languages,
    categories,
    dispatch,
  ])

  const ExampleCustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <Button ref={ref} variant="light" onClick={onClick}>
      {value}
    </Button>
  ))

  return (
    <>
      <Row className="model-booking">
        <Col sm={12} md={12} lg={7}>
          <Container>
            <Row>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>first & last name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group>
                <Form.Label>DATE OF BIRTH</Form.Label>
                <DatePicker
                  selected={startDate || new Date()}
                  onChange={(date) => setStartDate(date)}
                  customInput={<ExampleCustomInput />}
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group>
                <Form.Label>Gender</Form.Label>
                <IcDropDown
                  value={gender}
                  items={['Male', 'Famale', 'Other']}
                  callback={setGenger}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>age group</Form.Label>
                <IcDropDown
                  value={age}
                  items={['100', '200', '300']}
                  callback={setAge}
                />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group>
                <Form.Label>HAIR color</Form.Label>
                <IcDropDown
                  value={hairColor}
                  items={[
                    'Gray',
                    'Light blond',
                    'Half blond',
                    'Whole blond',
                    'Light brown',
                    'Middle brown',
                    'Dark brown',
                    'Black',
                    'Mahogany',
                    'Warm red',
                    'Cold red',
                    'Copper',
                    'Extreme colour (blue, green, pink, yellow, etc.)',
                  ]}
                  callback={setHairColor}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>HAIR type</Form.Label>
                <IcDropDown
                  value={hairType}
                  items={[
                    'Natural or non-coloured',
                    'Coloured',
                    'Tuned',
                    'Bleached',
                  ]}
                  callback={setHairType}
                />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group>
                <Form.Label>EYE color</Form.Label>
                <IcDropDown
                  value={eyeColor}
                  items={[
                    'Dark brown',
                    'Brown',
                    'Light brown',
                    'Gray',
                    'Green',
                    'Blue',
                    'Hazel',
                    'Other',
                  ]}
                  callback={setEyeColor}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>ETHNICITY</Form.Label>
                <IcDropDown
                  value={ethnicity}
                  items={[
                    'Caucasian',
                    'African background',
                    'Latino',
                    'White',
                    'India/Pakistani',
                    'Middle east',
                    'Chinese',
                    'Japanese',
                    'Korean',
                    'South asia',
                    'Pacific Islands',
                    'Mixed',
                    'Other',
                  ]}
                  callback={setEthnicity}
                />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group>
                <Form.Label>Country</Form.Label>
                <IcDropDown
                  value={country}
                  items={['England', 'France', 'Germany']}
                  callback={setCountry}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>City</Form.Label>
                <IcDropDown
                  value={city}
                  items={['London', 'Parise', 'Berlin']}
                  callback={setCity}
                />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group>
                <Form.Label>Dress size eu</Form.Label>
                <IcDropDown
                  value={dressSizeEU}
                  items={['1', '2', '3']}
                  callback={setDressSizeEU}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Shoe size EU</Form.Label>
                <IcDropDown
                  value={shoeSizeEU}
                  items={['1', '2', '3']}
                  callback={setShoeSizeEU}
                />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>HEIGHT (cm)</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={height}
                  onChange={(e) => setHeight(e.target.value)}
                />
              </Form.Group>
            </Row>
          </Container>
        </Col>
        <Col sm={12} md={12} lg={5}>
          <Row className="direction-column">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Languages</Form.Label>
              <Form.Control
                type="text"
                placeholder={'languages'}
                onKeyPress={(e) => {
                  if (e.which === 13 || e.keyCode === 13) {
                    setLanguages([...languages, e.target.value])
                    e.target.value = ''
                  }
                }}
              />
            </Form.Group>
            <div>
              {languages &&
                languages.map((item, i) => (
                  <div className="tag" key={i}>
                    <FontAwesomeIcon
                      className="tag__close"
                      icon="times"
                      onClick={() => {
                        setLanguages(languages.filter((i) => i !== item))
                      }}
                    />
                    {item}
                  </div>
                ))}
            </div>
          </Row>
          <Row className="direction-column">
            <Form.Group>
              <Form.Label>categorie</Form.Label>
              <IcDropDown
                value={
                  categories ? categories[categories.length - 1] : 'categries'
                }
                items={[
                  'Body parts',
                  'Fashion',
                  'High fashion',
                  'Plus sized',
                  'Senior',
                  'Promotional',
                  'Commercial &amp; Print',
                  'Commercial &amp; Acting',
                  'Nude',
                  'New Faces',
                  'Hijab',
                  'Acting',
                  'Tattoo',
                  'Piercing',
                ]}
                callback={(item, e) => {
                  if (!categories.includes(item)) {
                    setCategories([...categories, item])
                  }
                }}
              />
            </Form.Group>
            <div>
              {categories &&
                categories.map((item, i) => (
                  <div className="tag" key={i}>
                    <FontAwesomeIcon
                      className="tag__close"
                      icon="times"
                      onClick={() => {
                        setCategories(categories.filter((i) => i !== item))
                      }}
                    />
                    {item}
                  </div>
                ))}
            </div>
          </Row>
        </Col>
      </Row>
    </>
  )
}
