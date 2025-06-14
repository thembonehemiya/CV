import React from 'react';
import { Calendar, User, ArrowRight, Leaf, Users, Target, Coffee } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  category: string;
  readTime: string;
}

interface NewsUpdate {
  id: number;
  title: string;
  date: string;
  content: string;
  icon: any;
  color: string;
}

const Blog: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "New Vocational Training Program Launches for Young Mothers",
      excerpt: "Our latest skills training initiative focuses on sustainable handicraft production, empowering young mothers with marketable skills for self-employment in the Rwenzori region.",
      date: "March 15, 2024",
      author: "RMCI Team",
      image: "src/images/ad.jpg" ,
      category: "Community Development",
      readTime: "4 min read"
    },
    {
      id: 2,
      title: "Record Honey Harvest Brings Sweet Success to Community",
      excerpt: "Our community apiary program has achieved its largest honey harvest to date, benefiting 25 local families and demonstrating the success of our biodiversity conservation approach.",
      date: "March 8, 2024",
      author: "RMCI Team",
      image: "src/images/meb.jpg" ,
      category: "Conservation",
      readTime: "3 min read"
    },
    {
      id: 3,
      title: "Riverbank Restoration Project Shows Remarkable Results",
      excerpt: "Six months after completion, our riverbank restoration using native vegetation is showing excellent results with improved water quality and increased biodiversity.",
      date: "February 28, 2024",
      author: "RMCI Team",
      image: "src/images/mib.jpg" ,
      category: "Environmental Restoration",
      readTime: "5 min read"
    },
    {
      id: 4,
      title: "Coffee Seedling Distribution Reaches 1,000 Milestone",
      excerpt: "In partnership with the government, we've successfully distributed over 1,000 coffee seedlings to local farmers, boosting sustainable livelihoods and supporting reforestation efforts.",
      date: "February 20, 2024",
      author: "RMCI Team",
      image: "src/images/cdas.jpg" ,
      category: "Sustainable Agriculture",
      readTime: "3 min read"
    },
    {
      id: 5,
      title: "Women's Cooperative Shows Strong Growth in Tailoring Skills",
      excerpt: "Our women's tailoring program has graduated its first cohort, with participants now successfully producing and selling handmade items in local markets.",
      date: "February 12, 2024",
      author: "RMCI Team",
      image: "src/images/cds.jpg" ,
      category: "Skills Training",
      readTime: "4 min read"
    },
    {
      id: 6,
      title: "Bamboo Nursery Expansion Supports Climate Resilience",
      excerpt: "Our expanded bamboo nursery is now producing 500 seedlings monthly, contributing to erosion control and providing sustainable building materials for the community.",
      date: "January 30, 2024",
      author: "RMCI Team",
      image: "src/images/mt.jpg" ,
      category: "Conservation",
      readTime: "3 min read"
    }
  ];

  const recentUpdates: NewsUpdate[] = [
    {
      id: 1,
      title: "New Partnership with Local Schools for Environmental Education",
      date: "March 20, 2024",
      content: "We've formed partnerships with three local schools to integrate environmental education into their curriculum, reaching over 200 students.",
      icon: Users,
      color: "primary"
    },
    {
      id: 2,
      title: "Soap Making Workshop Completes Second Cohort",
      date: "March 18, 2024",
      content: "Another successful group of 15 women has completed our soap making workshop, using local ingredients to create natural soaps for market sale.",
      icon: Target,
      color: "earth"
    },
    {
      id: 3,
      title: "Tree Planting Campaign Reaches 250 Trees",
      date: "March 16, 2024",
      content: "Our community tree planting initiative has successfully planted 250 native trees along riverbanks, contributing to ecosystem restoration.",
      icon: Leaf,
      color: "forest"
    },
    {
      id: 4,
      title: "Mushroom Cultivation Training Shows Promising Results",
      date: "March 14, 2024",
      content: "The pilot mushroom cultivation program has produced its first harvest, providing nutritious food and additional income for participating families.",
      icon: Coffee,
      color: "primary"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Conservation':
        return 'bg-forest-100 text-forest-700';
      case 'Community Development':
        return 'bg-primary-100 text-primary-700';
      case 'Skills Training':
        return 'bg-earth-100 text-earth-700';
      case 'Environmental Restoration':
        return 'bg-green-100 text-green-700';
      case 'Sustainable Agriculture':
        return 'bg-orange-100 text-orange-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">News & Updates</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Stay informed about our conservation progress, community impact stories, and latest developments in the Rwenzori Mountains region.
            </p>
          </div>
        </div>
      </section>

      {/* Recent Updates */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Recent Updates</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Quick updates from our ongoing conservation and community work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {recentUpdates.map((update) => {
              const Icon = update.icon;
              return (
                <div key={update.id} className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-${update.color}-100 rounded-full flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`h-6 w-6 text-${update.color}-600`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold text-gray-900 text-lg">{update.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-3 leading-relaxed">{update.content}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        {update.date}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Blog Posts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Stories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              In-depth stories about our conservation work and community impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-forest-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {post.date}
                      </div>
                    </div>
                    <span className="text-gray-400">{post.readTime}</span>
                  </div>
                  <button className="text-forest-600 font-medium inline-flex items-center hover:text-forest-700 transition-colors group">
                    Read Full Story
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-forest-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl mb-8 text-forest-100 leading-relaxed">
            Subscribe to our newsletter to receive monthly updates about our conservation work, community impact, and upcoming events.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-forest-300"
              />
              <button className="bg-forest-600 hover:bg-forest-700 text-white px-6 py-3 rounded-lg transition-colors font-medium whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-forest-200 mt-2">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Involved in Our Mission</h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Join us in creating lasting positive change for the Rwenzori Mountains and its communities. Every action counts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/donate"
              className="bg-white text-primary-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors font-medium text-lg inline-flex items-center justify-center"
            >
              Support Our Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="/get-involved"
              className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-primary-600 transition-colors font-medium text-lg inline-flex items-center justify-center"
            >
              Volunteer With Us
              <Users className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;