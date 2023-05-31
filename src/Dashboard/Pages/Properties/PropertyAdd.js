import React, { useState } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
import axios from "axios";

const PropertyAdd = () => {
  const [propertyInfo, setPropertyInfo] = useState({
    title: "",
    description: "",
    price: "",
    image: null,
    area: "",
    bathrooms: "",
    bedrooms: "",
    garage: "",
    floors: "",
    year_built: "",
    status: "",
    category_id: "",
    city_id: "",
    property_type_id: "",
    owner_id: "",
    employee_id: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPropertyInfo({ ...propertyInfo, [name]: value });
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPropertyInfo((prevPropertyInfo) => ({
      ...prevPropertyInfo,
      image: file,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/Properties", propertyInfo);
      console.log(response.data);
      // TODO: Redirect to Home
      window.location.href = "/admin/properties";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-1" xl="8">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Add New Property</h3>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form onSubmit={handleSubmit}>
                  <h6 className="heading-small text-muted mb-4">
                    Property information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="12">
                        <FormGroup>
                          <label className="form-control-label" htmlFor="input-name">
                            Title
                          </label>
                          <Input
                            className="form-control-alternative w-100"
                            type="text"
                            placeholder="Enter Title"
                            name="title"
                            value={propertyInfo.title}
                            onChange={handleChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="12">
                        <FormGroup>
                          <label className="form-control-label" htmlFor="input-description">
                            Description
                          </label>
                          <Input
                            className="form-control-alternative w-100"
                            type="textarea"
                            placeholder="Enter Description"
                            name="description"
                            value={propertyInfo.description}
                            onChange={handleChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="12">
                        <FormGroup>
                          <label className="form-control-label" htmlFor="input-price">
                            Price
                          </label>
                          <Input
                            className="form-control-alternative w-100"
                            type="number"
                            placeholder="Enter Price"
                            name="price"
                            value={propertyInfo.price}
                            onChange={handleChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="12">
                      <FormGroup>
                      <label className="form-control-label" htmlFor="input-image">
                        Image
                      </label>
                      <Input
                        className="form-control-alternative w-100"
                        type="file" // Change the input type to "file"
                        accept="image/*" // Add accept attribute to allow only image files
                        name="image"
                        onChange={handleFileChange} // Update the onChange handler to handle file selection
                      />
                    </FormGroup>

                      </Col>
                    </Row>
                    <Row>
                      <Col lg="12">
                        <FormGroup>
                          <label className="form-control-label" htmlFor="input-area">
                            Area
                          </label>
                          <Input
                            className="form-control-alternative w-100"
                            type="number"
                            placeholder="Enter Area"
                            name="area"
                            value={propertyInfo.area}
                            onChange={handleChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="4">
                        <FormGroup>
                          <label className="form-control-label" htmlFor="input-bathrooms">
                            Bathrooms
                          </label>
                          <Input
                            className="form-control-alternative w-100"
                            type="number"
                            placeholder="Enter Number of Bathrooms"
                            name="bathrooms"
                            value={propertyInfo.bathrooms}
                            onChange={handleChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label className="form-control-label" htmlFor="input-bedrooms">
                            Bedrooms
                          </label>
                          <Input
                            className="form-control-alternative w-100"
                            type="number"
                            placeholder="Enter Number of Bedrooms"
                            name="bedrooms"
                            value={propertyInfo.bedrooms}
                            onChange={handleChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label className="form-control-label" htmlFor="input-garage">
                            Garage
                          </label>
                          <Input
                            className="form-control-alternative w-100"
                            type="number"
                            placeholder="Enter Number of Garage"
                            name="garage"
                            value={propertyInfo.garage}
                            onChange={handleChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label className="form-control-label" htmlFor="input-floors">
                            Floors
                          </label>
                          <Input
                            className="form-control-alternative w-100"
                            type="number"
                            placeholder="Enter Number of Floors"
                            name="floors"
                            value={propertyInfo.floors}
                            onChange={handleChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label className="form-control-label" htmlFor="input-year-built">
                            Year Built
                          </label>
                          <Input
                            className="form-control-alternative w-100"
                            type="number"
                            placeholder="Enter Year Built"
                            name="year_built"
                            value={propertyInfo.year_built}
                            onChange={handleChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  
                    <Row>
                      <Col lg="12">
                        <FormGroup>
                          <label className="form-control-label" htmlFor="input-status">
                            Status
                          </label>
                          <Input
                            type="select"
                            name="status"
                            value={propertyInfo.status}
                            onChange={handleChange}
                          >
                            <option value="">Select status</option>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                            <option value="Pending">Pending</option>
                          </Input>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="12">
                        <FormGroup>
                          <label className="form-control-label" htmlFor="input-category-id">
                            Category ID
                          </label>
                          <Input
                            className="form-control-alternative w-100"
                            type="text"
                            placeholder="Enter Category ID"
                            name="category_id"
                            value={propertyInfo.category_id}
                            onChange={handleChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="12">
                        <FormGroup>
                          <label className="form-control-label" htmlFor="input-city-id">
                            City ID
                          </label>
                          <Input
                            className="form-control-alternative w-100"
                            type="text"
                            placeholder="Enter City ID"
                            name="city_id"
                            value={propertyInfo.city_id}
                            onChange={handleChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="12">
                        <FormGroup>
                          <label className="form-control-label" htmlFor="input-property-type-id">
                            Property Type ID
                          </label>
                          <Input
                            className="form-control-alternative w-100"
                            type="text"
                            placeholder="Enter Property Type ID"
                            name="property_type_id"
                            value={propertyInfo.property_type_id}
                            onChange={handleChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="12">
                        <FormGroup>
                          <label className="form-control-label" htmlFor="input-owner-id">
                            Owner ID
                          </label>
                          <Input
                            className="form-control-alternative w-100"
                            type="text"
                            placeholder="Enter Owner ID"
                            name="owner_id"
                            value={propertyInfo.owner_id}
                            onChange={handleChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="12">
                        <FormGroup>
                          <label className="form-control-label" htmlFor="input-employee-id">
                            Employee ID
                          </label>
                          <Input
                            className="form-control-alternative w-100"
                            type="text"
                            placeholder="Enter Employee ID"
                            name="employee_id"
                            value={propertyInfo.employee_id}
                            onChange={handleChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>

                  <hr className="my-4" />

                  <Row>
                    <Col lg="12">
                      <Button variant="primary" color="primary" type="submit">
                        Add
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PropertyAdd;
