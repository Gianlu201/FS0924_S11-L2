import { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Job from './Job';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchedCompaniesAction } from '../redux/actions/index';

const MainSearch = () => {
  const [query, setQuery] = useState('');

  const content = useSelector((state) => {
    return state.favourites.favCompanies;
  });

  const dispatch = useDispatch();

  const jobsFound = useSelector((state) => state.searched.searchedCompanies);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(getSearchedCompaniesAction(query));
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className='mx-auto my-3'>
          <h1 className='display-1'>Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className='mx-auto'>
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type='search'
              value={query}
              onChange={handleChange}
              placeholder='type and press Enter'
            />
          </Form>
        </Col>

        {jobsFound.length > 0 && (
          <Col xs={10} className='mx-auto mb-5'>
            {jobsFound.map((jobData) => (
              <Job key={jobData._id} data={jobData} favs={content} />
            ))}
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default MainSearch;
