'use client'

import { useState } from 'react'
import Link from 'next/link'

// Sample projects data - in production would come from CMS/database
const projects = [
  {
    id: 1,
    title: 'Victorian Bathroom Renovation',
    category: 'Bathroom',
    location: 'Hampstead, NW3',
    duration: '5 days',
    description: 'Complete bathroom renovation in a period property, including new suite, tiling, and plumbing.',
    beforeImage: '/projects/bathroom-before-1.jpg',
    afterImage: '/projects/bathroom-after-1.jpg',
    services: ['Plumbing', 'Tiling', 'Electrical'],
  },
  {
    id: 2,
    title: 'Kitchen Electrics Upgrade',
    category: 'Electrical',
    location: 'St Johns Wood, NW8',
    duration: '2 days',
    description: 'Full electrical upgrade for modern kitchen appliances, including new consumer unit.',
    beforeImage: '/projects/kitchen-before-1.jpg',
    afterImage: '/projects/kitchen-after-1.jpg',
    services: ['Electrical', 'EICR'],
  },
  {
    id: 3,
    title: 'Emergency Boiler Replacement',
    category: 'Plumbing',
    location: 'Primrose Hill, NW1',
    duration: '1 day',
    description: 'Same-day emergency boiler replacement during winter. Worcester Bosch combi installed.',
    beforeImage: '/projects/boiler-before-1.jpg',
    afterImage: '/projects/boiler-after-1.jpg',
    services: ['Plumbing', 'Gas Safe'],
  },
  {
    id: 4,
    title: 'Period Property Rewire',
    category: 'Electrical',
    location: 'Belsize Park, NW3',
    duration: '7 days',
    description: 'Complete rewiring of Edwardian flat with minimal disruption to original features.',
    beforeImage: '/projects/rewire-before-1.jpg',
    afterImage: '/projects/rewire-after-1.jpg',
    services: ['Electrical', 'Plastering'],
  },
  {
    id: 5,
    title: 'Garden Transformation',
    category: 'Gardens',
    location: 'West Hampstead, NW6',
    duration: '3 days',
    description: 'Overgrown garden cleared and redesigned with new lawn, borders, and patio.',
    beforeImage: '/projects/garden-before-1.jpg',
    afterImage: '/projects/garden-after-1.jpg',
    services: ['Landscaping', 'Fencing', 'Paving'],
  },
  {
    id: 6,
    title: 'End of Tenancy Deep Clean',
    category: 'Cleaning',
    location: 'Swiss Cottage, NW3',
    duration: '1 day',
    description: 'Professional deep clean of 3-bed flat for full deposit return. Oven, carpets included.',
    beforeImage: '/projects/clean-before-1.jpg',
    afterImage: '/projects/clean-after-1.jpg',
    services: ['Deep Cleaning', 'Carpet Cleaning', 'Oven Cleaning'],
  },
]

