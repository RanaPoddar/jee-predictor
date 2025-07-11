import { Metadata } from 'next'
import { BookOpen, TrendingUp, Users, Calendar } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'College Blogs | Engineering Admission Guides & Tips',
  description: 'Read expert blogs about engineering college admissions, career guidance, and college selection tips.',
  keywords: 'engineering college blogs, admission tips, career guidance, college selection, JEE preparation',
}

export default function CollegeBlogsPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Best NITs for CSE Under 50,000 Rank",
      excerpt: "Discover the top NIT colleges for Computer Science Engineering that you can get with a rank under 50,000.",
      category: "College Selection",
      readTime: "5 min read",
      publishDate: "Dec 15, 2024",
      link: "/blogs/best-nit-cse-under-50000-rank"
    },
    {
      id: 2,
      title: "IIT vs NIT vs IIIT: Which is Better?",
      excerpt: "Complete comparison guide to help you choose between IIT, NIT, and IIIT based on various factors.",
      category: "Comparison",
      readTime: "8 min read",
      publishDate: "Dec 10, 2024",
      link: "/blogs/iit-vs-nit-vs-iiit-comparison"
    },
    {
      id: 3,
      title: "JEE Main 2025: Complete Preparation Strategy",
      excerpt: "Comprehensive guide for JEE Main preparation with study plan, important topics, and exam tips.",
      category: "Preparation",
      readTime: "12 min read",
      publishDate: "Dec 5, 2024",
      link: "/blogs/jee-main-2025-preparation-strategy"
    },
    {
      id: 4,
      title: "Top Engineering Branches with Best Placements",
      excerpt: "Explore engineering branches that offer the highest placement packages and career growth.",
      category: "Career Guidance",
      readTime: "6 min read",
      publishDate: "Nov 28, 2024",
      link: "/blogs/top-engineering-branches-placements"
    }
  ]

  const categories = [
    { name: "College Selection", count: 15, icon: <BookOpen className="w-4 h-4" /> },
    { name: "Exam Preparation", count: 12, icon: <TrendingUp className="w-4 h-4" /> },
    { name: "Career Guidance", count: 10, icon: <Users className="w-4 h-4" /> },
    { name: "Admission Process", count: 8, icon: <Calendar className="w-4 h-4" /> }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100 py-4 sm:py-8">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            College Blogs & Guides
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            Expert insights, tips, and comprehensive guides for engineering college admissions and career planning.
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Featured Post */}
              <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-semibold">FEATURED</span>
                  <span className="text-gray-500 text-sm">College Selection</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">
                  Best NITs for CSE Under 50,000 Rank
                </h2>
                <p className="text-gray-600 mb-4">
                  Looking for the best NIT colleges for Computer Science Engineering with a rank under 50,000? 
                  This comprehensive guide covers all the top NITs you can target, their cutoffs, placement records, 
                  and what makes them special for CSE students.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>Dec 15, 2024</span>
                    <span>8 min read</span>
                    <span>1.2k views</span>
                  </div>
                  <Link 
                    href="/blogs/best-nit-cse-under-50000-rank"
                    className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition-colors"
                  >
                    Read Full Article
                  </Link>
                </div>
              </div>
              
              {/* Blog Posts Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {blogPosts.map((post) => (
                  <div key={post.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-gray-500">
                        <span>{post.publishDate}</span>
                        <span className="mx-1">•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <Link 
                        href={post.link}
                        className="text-orange-600 hover:text-orange-800 font-medium text-sm"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Categories */}
              <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Categories</h3>
                <div className="space-y-3">
                  {categories.map((category, index) => (
                    <div key={index} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                      <div className="flex items-center gap-2">
                        <span className="text-orange-600">{category.icon}</span>
                        <span className="text-gray-700">{category.name}</span>
                      </div>
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                        {category.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Popular Posts */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Popular Posts</h3>
                <div className="space-y-4">
                  <div className="border-b pb-3 last:border-b-0">
                    <h4 className="text-sm font-semibold text-gray-800 mb-1">
                      JEE Main vs JEE Advanced: Key Differences
                    </h4>
                    <p className="text-xs text-gray-500">2.5k views • 3 days ago</p>
                  </div>
                  <div className="border-b pb-3 last:border-b-0">
                    <h4 className="text-sm font-semibold text-gray-800 mb-1">
                      How to Choose Between CSE and IT
                    </h4>
                    <p className="text-xs text-gray-500">1.8k views • 5 days ago</p>
                  </div>
                  <div className="border-b pb-3 last:border-b-0">
                    <h4 className="text-sm font-semibold text-gray-800 mb-1">
                      State Quota vs All India Quota
                    </h4>
                    <p className="text-xs text-gray-500">1.3k views • 1 week ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Coming Soon */}
          <div className="text-center py-16 mt-12 bg-white rounded-lg shadow-lg">
            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              More Expert Content Coming Soon
            </h2>
            <p className="text-gray-600 mb-8">
              We're working on bringing you more comprehensive guides, tips, and insights.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
