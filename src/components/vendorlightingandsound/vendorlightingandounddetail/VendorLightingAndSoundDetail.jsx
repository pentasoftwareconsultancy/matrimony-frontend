// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import styles from './VendorLightingAndSoundDetail.module.css';

// const VendorLightingAndSoundDetail = () => {
//   const { id } = useParams();
//   const [lightingsound, setLightingAndSound] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchLightingAndSound = async () => {
//       try {
//         const response = await fetch(`http://localhost:8000/api/v1/lighting/${id}`);
//         const data = await response.json();
//         setLightingAndSound(data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching lighting and sound:', error);
//         setLoading(false);
//       }
//     };

//     fetchLightingAndSound();
//   }, [id]);

//   if (loading) {
//     return <div className={styles.loading}>Loading...</div>;
//   }

//   if (!lightingsound) {
//     return <div className={styles.notFound}>Lighting and Sound Vendor not found</div>;
//   }

//   return (
//     <div className={styles.detailContainer}>
//       <h1>{lightingsound.title}</h1>
//       <div className={styles.info}>
//         <div className={styles.mainDetails}>
//           <p><strong>Name:</strong> {lightingsound.name}</p>
//           <p><strong>Email:</strong> {lightingsound.email}</p>
//           <p><strong>Phone:</strong> {lightingsound.phone}</p>
//           <p><strong>Address:</strong> {lightingsound.address}</p>
//           {/* <p><strong>Rating:</strong> {lightingsound.ratings}/5</p>
//           <p><strong>Status:</strong> {lightingsound.isVerified ? 'Verified' : 'Not Verified'}</p> */}
//           <p><strong>Description:</strong> {lightingsound.description}</p>
//         </div>
//         <div className={styles.profileImages}>
//           {lightingsound.lightingimgUrl?.map((imgUrl, index) => (
//             <img
//               key={index}
//               src={imgUrl}
//               alt={`${lightingsound.title} ${index + 1}`}
//               className={styles.profileImage}
//             />
//           ))}
//         </div>
//       </div>
//       <div className={styles.gallery}>
//         <h3>Gallery</h3>
//         <div className={styles.galleryGrid}>
//           {lightingsound.galleryImages?.map((galleryItem, index) => (
//             <div key={index} className={styles.galleryItem}>
//               <img
//                 src={galleryItem.lightingpic}
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

// export default VendorLightingAndSoundDetail;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./VendorLightingAndSoundDetail.module.css";

const VendorLightingAndSoundDetail = () => {
  const { id } = useParams();
  const [lightingsound, setLightingAndSound] = useState(null);
  const [loading, setLoading] = useState(true);
  // const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);


  useEffect(() => {
    const fetchLightingAndSound = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/v1/lighting/${id}`
        );
        const data = await response.json();
        setLightingAndSound(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching lighting and sound:", error);
        setLoading(false);
      }
    };

    fetchLightingAndSound();
  }, [id]);

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (!lightingsound) {
    return (
      <div className={styles.notFound}>Lighting and Sound Vendor not found</div>
    );
  }

  // for image section
  const openImageModal = (index) => {
  setSelectedImageIndex(index);
};

const closeImageModal = () => {
  setSelectedImageIndex(null);
};

const showPrevImage = () => {
  setSelectedImageIndex((prev) =>
    prev === 0 ? lightingsound.galleryImages.length - 1 : prev - 1
  );
};

const showNextImage = () => {
  setSelectedImageIndex((prev) =>
    prev === lightingsound.galleryImages.length - 1 ? 0 : prev + 1
  );
};

  return (
    <div className={styles.pageContainer}>
      <div className={styles.cardDetail}>
        <div className={styles.eventHeader}>
          <h1 className={styles.name}>{lightingsound.title}</h1>
          <div className={styles.headerMeta}>
            <div className={styles.categoryBadge}>Lighting & Sound</div>
            <div className={styles.organizer}>{lightingsound.name}</div>
          </div>
        </div>

        <div className={styles.eventContent}>
          <div className={styles.imageSection}>
            <img
              src={lightingsound.lightingimgUrl?.[0]}
              alt={lightingsound.title}
              className={styles.imagemain}
            />
          </div>
          <div className={styles.detailsSection}>
            <div className={styles.detailCard}>
              <div className={styles.detailItem}>
                <div>
                  <h3>Name</h3>
                  <p>{lightingsound.name}</p>
                </div>
              </div>
              <div className={styles.detailItem}>
                <div>
                  <h3>Email</h3>
                  <p>{lightingsound.email}</p>
                </div>
              </div>
              <div className={styles.detailItem}>
                <div>
                  <h3>Phone</h3>
                  <p>{lightingsound.phone}</p>
                </div>
              </div>
              <div className={styles.detailItem}>
                <div>
                  <h3>Address</h3>
                  <p>{lightingsound.address}</p>
                </div>
              </div>
              {/* <div className={styles.detailItem}>
                <div>
                  <h3>Rating</h3>
                  <p>{lightingsound.ratings}/5</p>
                </div>
              </div>
              <div className={styles.detailItem}>
                <div>
                  <h3>Status</h3>
                  <p>{lightingsound.isVerified ? 'Verified' : 'Not Verified'}</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        <div className={styles.descriptionSection}>
          <h2 className={styles.sectionTitle}>Description</h2>
          <div className={styles.description}>{lightingsound.description}</div>
        </div>

        {lightingsound.galleryImages?.length > 0 && (
          <section className={styles.gallerySection}>
            <h2 className={styles.sectionTitle}>Gallery</h2>
            <div className={styles.galleryGrid}>
              {lightingsound.galleryImages.map((item, index) => (
                <div key={index} className={styles.card}>
                  <img
                    src={item.lightingpic}
                    alt={`Gallery image ${index + 1}`}
                  />
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
    <div
      className={styles.modalContent}
      onClick={(e) => e.stopPropagation()}
    >
      <button className={styles.closeButton} onClick={closeImageModal}>
        ×
      </button>

      <button className={styles.arrowLeft} onClick={showPrevImage}>
        &#10094;
      </button>

      <img
        src={lightingsound.galleryImages[selectedImageIndex]?.lightingpic}
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

export default VendorLightingAndSoundDetail;
