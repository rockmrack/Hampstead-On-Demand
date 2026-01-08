'use client'

import { useState } from 'react'

const reviews = [
  {
    id: 1,
    name: "Sarah M.",
    location: "Hampstead, NW3",
    rating: 5,
    date: "2 weeks ago",
    service: "Emergency Plumber",
    text: "Called at 11pm with a burst pipe. Engineer arrived within 45 minutes and had it fixed by midnight. Absolutely brilliant service - saved our home from serious water damage. Can't recommend highly enough!",
    verified: true,
  },
  {
    id: 2,
    name: "James T.",
    location: "St John's Wood, NW8",
    rating: 5,
    date: "1 month ago",
    service: "Electrical Installation",
    text: "Had a complete rewiring job done on our Victorian flat. The team were professional, tidy, and finished ahead of schedule. Fair pricing with no surprises. Will definitely use again.",
    verified: true,
  },
  {
    id: 3,
    name: "Emma R.",
    location: "Swiss Cottage, NW3",
    rating: 5,
    date: "3 weeks ago",
    service: "Handyman",
    text: "Brilliant handyman service! Fixed multiple issues in one visit - leaky tap, squeaky doors, and mounted my TV. Very efficient and reasonably priced. Already booked them for more work.",
    verified: true,
  },
  {
    id: 4,
    name: "Michael D.",
    location: "Primrose Hill, NW1",
    rating: 5,
    date: "1 week ago",
    service: "Locksmith",
    text: "Locked out of my flat at 2am. The locksmith arrived in 30 minutes and got me in without any damage to the door. Professional, polite, and the price was exactly what was quoted. Lifesaver!",
    verified: true,
  },
  {
    id: 5,
    name: "Charlotte W.",
    location: "West Hampstead, NW6",
    rating: 5,
    date: "2 months ago",
    service: "Deep Cleaning",
    text: "End of tenancy clean was exceptional. They cleaned things I didn't even know could be cleaned! Got my full deposit back. Worth every penny.",
    verified: true,
  },
  {
    id: 6,
    name: "David L.",
    location: "Belsize Park, NW3",
    rating: 5,
    date: "3 weeks ago",
    service: "Boiler Service",
    text: "Annual boiler service done efficiently. Engineer explained everything clearly and gave good advice on maintaining the system. Gas Safe certified and very professional.",
    verified: true,
  },
]

export function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const visibleReviews = 3

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (reviews.length - visibleReviews + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + (reviews.length - visibleReviews + 1)) % (reviews.length - visibleReviews + 1))
  }

  const renderStars = (rating: number) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating)
  }

  return (
    <section className="reviews-section" id="reviews">
      <div className="reviews-inner">
        <div className="reviews-header">
          <div className="reviews-badge">
            <span className="google-icon">G</span>
            <div className="reviews-stats">
              <div className="reviews-rating">
                <span className="rating-number">4.8</span>
                <span className="rating-stars">★★★★★</span>
              </div>
              <span className="reviews-count">Based on 156 Google Reviews</span>
            </div>
          </div>
          <h2 className="reviews-title">What Our Customers Say</h2>
          <p className="reviews-subtitle">Real reviews from real customers across North West London</p>
        </div>

        <div className="reviews-carousel">
          <button className="carousel-btn prev" onClick={prevSlide} aria-label="Previous reviews">
            ←
          </button>
          
          <div className="reviews-track">
            <div 
              className="reviews-slider"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleReviews)}%)` }}
            >
              {reviews.map((review) => (
                <div key={review.id} className="review-card">
                  <div className="review-header">
                    <div className="review-avatar">
                      {review.name.charAt(0)}
                    </div>
                    <div className="review-meta">
                      <div className="review-name">
                        {review.name}
                        {review.verified && <span className="verified-badge">✓</span>}
                      </div>
                      <div className="review-location">{review.location}</div>
                    </div>
                    <div className="review-date">{review.date}</div>
                  </div>
                  <div className="review-rating">{renderStars(review.rating)}</div>
                  <div className="review-service">{review.service}</div>
                  <p className="review-text">{review.text}</p>
                </div>
              ))}
            </div>
          </div>

          <button className="carousel-btn next" onClick={nextSlide} aria-label="Next reviews">
            →
          </button>
        </div>

        <a 
          href="https://www.google.com/maps/place/Hampstead+Maintenance" 
          target="_blank" 
          rel="noopener noreferrer"
          className="view-all-reviews"
        >
          View All Reviews on Google →
        </a>
      </div>

      <style jsx>{`
        .reviews-section {
          padding: 80px 24px;
          background: #f8f9fa;
        }
        .reviews-inner {
          max-width: 1200px;
          margin: 0 auto;
        }
        .reviews-header {
          text-align: center;
          margin-bottom: 48px;
        }
        .reviews-badge {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: white;
          padding: 12px 24px;
          border-radius: 50px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.08);
          margin-bottom: 24px;
        }
        .google-icon {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #4285f4, #34a853, #fbbc05, #ea4335);
          color: white;
          font-weight: 700;
          font-size: 24px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .reviews-stats {
          text-align: left;
        }
        .reviews-rating {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .rating-number {
          font-size: 24px;
          font-weight: 700;
          color: #2c3e50;
        }
        .rating-stars {
          color: #fbbc05;
          font-size: 18px;
        }
        .reviews-count {
          font-size: 12px;
          color: #666;
        }
        .reviews-title {
          font-size: 36px;
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 12px;
        }
        .reviews-subtitle {
          font-size: 18px;
          color: #666;
        }
        .reviews-carousel {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 32px;
        }
        .carousel-btn {
          width: 48px;
          height: 48px;
          background: white;
          border: 2px solid #e0e0e0;
          border-radius: 50%;
          font-size: 20px;
          cursor: pointer;
          transition: all 0.3s;
          flex-shrink: 0;
        }
        .carousel-btn:hover {
          background: #2c3e50;
          color: white;
          border-color: #2c3e50;
        }
        .reviews-track {
          flex: 1;
          overflow: hidden;
        }
        .reviews-slider {
          display: flex;
          transition: transform 0.5s ease;
        }
        .review-card {
          flex: 0 0 calc(33.333% - 16px);
          margin: 0 8px;
          background: white;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
        }
        @media (max-width: 1024px) {
          .review-card {
            flex: 0 0 calc(50% - 16px);
          }
        }
        @media (max-width: 640px) {
          .review-card {
            flex: 0 0 calc(100% - 16px);
          }
          .carousel-btn {
            display: none;
          }
        }
        .review-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        }
        .review-avatar {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, #8b7355, #a0896d);
          color: white;
          font-weight: 700;
          font-size: 20px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .review-meta {
          flex: 1;
        }
        .review-name {
          font-weight: 600;
          color: #2c3e50;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .verified-badge {
          background: #4285f4;
          color: white;
          font-size: 10px;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .review-location {
          font-size: 13px;
          color: #888;
        }
        .review-date {
          font-size: 12px;
          color: #888;
        }
        .review-rating {
          color: #fbbc05;
          font-size: 16px;
          margin-bottom: 8px;
        }
        .review-service {
          display: inline-block;
          background: #e8f4f8;
          color: #0891b2;
          font-size: 12px;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 12px;
          margin-bottom: 12px;
        }
        .review-text {
          font-size: 14px;
          color: #444;
          line-height: 1.6;
        }
        .view-all-reviews {
          display: block;
          text-align: center;
          color: #8b7355;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.3s;
        }
        .view-all-reviews:hover {
          color: #6b5a45;
        }
      `}</style>
    </section>
  )
}
