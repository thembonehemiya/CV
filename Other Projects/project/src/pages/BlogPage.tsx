import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/common/PageHeader';

const blogPosts = [
  {
    id: 1,
    title: "The Importance of Regular Health Check-ups",
    excerpt: "Regular health check-ups are essential for preventive healthcare. Learn why you should schedule routine visits with your doctor.",
    image: "https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "May 10, 2025",
    author: "Dr. Michael Chen",
    category: "Preventive Care"
  },
  {
    id: 2,
    title: "Understanding Childhood Vaccinations",
    excerpt: "Childhood vaccinations protect against serious diseases. This article explains the vaccination schedule and why it's important for your child's health.",
    image: "https://images.pexels.com/photos/5863365/pexels-photo-5863365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "May 5, 2025",
    author: "Dr. Sarah Johnson",
    category: "Pediatrics"
  },
  {
    id: 3,
    title: "Managing Chronic Conditions: Tips for Patients",
    excerpt: "Living with a chronic condition requires ongoing management. Discover strategies to effectively manage chronic health conditions and improve quality of life.",
    image: "https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "April 28, 2025",
    author: "Dr. Lisa Thompson",
    category: "Chronic Care"
  },
  {
    id: 4,
    title: "Nutrition for Pregnant Women",
    excerpt: "Proper nutrition during pregnancy is crucial for both mother and baby. Learn about essential nutrients and healthy eating habits during pregnancy.",
    image: "https://images.pexels.com/photos/4226258/pexels-photo-4226258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "April 20, 2025",
    author: "Dr. Emily Rodriguez",
    category: "Women's Health"
  },
  {
    id: 5,
    title: "Understanding HIV Prevention and Treatment",
    excerpt: "Knowledge about HIV prevention and treatment has evolved significantly. This article provides current information on prevention strategies and treatment options.",
    image: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "April 15, 2025",
    author: "Dr. James Wilson",
    category: "Infectious Diseases"
  },
  {
    id: 6,
    title: "Mental Health Matters: Recognizing the Signs of Anxiety and Depression",
    excerpt: "Mental health is an essential component of overall wellbeing. Learn to recognize signs of anxiety and depression and when to seek professional help.",
    image: "https://images.pexels.com/photos/6957633/pexels-photo-6957633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "April 8, 2025",
    author: "Dr. Robert Davis",
    category: "Mental Health"
  }
];

const categories = [
  "Preventive Care",
  "Pediatrics",
  "Women's Health",
  "Men's Health",
  "Mental Health",
  "Chronic Care",
  "Infectious Diseases",
  "Nutrition"
];

const BlogPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Health Tips & Blog | Dave Community Clinic';
  }, []);
  
  return (
    <>
      <PageHeader 
        title="Health Tips & Blog" 
        subtitle="Stay informed with the latest health information and tips"
        backgroundImage="https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
      />
      
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                {blogPosts.map(post => (
                  <div key={post.id} className="col-md-6 mb-4">
                    <div className="card h-100">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="card-img-top"
                        style={{ height: '200px', objectFit: 'cover' }}
                      />
                      <div className="card-body">
                        <div className="d-flex align-items-center mb-2">
                          <span className="badge bg-primary me-2">{post.category}</span>
                          <small className="text-muted">{post.date}</small>
                        </div>
                        <h3 className="card-title h5 mb-2">
                          <Link to={`/blog/${post.id}`} className="text-decoration-none text-dark">
                            {post.title}
                          </Link>
                        </h3>
                        <p className="card-text">{post.excerpt}</p>
                      </div>
                      <div className="card-footer bg-white border-top-0">
                        <div className="d-flex align-items-center">
                          <div className="me-2">
                            <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                              {post.author.split(' ').map(name => name[0]).join('')}
                            </div>
                          </div>
                          <div>
                            <p className="mb-0 small">{post.author}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <nav aria-label="Page navigation" className="mt-4">
                <ul className="pagination justify-content-center">
                  <li className="page-item disabled">
                    <a className="page-link" href="#" tabIndex={-1} aria-disabled="true">Previous</a>
                  </li>
                  <li className="page-item active"><a className="page-link" href="#">1</a></li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item">
                    <a className="page-link" href="#">Next</a>
                  </li>
                </ul>
              </nav>
            </div>
            
            <div className="col-lg-4">
              <div className="card border-0 shadow-sm mb-4">
                <div className="card-body p-4">
                  <h3 className="h5 mb-3">Search</h3>
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search blog posts..." />
                    <button className="btn btn-primary" type="button">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="card border-0 shadow-sm mb-4">
                <div className="card-body p-4">
                  <h3 className="h5 mb-3">Categories</h3>
                  <ul className="list-group list-group-flush">
                    {categories.map((category, index) => (
                      <li key={index} className="list-group-item px-0 py-2 border-0">
                        <a href="#" className="d-flex justify-content-between text-decoration-none">
                          <span>{category}</span>
                          <span className="badge bg-light text-dark rounded-pill">
                            {Math.floor(Math.random() * 10) + 1}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="card border-0 shadow-sm mb-4">
                <div className="card-body p-4">
                  <h3 className="h5 mb-3">Recent Posts</h3>
                  <ul className="list-group list-group-flush">
                    {blogPosts.slice(0, 3).map(post => (
                      <li key={post.id} className="list-group-item px-0 py-3 border-0">
                        <div className="d-flex">
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            className="rounded me-3"
                            style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                          />
                          <div>
                            <h4 className="h6 mb-1">
                              <Link to={`/blog/${post.id}`} className="text-decoration-none text-dark">
                                {post.title}
                              </Link>
                            </h4>
                            <small className="text-muted">{post.date}</small>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="card border-0 bg-primary text-white shadow-sm">
                <div className="card-body p-4">
                  <h3 className="h5 mb-3">Subscribe to Our Newsletter</h3>
                  <p className="mb-3">Stay updated with the latest health tips and clinic news.</p>
                  <div className="input-group mb-3">
                    <input type="email" className="form-control" placeholder="Enter your email" />
                    <button className="btn btn-light" type="button">Subscribe</button>
                  </div>
                  <small>We respect your privacy. Unsubscribe at any time.</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;