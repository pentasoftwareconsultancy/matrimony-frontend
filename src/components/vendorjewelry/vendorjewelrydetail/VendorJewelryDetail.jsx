// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import styles from "./VendorJewelryDetail.module.css";

// const VendorJewelryDetail = () => {
//   const { id } = useParams();
//   const [jewelry, setJewelry] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchJewelry = async () => {
//       try {
//         const response = await fetch(`http://localhost:8000/api/v1/jewelry/${id}`);
//         const data = await response.json();
//         setJewelry(data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching jewelry:', error);
//         setLoading(false);
//       }
//     };

//     fetchJewelry();
//   }, [id]);

//   if (loading) {
//     return <div className={styles.loading}>Loading...</div>;
//   }

//   if (!jewelry) {
//     return <div className={styles.notFound}>Jewellery Vendor not found</div>;
//   }

//   return (
//     <div className={styles.detailContainer}>
//       <h1>{jewelry.title}</h1>
//       <div className={styles.info}>
//         <div className={styles.mainDetails}>
//           <p><strong>Name:</strong> {jewelry.name}</p>
//           <p><strong>Email:</strong> {jewelry.email}</p>
//           <p><strong>Phone:</strong> {jewelry.phone}</p>
//           <p><strong>Address:</strong> {jewelry.address}</p>
//           {/* <p><strong>Rating:</strong> {jewelry.ratings}/5</p>
//           <p><strong>Status:</strong> {jewelry.isVerified ? 'Verified' : 'Not Verified'}</p> */}
//           <p><strong>Description:</strong> {jewelry.description}</p>
//         </div>
//         <div className={styles.profileImages}>
//           {jewelry.jewelryimgUrl?.map((imgUrl, index) => (
//             <img 
//               key={index} 
//               src={imgUrl} 
//               alt={`${jewelry.title} ${index + 1}`}
//               className={styles.profileImage}
//             />
//           ))}
//         </div>
//       </div>
//       <div className={styles.gallery}>
//         <h3>Gallery</h3>
//         <div className={styles.galleryGrid}>
//           {jewelry.galleryImages?.map((galleryItem, index) => (
//             <div key={index} className={styles.galleryItem}>
//               <img 
//                 src={galleryItem.jewelrypic} 
//                 alt={galleryItem.title}
//                 className={styles.galleryImage}
//               />
//               <h4>{galleryItem.title}</h4>
//               <p>{galleryItem.description}</p>
//               {galleryItem.feedback && (
//                 <p><strong>Feedback:</strong> {galleryItem.feedback}</p>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VendorJewelryDetail;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './VendorJewelryDetail.module.css';

const VendorJewelryDetail = () => {
  const { id } = useParams();
  const [jewelry, setJewelry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  useEffect(() => {
    const fetchJewelry = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/v1/jewelry/${id}`);
        const data = await response.json();
        setJewelry(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching jewelry:', error);
        setLoading(false);
      }
    };

    fetchJewelry();
  }, [id]);

  if (loading) return <div className={styles.loading}>Loading...</div>;
  if (!jewelry) return <div className={styles.notFound}>Jewelry Vendor not found</div>;

  const openImageModal = (index) => setSelectedImageIndex(index);
  const closeImageModal = () => setSelectedImageIndex(null);
  const showPrevImage = () => {
    setSelectedImageIndex((prev) =>
      prev === 0 ? jewelry.galleryImages.length - 1 : prev - 1
    );
  };
  const showNextImage = () => {
    setSelectedImageIndex((prev) =>
      prev === jewelry.galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.cardDetail}>
        <div className={styles.eventHeader}>
          <h1 className={styles.name}>{jewelry.title}</h1>
          <div className={styles.headerMeta}>
            <div className={styles.categoryBadge}>Jewelry</div>
            <div className={styles.organizer}>{jewelry.name}</div>
          </div>
        </div>

        <div className={styles.eventContent}>
          <div className={styles.imageSection}>
            <img
              src={jewelry.jewelryimgUrl?.[0]}
              alt={jewelry.title}
              className={styles.imagemain}
            />
          </div>
          <div className={styles.detailsSection}>
            <div className={styles.detailCard}>
              <div className={styles.detailItem}>
                <div>
                  <h3>Name</h3>
                  <p>{jewelry.name}</p>
                </div>
              </div>
              <div className={styles.detailItem}>
                <div>
                  <h3>Email</h3>
                  <p>{jewelry.email}</p>
                </div>
              </div>
              <div className={styles.detailItem}>
                <div>
                  <h3>Phone</h3>
                  <p>{jewelry.phone}</p>
                </div>
              </div>
              <div className={styles.detailItem}>
                <div>
                  <h3>Address</h3>
                  <p>{jewelry.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.descriptionSection}>
          <h2 className={styles.sectionTitle}>Description</h2>
          <div className={styles.description}>{jewelry.description}</div>
        </div>

        {jewelry.galleryImages?.length > 0 && (
          <section className={styles.gallerySection}>
            <h2 className={styles.sectionTitle}>Gallery</h2>
            <div className={styles.galleryGrid}>
              {jewelry.galleryImages.map((item, index) => (
                <div key={index} className={styles.card}>
                  <img src={item.jewelrypic} alt={item.title} />
                  <div className={styles.overlay}>
                    <div
                      className={styles.viewButton}
                      onClick={() => openImageModal(index)}
                    >
                      View
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {selectedImageIndex !== null && (
        <div className={styles.modalOverlay} onClick={closeImageModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeImageModal}>
              ×
            </button>
            <button className={styles.arrowLeft} onClick={showPrevImage}>
              &#10094;
            </button>
            <img
              src={jewelry.galleryImages[selectedImageIndex]?.jewelrypic}
              alt={`Gallery ${selectedImageIndex + 1}`}
              className={styles.modalImage}
            />
            <button className={styles.arrowRight} onClick={showNextImage}>
              &#10095;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VendorJewelryDetail;
