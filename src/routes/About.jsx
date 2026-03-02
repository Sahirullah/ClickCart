import { useEffect, useState } from 'react';
import { TabTitle } from '../utils/General';
import './About.css';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import GrassIcon from '@mui/icons-material/Grass';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import aboutImg from '../asset/img/about.jpg';

const About = () => {
    TabTitle("About Us - RarCompress");
    const [activeIndex, setActiveIndex] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const faqs = [
        {
            id: 1,
            question: 'What makes RarCompress different from other compression tools?',
            answer: 'We provide fast, reliable RAR file compression with an intuitive interface. Our commitment to performance and user satisfaction sets us apart in the industry.'
        },
        {
            id: 2,
            question: 'How do you ensure product freshness?',
            answer: 'All our products are sourced fresh daily and delivered within 24 hours. We maintain strict quality control standards and work only with verified suppliers.'
        },
        {
            id: 3,
            question: 'Is RarCompress secure?',
            answer: 'Yes, we use industry-standard encryption and security protocols. Your files are processed securely and never stored on our servers.'
        },
        {
            id: 4,
            question: 'What is your sustainability commitment?',
            answer: 'We are committed to eco-friendly practices including sustainable packaging, reducing carbon footprint, and supporting environmentally responsible farming methods.'
        },
        {
            id: 5,
            question: 'How can I be sure about product quality?',
            answer: 'Every product undergoes rigorous testing and quality checks. We only partner with certified suppliers who meet our strict quality standards.'
        },
        {
            id: 6,
            question: 'What is your customer support availability?',
            answer: 'Our dedicated support team is available 24/7 to assist you with any questions or concerns. We are committed to providing excellent customer service.'
        }
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="about__container">
            {/* Hero Section */}
            <section className="about__hero">
                <div className="about__hero__content">
                    <h1>About RarCompress</h1>
                    <p>Your trusted RAR file compression and extraction tool</p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="about__mission">
                <div className="about__mission__content">
                    <div className="mission__text">
                        <h2>Our Mission</h2>
                        <p>
                            At RarCompress, we're committed to providing fast, reliable RAR file compression and extraction tools. 
                            We believe in making file compression accessible to everyone with an intuitive interface and powerful features 
                            that enhance your productivity.
                        </p>
                        <p>
                            Our mission is to make premium dairy products accessible to everyone while maintaining the highest standards 
                            of quality, freshness, and customer satisfaction.
                        </p>
                    </div>
                    <div className="mission__image">
                        <img src={aboutImg} alt="RarCompress Mission" />
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="about__values">
                <h2>Our Core Values</h2>
                <div className="values__grid">
                    <div className="value__card">
                        <div className="value__icon">
                            <VerifiedUserIcon />
                        </div>
                        <h3>Quality</h3>
                        <p>We source only the finest dairy products from trusted suppliers and farmers who share our commitment to excellence.</p>
                    </div>
                    <div className="value__card">
                        <div className="value__icon">
                            <LocalShippingIcon />
                        </div>
                        <h3>Fast Delivery</h3>
                        <p>Quick and reliable delivery ensures your products arrive fresh and on time, every single time.</p>
                    </div>
                    <div className="value__card">
                        <div className="value__icon">
                            <SupportAgentIcon />
                        </div>
                        <h3>Customer Care</h3>
                        <p>Our dedicated support team is always ready to help you with any questions or concerns you may have.</p>
                    </div>
                    <div className="value__card">
                        <div className="value__icon">
                            <GrassIcon />
                        </div>
                        <h3>Sustainability</h3>
                        <p>We're committed to sustainable practices that protect our environment for future generations.</p>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="about__story">
                <div className="story__content">
                    <h2>Our Story</h2>
                    <div className="story__text">
                        <p>
                            RarCompress was founded with a simple vision: to revolutionize how people compress and extract RAR files. 
                            What started as a small project has grown into a trusted tool serving thousands of satisfied users.
                        </p>
                        <p>
                            We work directly with local dairy farmers and producers to ensure every product meets our strict quality standards. 
                            Our team is passionate about bringing the freshest, most delicious dairy products to your table.
                        </p>
                        <p>
                            Today, RarCompress stands as a symbol of quality, reliability, and user-first service in file compression.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="about__stats">
                <div className="stats__grid">
                    <div className="stat__item">
                        <h3>10K+</h3>
                        <p>Happy Customers</p>
                    </div>
                    <div className="stat__item">
                        <h3>500+</h3>
                        <p>Products Available</p>
                    </div>
                    <div className="stat__item">
                        <h3>50+</h3>
                        <p>Partner Farmers</p>
                    </div>
                    <div className="stat__item">
                        <h3>24/7</h3>
                        <p>Customer Support</p>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="about__team">
                <h2>Why Choose Us?</h2>
                <div className="team__reasons">
                    <div className="reason__item">
                        <div className="reason__number">1</div>
                        <h4>Premium Quality</h4>
                        <p>All products are carefully selected and tested for quality and freshness.</p>
                    </div>
                    <div className="reason__item">
                        <div className="reason__number">2</div>
                        <h4>Competitive Prices</h4>
                        <p>We offer the best prices without compromising on quality.</p>
                    </div>
                    <div className="reason__item">
                        <div className="reason__number">3</div>
                        <h4>Easy Ordering</h4>
                        <p>Simple and secure online ordering process with multiple payment options.</p>
                    </div>
                    <div className="reason__item">
                        <div className="reason__number">4</div>
                        <h4>Fast Shipping</h4>
                        <p>Quick delivery to your doorstep with real-time tracking.</p>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="about__faq">
                <h2>People also ask</h2>
                <div className="about__faq__grid">
                    {faqs.map((faq, index) => (
                        <div key={faq.id} className="about__faq__card">
                            <button
                                className={`about__faq__question ${activeIndex === index ? 'active' : ''}`}
                                onClick={() => toggleAccordion(index)}
                            >
                                <span>{faq.question}</span>
                                <ExpandMoreIcon className="about__faq__icon" />
                            </button>
                            {activeIndex === index && (
                                <div className="about__faq__answer">
                                    <p>{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default About;
