import { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Job from './Job';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchedCompaniesAction } from '../redux/actions/index';

const MainSearch = () => {
  const [query, setQuery] = useState('');
  // const [jobs, setJobs] = useState([]);

  const content = useSelector((state) => {
    return state.favourites.favCompanies;
  });

  const dispatch = useDispatch();

  const jobsFound = useSelector((state) => state.searched.searchedCompanies);

  // const baseEndpoint =
  //   'https://strive-benchmark.herokuapp.com/api/jobs?search=';

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(getSearchedCompaniesAction(query));

    // try {
    //   const response = await fetch(baseEndpoint + query + '&limit=20');
    //   if (response.ok) {
    //     const { data } = await response.json();
    //     setJobs(data);
    //   } else {
    //     alert('Error fetching results');
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
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

        {/* <SearchResult jobsFound={jobsFound} content={content} /> */}
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
