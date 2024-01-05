import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>
      I’m open to job opportunities where I can bring my skills and passion to the table. <br className='sm:block hidden' />
      Let’s connect and explore possibilities together.
      </p>
      <Link to='/contact' className='btn'>
        Contact
      </Link>
    </section>
  );
};

export default CTA;
