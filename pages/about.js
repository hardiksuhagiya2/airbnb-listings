
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
import Link from "next/link";
import Card from "react-bootstrap/Card";
import ListingDetails from "@/components/ListingDetails";
import PageHeader from "@/components/PageHeader";

export async function getStaticProps() {
  return new Promise((resolve, reject) => {
    fetch("https://assignment-1-sepia-six.vercel.app/api/listings/1206363")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          resolve({ props: { listing: data } });
        } else {
          reject(new Error("Listing not found"));
        }
      })
      .catch((err) => reject(err));
  });
}
export default function About({ listing }) {
  return (
    <div>
      <PageHeader text="About the Developer: Hardik Suhagiya"></PageHeader>
      <Card className="bg-light">
        <Card.Body>
          <Card.Text>
          Hello, my name is Hardik, and I am currently a student of Computer Programming at Seneca College. My journey into the world of software started with a deep-rooted fascination for technology and a passion for problem-solving. This field has always intrigued me for its limitless potential to create innovative solutions that make an impact on everyday life. Growing up, I was the kind of person who enjoyed taking things apart to understand how they work, and over time, that curiosity evolved into a desire to build things myself. Software engineering, I believe, gives me the tools to bring my ideas to life, crafting software and systems that not only address complex challenges but also improve how people interact with technology. This program has been instrumental in my growth, allowing me to work with cutting-edge technologies and tools and refine my understanding of various programming languages, system architectures, and software development methodologies. This rigorous training has strengthened my analytical and technical skills, and I am particularly drawn to areas like cloud computing, data structures, and software design principles.
          </Card.Text>
          <Card.Text>
          Beyond academics, my experience with hands-on projects and teamwork has further enriched my understanding of the field. At Seneca, I have had the opportunity to collaborate with fellow students on diverse projects, which has taught me the importance of communication, adaptability, and a collaborative mindset in a software engineering environment. My goal is to specialize in areas such as artificial intelligence and cloud computing, where I believe the next wave of technological breakthroughs will occur. I am driven to learn continuously and adapt to new technologies, as the software industry is always evolving. I am excited about the possibilities that lie ahead and am eager to contribute meaningfully to the field, whether through internships, open-source projects, or further research. As I continue my journey, I hope to leverage my knowledge and skills to create innovative solutions that have a lasting impact, both in the tech world and in the lives of people who benefit from these advancements.
          </Card.Text>
          <Card.Text>
            One of the places that I would like to visit is the:{" "}
            <Link
              href={`/listings/${listing._id}`}
              legacyBehavior
            >
              <a>{`  View Listing: ${listing.name || "listing name"}`}</a>
            </Link>
            {" "}Bed & Breakfast (Airbnb).
          </Card.Text>
        </Card.Body>
        <ListingDetails listing={listing} />
      </Card>
      <br />
    </div>
  );
}
