import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageHeader from '../components/common/PageHeader';

// This would typically come from an API or database
const blogPosts = [
  {
    id: 1,
    title: "The Importance of Regular Health Check-ups",
    content: `
      <p class="lead">Regular health check-ups are essential for preventive healthcare. They help detect potential health issues before they become serious.</p>
      
      <p>Many people only visit their doctor when they're sick or experiencing symptoms. However, regular health check-ups are a crucial part of preventive healthcare and can help identify potential health issues before they become serious problems.</p>
      
      <h2 class="h4 mt-4 mb-3">Why Regular Check-ups Matter</h2>
      
      <p>Regular check-ups allow your healthcare provider to:</p>
      
      <ul>
        <li>Screen for medical issues</li>
        <li>Assess your risk for future medical problems</li>
        <li>Update your vaccinations</li>
        <li>Encourage a healthy lifestyle</li>
        <li>Build a relationship with your healthcare provider</li>
      </ul>
      
      <p>Early detection is key when it comes to treating many health conditions, including cancer, diabetes, and heart disease. Regular screenings can catch these conditions in their early stages when they're often more treatable.</p>
      
      <h2 class="h4 mt-4 mb-3">How Often Should You Get a Check-up?</h2>
      
      <p>The frequency of check-ups depends on various factors, including your age, health status, and family history. In general:</p>
      
      <ul>
        <li>Adults aged 18-39 should have a check-up every 3-5 years</li>
        <li>Adults aged 40-64 should have a check-up every 1-2 years</li>
        <li>Adults aged 65 and older should have a check-up annually</li>
      </ul>
      
      <p>However, your doctor may recommend more frequent check-ups if you have chronic conditions or risk factors for certain diseases.</p>
      
      <h2 class="h4 mt-4 mb-3">What to Expect During a Check-up</h2>
      
      <p>A typical check-up includes:</p>
      
      <ol>
        <li>Updating your medical history</li>
        <li>Checking vital signs (blood pressure, heart rate, temperature)</li>
        <li>Physical examination</li>
        <li>Laboratory tests (as needed)</li>
        <li>Health risk assessment</li>
        <li>Immunizations (if due)</li>
        <li>Health counseling</li>
      </ol>
      
      <p>Your healthcare provider may also recommend specific screenings based on your age, sex, and risk factors.</p>
      
      <h2 class="h4 mt-4 mb-3">Conclusion</h2>
      
      <p>Regular health check-ups are an investment in your long-term health. They provide an opportunity to catch potential health issues early, update vaccinations, and receive guidance on maintaining a healthy lifestyle. Don't wait until you're sick to see your doctor—schedule your next check-up today.</p>
    `,
    image: "https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "May 10, 2025",
    author: "Dr. Michael Chen",
    category: "Preventive Care"
  },
  {
    id: 2,
    title: "Understanding Childhood Vaccinations",
    content: `
      <p class="lead">Childhood vaccinations protect against serious diseases. This article explains the vaccination schedule and why it's important for your child's health.</p>
      
      <p>Vaccines have been one of the greatest public health achievements, significantly reducing the incidence of infectious diseases that once caused widespread illness and death. Childhood vaccinations are particularly important as they protect children when they are most vulnerable.</p>
      
      <h2 class="h4 mt-4 mb-3">The Importance of Childhood Vaccinations</h2>
      
      <p>Vaccines work by helping the body develop immunity to specific diseases. They contain weakened or killed versions of the disease-causing organism (or parts of it) that stimulate the immune system to recognize and fight the disease if exposed in the future.</p>
      
      <p>Childhood vaccinations protect against a range of serious diseases, including:</p>
      
      <ul>
        <li>Measles, mumps, and rubella (MMR)</li>
        <li>Diphtheria, tetanus, and pertussis (DTaP)</li>
        <li>Polio (IPV)</li>
        <li>Hepatitis A and B</li>
        <li>Haemophilus influenzae type b (Hib)</li>
        <li>Pneumococcal disease</li>
        <li>Rotavirus</li>
        <li>Chickenpox (varicella)</li>
        <li>Influenza (flu)</li>
      </ul>
      
      <h2 class="h4 mt-4 mb-3">Recommended Vaccination Schedule</h2>
      
      <p>The vaccination schedule has been carefully designed to provide protection when children are most vulnerable to diseases. The typical schedule includes:</p>
      
      <ul>
        <li><strong>Birth:</strong> Hepatitis B (first dose)</li>
        <li><strong>2 months:</strong> DTaP, IPV, Hib, Pneumococcal, Rotavirus, Hepatitis B (second dose)</li>
        <li><strong>4 months:</strong> DTaP, IPV, Hib, Pneumococcal, Rotavirus</li>
        <li><strong>6 months:</strong> DTaP, Hib, Pneumococcal, Rotavirus, Hepatitis B (third dose)</li>
        <li><strong>12-15 months:</strong> MMR, Chickenpox, Pneumococcal, Hepatitis A</li>
        <li><strong>15-18 months:</strong> DTaP</li>
        <li><strong>4-6 years:</strong> DTaP, IPV, MMR, Chickenpox</li>
        <li><strong>11-12 years:</strong> Tdap, HPV, Meningococcal</li>
      </ul>
      
      <p>Annual flu vaccinations are also recommended for children aged 6 months and older.</p>
      
      <h2 class="h4 mt-4 mb-3">Addressing Common Concerns</h2>
      
      <p>Some parents have concerns about vaccine safety. It's important to note that vaccines undergo rigorous testing before approval and are continuously monitored for safety. The benefits of vaccination far outweigh the risks.</p>
      
      <p>Common misconceptions include:</p>
      
      <ul>
        <li><strong>Myth:</strong> Vaccines cause autism.<br><strong>Fact:</strong> Extensive research has found no link between vaccines and autism.</li>
        <li><strong>Myth:</strong> Natural immunity is better than vaccine-acquired immunity.<br><strong>Fact:</strong> While natural immunity occurs after getting a disease, the risks of the disease itself can be severe and life-threatening.</li>
        <li><strong>Myth:</strong> Vaccines contain harmful ingredients.<br><strong>Fact:</strong> Vaccine ingredients are rigorously tested for safety and are present in extremely small amounts.</li>
      </ul>
      
      <h2 class="h4 mt-4 mb-3">Conclusion</h2>
      
      <p>Childhood vaccinations are a safe and effective way to protect children from serious diseases. By following the recommended vaccination schedule, parents can give their children the best protection against preventable diseases. If you have concerns about vaccinations, discuss them with your child's healthcare provider who can provide accurate information and address your specific questions.</p>
    `,
    image: "https://images.pexels.com/photos/5863365/pexels-photo-5863365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "May 5, 2025",
    author: "Dr. Sarah Johnson",
    category: "Pediatrics"
  },
  // Add more blog posts with full content
  {
    id: 3,
    title: "Managing Chronic Conditions: Tips for Patients",
    content: `<p class="lead">Living with a chronic condition requires ongoing management. Discover strategies to effectively manage chronic health conditions and improve quality of life.</p>
    
    <p>Chronic conditions such as diabetes, heart disease, arthritis, and asthma affect millions of people worldwide. While these conditions require ongoing medical attention, there are many strategies patients can implement to better manage their health and improve their quality of life.</p>
    
    <h2 class="h4 mt-4 mb-3">Understanding Your Condition</h2>
    
    <p>Knowledge is power when it comes to managing a chronic condition. Take time to learn about your specific condition, including:</p>
    
    <ul>
      <li>The underlying causes</li>
      <li>Typical symptoms and warning signs</li>
      <li>Treatment options</li>
      <li>Potential complications</li>
      <li>How to monitor your condition</li>
    </ul>
    
    <p>Ask your healthcare provider for reliable resources or recommended reading materials. Being well-informed helps you make better decisions about your care.</p>
    
    <h2 class="h4 mt-4 mb-3">Medication Management</h2>
    
    <p>Proper medication management is crucial for chronic condition control. Consider these tips:</p>
    
    <ul>
      <li>Take medications exactly as prescribed</li>
      <li>Use pill organizers or smartphone apps to track medications</li>
      <li>Set alarms for medication times</li>
      <li>Keep a current list of all medications (including over-the-counter drugs and supplements)</li>
      <li>Report any side effects to your healthcare provider</li>
      <li>Never stop taking medication without consulting your doctor</li>
    </ul>
    
    <h2 class="h4 mt-4 mb-3">Lifestyle Modifications</h2>
    
    <p>Healthy lifestyle choices can significantly impact how you feel and how well your condition is managed:</p>
    
    <h3 class="h5 mt-3 mb-2">Nutrition</h3>
    <p>Follow any dietary recommendations specific to your condition. In general, focus on:</p>
    <ul>
      <li>Plenty of fruits and vegetables</li>
      <li>Whole grains</li>
      <li>Lean proteins</li>
      <li>Limited sodium, added sugars, and unhealthy fats</li>
      <li>Appropriate portion sizes</li>
    </ul>
    
    <h3 class="h5 mt-3 mb-2">Physical Activity</h3>
    <p>Regular exercise, tailored to your abilities and condition, can:</p>
    <ul>
      <li>Improve energy levels</li>
      <li>Help maintain a healthy weight</li>
      <li>Reduce inflammation</li>
      <li>Improve mood and mental health</li>
      <li>Enhance sleep quality</li>
    </ul>
    <p>Consult with your healthcare provider before starting any exercise program.</p>
    
    <h3 class="h5 mt-3 mb-2">Stress Management</h3>
    <p>Chronic stress can worsen many health conditions. Effective stress management techniques include:</p>
    <ul>
      <li>Mindfulness meditation</li>
      <li>Deep breathing exercises</li>
      <li>Yoga or tai chi</li>
      <li>Spending time in nature</li>
      <li>Engaging in hobbies you enjoy</li>
      <li>Connecting with supportive friends and family</li>
    </ul>
    
    <h2 class="h4 mt-4 mb-3">Regular Monitoring and Medical Appointments</h2>
    
    <p>Stay on top of your condition by:</p>
    <ul>
      <li>Keeping all scheduled medical appointments</li>
      <li>Monitoring symptoms as recommended</li>
      <li>Tracking relevant health metrics (blood pressure, blood sugar, peak flow, etc.)</li>
      <li>Reporting new symptoms or changes promptly</li>
      <li>Getting recommended screenings and tests</li>
    </ul>
    
    <h2 class="h4 mt-4 mb-3">Building a Support System</h2>
    
    <p>Managing a chronic condition is easier with support:</p>
    <ul>
      <li>Communicate openly with family and friends about your needs</li>
      <li>Consider joining a support group (in-person or online)</li>
      <li>Build a good relationship with your healthcare team</li>
      <li>Don't hesitate to ask for help when needed</li>
    </ul>
    
    <h2 class="h4 mt-4 mb-3">Conclusion</h2>
    
    <p>While living with a chronic condition presents challenges, taking an active role in your health management can lead to better outcomes and improved quality of life. Remember that small, consistent actions add up to significant benefits over time. Work closely with your healthcare team to develop a management plan that works for your specific situation and lifestyle.</p>`,
    image: "https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "April 28, 2025",
    author: "Dr. Lisa Thompson",
    category: "Chronic Care"
  },
  {
    id: 4,
    title: "Nutrition for Pregnant Women",
    excerpt: "Proper nutrition during pregnancy is crucial for both mother and baby. Learn about essential nutrients and healthy eating habits during pregnancy.",
    content: "<p>This is a placeholder for the full blog post content.</p>",
    image: "https://images.pexels.com/photos/4226258/pexels-photo-4226258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "April 20, 2025",
    author: "Dr. Emily Rodriguez",
    category: "Women's Health"
  },
  {
    id: 5,
    title: "Understanding HIV Prevention and Treatment",
    excerpt: "Knowledge about HIV prevention and treatment has evolved significantly. This article provides current information on prevention strategies and treatment options.",
    content: "<p>This is a placeholder for the full blog post content.</p>",
    image: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "April 15, 2025",
    author: "Dr. James Wilson",
    category: "Infectious Diseases"
  },
  {
    id: 6,
    title: "Mental Health Matters: Recognizing the Signs of Anxiety and Depression",
    excerpt: "Mental health is an essential component of overall wellbeing. Learn to recognize signs of anxiety and depression and when to seek professional help.",
    content: "<p>This is a placeholder for the full blog post content.</p>",
    image: "https://images.pexels.com/photos/6957633/pexels-photo-6957633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "April 8, 2025",
    author: "Dr. Robert Davis",
    category: "Mental Health"
  }
];

