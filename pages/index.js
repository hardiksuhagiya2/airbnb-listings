// pages/index.js

/****************************************************************************
 * I declare that this assignment is my own work in accordance with the Seneca Academic
 * Policy. No part of this assignment has been copied manually or electronically from
 * any other source (including web sites) or distributed to other students.
 *
 * https://www.senecapolytechnic.ca/about/policies/academic-integrity-policy.html
 *
 * Assignment: 2247 / 3
 * Student Name: Hardik Sureshbhai Suhagiya
 * Student Email: hsuhagiya@myseneca.ca
 * Course/Section: WEB422/ZAA
 * Cyclic URL: // https://listing-6y7dsixdb-hardik-suhagiyas-projects.vercel.app/
 *
 *****************************************************************************/
import useSWR from 'swr';
import { useState, useEffect } from 'react';
import { Pagination, Accordion } from 'react-bootstrap';
import ListingDetails from '@/components/ListingDetails';
import PageHeader from '@/components/PageHeader';


function Home() {
  const [page, setPage] = useState(1);
  const [pageData, setPageData] = useState([]);

  const { data } = useSWR(`https://assignment-1-sepia-six.vercel.app/api/listings?page=${page}&perPage=10`);

  useEffect(() => {
    if (data) {
    setPageData(data);
    }
   }, [data]);

   const previous = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  const next = () => {  
    setPage((prev) => prev + 1);
  };
  

  return (
    <div>
      <PageHeader text="Browse Listings: Sorted by Number of Ratings" />
      
      <Accordion>
        {pageData.map((listing) => (
          <Accordion.Item key={listing._id} eventKey={listing._id}>
            <Accordion.Header>
              <strong>{listing.name}</strong> - {listing.address.street}
            </Accordion.Header>
            <Accordion.Body>
              <ListingDetails listing={listing} />
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>

      <Pagination>
        <Pagination.Prev onClick={previous} disabled={page <= 1} />
        <Pagination.Item>{page}</Pagination.Item>
        <Pagination.Next onClick={next} />
      </Pagination>
    </div>
  );
}

export default Home;
