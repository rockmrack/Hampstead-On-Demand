'use client'

import Link from 'next/link'
import { blogPosts } from '@/content/blog/blog-posts'

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured)
  const recentPosts = blogPosts.filter(post => !post.featured)

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      {/* Header */}
      <header style={{
        backgroundColor: '#2C3E50',
        color: 'white',
        padding: '80px 24px 60px',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '16px' }}>
            Property Maintenance Blog
          </h1>
          <p style={{ fontSize: '20px', opacity: 0.9 }}>
            Expert guides, tips, and advice from Hampstead's trusted maintenance professionals
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px' }}>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section style={{ marginBottom: '80px' }}>
            <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '32px', color: '#2C3E50' }}>
              Featured Guides
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '32px',
            }}>
              {featuredPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  style={{ textDecoration: 'none' }}
                >
                  <article style={{
                    backgroundColor: 'white',
                    borderRadius: '12px',
                    padding: '32px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    cursor: 'pointer',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)'
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)'
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)'
                  }}>

                    <div style={{
                      display: 'flex',
                      gap: '12px',
                      marginBottom: '16px',
                      flexWrap: 'wrap',
                    }}>
                      <span style={{
                        backgroundColor: '#C19A5B',
                        color: 'white',
                        padding: '4px 12px',
                        borderRadius: '16px',
                        fontSize: '12px',
                        fontWeight: '600',
                      }}>
                        {post.category}
                      </span>
                      <span style={{
                        color: '#666',
                        fontSize: '12px',
                      }}>
                        {post.readTime} min read
                      </span>
                    </div>

                    <h3 style={{
                      fontSize: '24px',
                      fontWeight: 'bold',
                      marginBottom: '16px',
                      color: '#2C3E50',
                      lineHeight: '1.4',
                    }}>
                      {post.title}
                    </h3>

                    <p style={{
                      color: '#666',
                      fontSize: '16px',
                      lineHeight: '1.6',
                      marginBottom: '24px',
                      flex: 1,
                    }}>
                      {post.description}
                    </p>

                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      paddingTop: '16px',
                      borderTop: '1px solid #eee',
                    }}>
                      <span style={{ fontSize: '14px', color: '#666' }}>
                        {post.author}
                      </span>
                      <span style={{
                        color: '#C19A5B',
                        fontWeight: '600',
                        fontSize: '14px',
                      }}>
                        Read More →
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* All Posts */}
        <section>
          <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '32px', color: '#2C3E50' }}>
            All Articles
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '24px',
          }}>
            {recentPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                style={{ textDecoration: 'none' }}
              >
                <article style={{
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  padding: '24px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  cursor: 'pointer',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.12)'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)'
                }}>

                  <div style={{
                    display: 'flex',
                    gap: '8px',
                    marginBottom: '12px',
                    fontSize: '12px',
                  }}>
                    <span style={{
                      backgroundColor: '#f0f0f0',
                      color: '#666',
                      padding: '4px 10px',
                      borderRadius: '12px',
                      fontWeight: '500',
                    }}>
                      {post.category}
                    </span>
                  </div>

                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    marginBottom: '12px',
                    color: '#2C3E50',
                    lineHeight: '1.4',
                  }}>
                    {post.title}
                  </h3>

                  <p style={{
                    color: '#666',
                    fontSize: '14px',
                    lineHeight: '1.5',
                    marginBottom: '16px',
                    flex: 1,
                  }}>
                    {post.description.substring(0, 120)}...
                  </p>

                  <div style={{
                    fontSize: '12px',
                    color: '#999',
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}>
                    <span>{post.readTime} min</span>
                    <span style={{ color: '#C19A5B', fontWeight: '600' }}>
                      Read →
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section style={{
          marginTop: '80px',
          backgroundColor: '#2C3E50',
          borderRadius: '16px',
          padding: '60px 40px',
          textAlign: 'center',
          color: 'white',
        }}>
          <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '16px' }}>
            Need Property Maintenance?
          </h2>
          <p style={{ fontSize: '18px', marginBottom: '32px', opacity: 0.9 }}>
            We're available 24/7 for emergency services in Hampstead and surrounding areas
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="tel:07459345456"
              style={{
                backgroundColor: '#C19A5B',
                color: 'white',
                padding: '16px 32px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '16px',
              }}
            >
              📞 Call: 07459 345456
            </a>
            <Link
              href="/services"
              style={{
                backgroundColor: 'transparent',
                color: 'white',
                padding: '16px 32px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '16px',
                border: '2px solid white',
              }}
            >
              View All Services
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#1a1a1a',
        color: 'white',
        padding: '40px 24px',
        textAlign: 'center',
      }}>
        <Link href="/" style={{ color: '#C19A5B', textDecoration: 'none', fontSize: '14px' }}>
          ← Back to Home
        </Link>
      </footer>
    </div>
  )
}
