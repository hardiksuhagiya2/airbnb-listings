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
import { useRouter } from 'next/router';
import useSWR from 'swr';
import ListingDetails from '@/components/ListingDetails';
import Error from 'next/error';
import PageHeader from '@/components/PageHeader';

function Listing() {
  const router = useRouter();
  const { id } = router.query;
  const { data, error } = useSWR(`https://assignment-1-sepia-six.vercel.app/api/listings/${id}`);

  if (!data && !error) {
    return null;
  }

  if(!data || error)
  {
    return <Error statusCode={404}/>;
  }

  const listing = data; 

  if (!listing) {
    return <Error statusCode={404} />;
  }
  
  return (
    <>
      <PageHeader text={listing.name} />
      <ListingDetails listing={listing} />
    </>
  );
}

export default Listing;