const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<any>(null);
  const [relatedPosts, setRelatedPosts] = useState<any[]>([]);
  
  useEffect(() => {
    // In a real application, this would be an API call to get the post by ID
    const foundPost = blogPosts.find(post => post.id === parseInt(id || '0'));
    setPost(foundPost);
    
    if (foundPost) {
      document.title = `${foundPost.title} | Dave Community Clinic`;
      
      // Find related posts based on category
      const related = blogPosts
        .filter(p => p.category === foundPost.category && p.id !== foundPost.id)
        .slice(0, 3);
      setRelatedPosts(related);
    }
  }, [id]);
  
  if (!post) {
    return (
      <div className="section">
        <div className="container">
          <div className="alert alert-warning">
            Blog post not found. <Link to="/blog">Return to blog</Link>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <>
      <PageHeader 
        title={post.title}
        subtitle={post.category}
        backgroundImage={post.image}
      />
      
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <article>
                <div className="d-flex align-items-center mb-4">
                  <div className="me-3">
                    <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                      {post.author.split(' ').map((name: string) => name[0]).join('')}
                    </div>
                  </div>
                  <div>
                    <h5 className="mb-0">{post.author}</h5>
                    <p className="text-muted mb-0">Published on {post.date}</p>
                  </div>
                </div>
                
                <div className="mb-5" dangerouslySetInnerHTML={{ __html: post.content }} />
                
                <div className="d-flex align-items-center justify-content-between p-4 bg-light rounded mb-5">
                  <div>
                    <h5 className="mb-1">Share this article</h5>
                    <p className="mb-0">Help others benefit from this information</p>
                  </div>
                  <div className="social-icons">
                    <a href="#" className="me-2" aria-label="Share on Facebook">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                      </svg>
                    </a>
                    <a href="#" className="me-2" aria-label="Share on Twitter">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                      </svg>
                    </a>
                    <a href="#" className="me-2" aria-label="Share on LinkedIn">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                      </svg>
                    </a>
                    <a href="#" aria-label="Share via Email">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                      </svg>
                    </a>
                  </div>
                </div>
                
                {relatedPosts.length > 0 && (
                  <div>
                    <h3 className="h4 mb-4">Related Articles</h3>
                    <div className="row">
                      {relatedPosts.map(relatedPost => (
                        <div key={relatedPost.id} className="col-md-4 mb-4">
                          <div className="card h-100">
                            <img 
                              src={relatedPost.image} 
                              alt={relatedPost.title} 
                              className="card-img-top"
                              style={{ height: '150px', objectFit: 'cover' }}
                            />
                            <div className="card-body">
                              <h4 className="card-title h6 mb-2">
                                <Link to={`/blog/${relatedPost.id}`} className="text-decoration-none text-dark">
                                  {relatedPost.title}
                                </Link>
                              </h4>
                              <small className="text-muted">{relatedPost.date}</small>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            </div>
            
            <div className="col-lg-4">
              <div className="card border-0 shadow-sm mb-4">
                <div className="card-body p-4">
                  <h3 className="h5 mb-3">About the Author</h3>
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '60px', height: '60px' }}>
                      {post.author.split(' ').map((name: string) => name[0]).join('')}
                    </div>
                    <div>
                      <h4 className="h6 mb-1">{post.author}</h4>
                      <p className="mb-0 text-muted">Specialist in {post.category}</p>
                    </div>
                  </div>
                  <p className="mb-0">
                    An experienced healthcare professional at Dave Community Clinic, dedicated to providing quality care and health education to our community.
                  </p>
                </div>
              </div>
              
              <div className="card border-0 shadow-sm mb-4">
                <div className="card-body p-4">
                  <h3 className="h5 mb-3">Categories</h3>
                  <div className="d-flex flex-wrap gap-2">
                    <a href="#" className="badge bg-light text-dark text-decoration-none p-2">Preventive Care</a>
                    <a href="#" className="badge bg-light text-dark text-decoration-none p-2">Pediatrics</a>
                    <a href="#" className="badge bg-light text-dark text-decoration-none p-2">Women's Health</a>
                    <a href="#" className="badge bg-light text-dark text-decoration-none p-2">Men's Health</a>
                    <a href="#" className="badge bg-light text-dark text-decoration-none p-2">Mental Health</a>
                    <a href="#" className="badge bg-light text-dark text-decoration-none p-2">Chronic Care</a>
                    <a href="#" className="badge bg-light text-dark text-decoration-none p-2">Infectious Diseases</a>
                    <a href="#" className="badge bg-light text-dark text-decoration-none p-2">Nutrition</a>
                  </div>
                </div>
              </div>
              
              <div className="card border-0 shadow-sm mb-4">
                <div className="card-body p-4">
                  <h3 className="h5 mb-3">Subscribe to Our Newsletter</h3>
                  <p className="mb-3">Stay updated with the latest health tips and clinic news.</p>
                  <div className="input-group mb-3">
                    <input type="email" className="form-control" placeholder="Enter your email" />
                    <button className="btn btn-primary" type="button">Subscribe</button>
                  </div>
                  <small className="text-muted">We respect your privacy. Unsubscribe at any time.</small>
                </div>
              </div>
              
              <div className="card border-0 bg-primary text-white shadow-sm">
                <div className="card-body p-4">
                  <h3 className="h5 mb-3">Need Medical Assistance?</h3>
                  <p className="mb-3">Schedule an appointment with our healthcare professionals today.</p>
                  <Link to="/appointment" className="btn btn-light w-100">Book Appointment</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPostPage;