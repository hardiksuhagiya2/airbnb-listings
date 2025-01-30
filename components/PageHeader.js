  // components/PageHeader.js
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
import Card from 'react-bootstrap/Card';

const PageHeader = ({ text }) => {
  return (
    <>
      <Card className="bg-light">
        <Card.Body  style={{fontWeight: 'bold'}}>
          {text}
        </Card.Body>
      </Card>
      <br />
    </>
  );
};

export default PageHeader;
