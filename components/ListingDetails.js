// components/ListingDetails.js
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
 * Cyclic URL: https://assignment-1-k77izo7d6-hardik-suhagiyas-projects.vercel.app/
 *
 *****************************************************************************/
import { Container, Row, Col } from 'react-bootstrap';

const ListingDetails = ({ listing }) => {
  return (
    <Container className="my-4">
      <Row>
        <Col lg={6}>
          <img
            onError={(event) => {
              event.target.onerror = null; 
              event.target.src = "https://placehold.co/600x400?text=Photo+Not+Available";
            }}
            className="img-fluid w-100"
            src={listing?.images?.picture_url || "https://placehold.co/600x400?text=Photo+Not+Available"}
            alt="Listing Image"
          />
          <br /><br />
        </Col>

        <Col lg={6}>
          <p>{listing.neighborhood_overview || "Description not provided"}<br/><br/></p>
          <strong>Price:</strong> {listing.price ? `$${listing.price.toFixed(2)}` : "Price not available"}<br/>
          <strong>Room:</strong> {listing.room_type ? `${listing.room_type}` : "Price not available"}<br/>
          <strong>Bed:</strong> {listing.bed_type ? `${listing.bed_type} (${listing.beds || 0})` : "Bed information not available"}<br/><br/>
          <strong>Rating:</strong> {listing.review_scores?.review_scores_rating 
              ? `${listing.review_scores.review_scores_rating}/100 (${listing.number_of_reviews || 0} Reviews)` 
              : "Rating information not available"}
          <br/><br/>
        </Col>
      </Row>
    </Container>
  );
};

export default ListingDetails;