const categories = ['All', 'Bathroom', 'Electrical', 'Plumbing', 'Gardens', 'Cleaning']

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [activeSlider, setActiveSlider] = useState<number | null>(null)
  const [sliderPosition, setSliderPosition] = useState(50)

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory)

  const handleSliderMove = (e: React.MouseEvent<HTMLDivElement>, projectId: number) => {
    if (activeSlider !== projectId) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percentage = (x / rect.width) * 100
    setSliderPosition(Math.max(0, Math.min(100, percentage)))
  }

  return (
    <div className="projects-page">
      <section className="projects-hero">
        <div className="hero-inner">
          <h1>Our Work</h1>
          <p>Real projects from real homes across North West London</p>
        </div>
      </section>

      <section className="projects-filters">
        <div className="filters-inner">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="projects-grid-section">
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div 
                className="before-after-slider"
                onMouseDown={() => setActiveSlider(project.id)}
                onMouseUp={() => setActiveSlider(null)}
                onMouseLeave={() => setActiveSlider(null)}
                onMouseMove={(e) => handleSliderMove(e, project.id)}
              >
                {/* Placeholder images - in production use real images */}
                <div className="image-container">
                  <div className="before-image" style={{ 
                    background: '#dc2626',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '24px',
                    fontWeight: 'bold'
                  }}>
                    BEFORE
                  </div>
                  <div 
                    className="after-image" 
                    style={{ 
                      clipPath: `inset(0 ${100 - (activeSlider === project.id ? sliderPosition : 50)}% 0 0)`,
                      background: '#22c55e',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '24px',
                      fontWeight: 'bold'
                    }}
                  >
                    AFTER
                  </div>
                  <div 
                    className="slider-handle"
                    style={{ left: `${activeSlider === project.id ? sliderPosition : 50}%` }}
                  >
                    <div className="slider-line" />
                    <div className="slider-circle">⟷</div>
                  </div>
                </div>
                <div className="slider-labels">
                  <span>Before</span>
                  <span>After</span>
                </div>
              </div>

              <div className="project-info">
                <div className="project-header">
                  <span className="project-category">{project.category}</span>
                  <span className="project-duration">{project.duration}</span>
                </div>
                <h3>{project.title}</h3>
                <p className="project-location">📍 {project.location}</p>
                <p className="project-description">{project.description}</p>
                <div className="project-services">
                  {project.services.map((service, idx) => (
                    <span key={idx} className="service-tag">{service}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="projects-cta">
        <div className="cta-inner">
          <h2>Ready to Transform Your Property?</h2>
          <p>Get a free quote for your project today</p>
          <div className="cta-buttons">
            <Link href="/quote" className="btn btn-primary">Get Instant Quote</Link>
            <a href="tel:07459345456" className="btn btn-outline">Call 07459 345456</a>
          </div>
        </div>
      </section>

      <style jsx>{`
        .projects-page {
          min-height: 100vh;
          background: #f8f9fa;
        }
        .projects-hero {
          background: linear-gradient(135deg, #2c3e50 0%, #546e7a 100%);
          color: white;
          padding: 120px 24px 60px;
          text-align: center;
        }
        .hero-inner {
          max-width: 800px;
          margin: 0 auto;
        }
        .projects-hero h1 {
          font-size: 48px;
          color: white;
          margin-bottom: 16px;
        }
        .projects-hero p {
          font-size: 20px;
          opacity: 0.9;
        }
        .projects-filters {
          background: white;
          padding: 24px;
          position: sticky;
          top: 0;
          z-index: 100;
          box-shadow: 0 2px 12px rgba(0,0,0,0.08);
        }
        .filters-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
        }
        .filter-btn {
          padding: 10px 24px;
          background: #f5f5f5;
          border: none;
          border-radius: 24px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }
        .filter-btn:hover {
          background: #e0e0e0;
        }
        .filter-btn.active {
          background: #8b7355;
          color: white;
        }
        .projects-grid-section {
          padding: 60px 24px;
        }
        .projects-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
        }
        @media (max-width: 900px) {
          .projects-grid { grid-template-columns: 1fr; }
        }
        .project-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        }
        .before-after-slider {
          position: relative;
          height: 280px;
          cursor: ew-resize;
          user-select: none;
        }
        .image-container {
          position: relative;
          width: 100%;
          height: 100%;
        }
        .before-image, .after-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .slider-handle {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 4px;
          background: white;
          transform: translateX(-50%);
          z-index: 10;
        }
        .slider-line {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          background: white;
        }
        .slider-circle {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 40px;
          height: 40px;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        }
        .slider-labels {
          position: absolute;
          bottom: 12px;
          left: 12px;
          right: 12px;
          display: flex;
          justify-content: space-between;
          z-index: 5;
        }
        .slider-labels span {
          background: rgba(0,0,0,0.6);
          color: white;
          padding: 4px 12px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 600;
        }
        .project-info {
          padding: 24px;
        }
        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }
        .project-category {
          background: #e8f4f8;
          color: #0891b2;
          padding: 4px 12px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 600;
        }
        .project-duration {
          font-size: 13px;
          color: #888;
        }
        .project-info h3 {
          font-size: 20px;
          color: #2c3e50;
          margin-bottom: 8px;
        }
        .project-location {
          font-size: 14px;
          color: #666;
          margin-bottom: 12px;
        }
        .project-description {
          font-size: 14px;
          color: #555;
          line-height: 1.6;
          margin-bottom: 16px;
        }
        .project-services {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .service-tag {
          background: #f5f5f5;
          padding: 4px 10px;
          border-radius: 4px;
          font-size: 12px;
          color: #666;
        }
        .projects-cta {
          background: linear-gradient(135deg, #8b7355 0%, #a0896d 100%);
          padding: 80px 24px;
          text-align: center;
          color: white;
        }
        .cta-inner {
          max-width: 600px;
          margin: 0 auto;
        }
        .projects-cta h2 {
          font-size: 32px;
          color: white;
          margin-bottom: 12px;
        }
        .projects-cta p {
          font-size: 18px;
          opacity: 0.9;
          margin-bottom: 32px;
        }
        .cta-buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .btn {
          padding: 16px 32px;
          border-radius: 8px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s;
        }
        .btn-primary {
          background: white;
          color: #8b7355;
        }
        .btn-outline {
          border: 2px solid white;
          color: white;
        }
      `}</style>
    </div>
  )
}
