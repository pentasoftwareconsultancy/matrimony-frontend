import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './JewelryForm.module.css';

const JewelryForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [vendorData, setVendorData] = useState({
    title: '',
    name: '',
    email: '',
    phone: '',
    address: '',
    jewelryimgUrl: [],
    galleryImages: [{ title: '', description: '', jewelrypic: null, feedback: '' }],
    description: '',
    isVerified: false,
    ratings: 0,
  });
  const [successMessage, setSuccessMessage] = useState(false);

  useEffect(() => {
    if (id) {
      const fetchVendor = async () => {
        try {
          const response = await axios.get(`http://localhost:8000/api/v1/jewelry/${id}`);
          const data = response.data.data || response.data;
          setVendorData({
            ...data,
            jewelryimgUrl: data.jewelryimgUrl || [],
            galleryImages: data.galleryImages.length > 0
              ? data.galleryImages
              : [{ title: '', description: '', jewelrypic: null, feedback: '' }],
          });
        } catch (error) {
          console.error('Error fetching jewelry vendor:', error);
        }
      };
      fetchVendor();
    }
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVendorData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleGalleryImageChange = (e, index, field) => {
    const { value } = e.target;
    const updatedGalleryImages = [...vendorData.galleryImages];
    updatedGalleryImages[index][field] = value;
    setVendorData({ ...vendorData, galleryImages: updatedGalleryImages });
  };

  const handleFileChange = (e, fieldName, index = null) => {
    const file = e.target.files[0];
    if (file) {
      if (index !== null) {
        const updatedGalleryImages = [...vendorData.galleryImages];
        updatedGalleryImages[index].jewelrypic = file;
        setVendorData({ ...vendorData, galleryImages: updatedGalleryImages });
      } else {
        setVendorData({ ...vendorData, [fieldName]: [file] });
      }
    }
  };

  const handleAddGalleryImage = () => {
    setVendorData((prevData) => ({
      ...prevData,
      galleryImages: [
        ...prevData.galleryImages,
        { title: '', description: '', jewelrypic: null, feedback: '' },
      ],
    }));
  };

  const handleRemoveGalleryImage = (index) => {
    const updatedGalleryImages = vendorData.galleryImages.filter((_, i) => i !== index);
    setVendorData({ ...vendorData, galleryImages: updatedGalleryImages });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', vendorData.title);
    formData.append('name', vendorData.name);
    formData.append('email', vendorData.email);
    formData.append('phone', vendorData.phone);
    formData.append('address', vendorData.address);
    formData.append('description', vendorData.description);
    formData.append('isVerified', vendorData.isVerified);
    formData.append('ratings', vendorData.ratings);

    if (vendorData.jewelryimgUrl[0]) {
      formData.append('jewelryimgUrl', vendorData.jewelryimgUrl[0]);
    }

    vendorData.galleryImages.forEach((galleryImage, index) => {
      if (galleryImage.jewelrypic) {
        formData.append(`galleryImages[${index}][jewelrypic]`, galleryImage.jewelrypic);
      }
      if (galleryImage.title) {
        formData.append(`galleryImages[${index}][title]`, galleryImage.title);
      }
      if (galleryImage.description) {
        formData.append(`galleryImages[${index}][description]`, galleryImage.description);
      }
      if (galleryImage.feedback) {
        formData.append(`galleryImages[${index}][feedback]`, galleryImage.feedback);
      }
    });

    try {
      if (id) {
        await axios.put(`http://localhost:8000/api/v1/jewelry/${id}`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
      } else {
        await axios.post('http://localhost:8000/api/v1/jewelry/create', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
      }
      setSuccessMessage(true);
      setTimeout(() => {
        setSuccessMessage(false);
        navigate('/');
      }, 3000);
    } catch (error) {
      console.error('Error submitting jewelry vendor:', error);
      alert(`Failed to ${id ? 'update' : 'create'} Jewelry vendor: ${error.response?.data?.message || error.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2>{id ? 'Edit Jewelry Vendor' : 'Add New Jewelry Vendor'}</h2>
      <div className={styles.main}>
        <div className={styles.inputGroup}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={vendorData.title}
            onChange={handleInputChange}
            placeholder="Title"
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={vendorData.name}
            onChange={handleInputChange}
            required
            placeholder="Vendor Name"
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={vendorData.email}
            onChange={handleInputChange}
            required
            placeholder="Vendor Email"
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            name="phone"
            value={vendorData.phone}
            onChange={handleInputChange}
            required
            placeholder="Vendor Phone"
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            value={vendorData.address}
            onChange={handleInputChange}
            required
            placeholder="Vendor Address"
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            value={vendorData.description}
            onChange={handleInputChange}
            placeholder="Description"
            rows="4"
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="jewelryimgUrl">Profile Picture</label>
          <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, 'jewelryimgUrl')} />
          {vendorData.jewelryimgUrl[0] && typeof vendorData.jewelryimgUrl[0] === 'string' && (
            <img src={vendorData.jewelryimgUrl[0]} alt="Profile Preview" className={styles.previewImage} />
          )}
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="ratings">Ratings</label>
          <input
            type="number"
            name="ratings"
            value={vendorData.ratings}
            onChange={handleInputChange}
            min="0"
            max="5"
            step="0.1"
            placeholder="Ratings (0-5)"
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="isVerified">Verified</label>
          <input
            type="checkbox"
            name="isVerified"
            checked={vendorData.isVerified}
            onChange={() => setVendorData((prev) => ({ ...prev, isVerified: !prev.isVerified }))}
          />
        </div>
      </div>
      <div className={styles.inputGroup}>
        <label>Gallery Images</label>
        <div className={styles.addgallery}>
          {vendorData.galleryImages.map((image, index) => (
            <div key={index} className={styles.galleryItem}>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange(e, 'galleryImages', index)}
              />
              {image.jewelrypic && typeof image.jewelrypic === 'string' && (
                <img src={image.jewelrypic} alt="Gallery Preview" className={styles.previewImage} />
              )}
              <input
                type="text"
                value={image.title}
                onChange={(e) => handleGalleryImageChange(e, index, 'title')}
                placeholder="Image Title"
                className={styles.file}
              />
              <input
                type="text"
                value={image.description}
                onChange={(e) => handleGalleryImageChange(e, index, 'description')}
                placeholder="Image Description"
                className={styles.file}
              />
              <input
                type="text"
                value={image.feedback}
                onChange={(e) => handleGalleryImageChange(e, index, 'feedback')}
                placeholder="Feedback"
                className={styles.file}
              />
              <button
                type="button"
                className={styles.removeButton}
                onClick={() => handleRemoveGalleryImage(index)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
        <button type="button" className={styles.addButton} onClick={handleAddGalleryImage}>
          Add Gallery Image
        </button>
      </div>
      <button className={styles.submitButton} type="submit">
        {id ? 'Update Jewelry Vendor' : 'Submit Jewelry Vendor'}
      </button>
      {successMessage && (
        <div className={styles.successPopup}>
          <p>Jewelry Vendor {id ? 'updated' : 'created'} successfully!</p>
        </div>
      )}
    </form>
  );
};

export default JewelryForm;
