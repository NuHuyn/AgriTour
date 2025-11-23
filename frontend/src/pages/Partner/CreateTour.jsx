import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PartnerTours.css";

const CreateTour = ({ user }) => {
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;

  const [form, setForm] = useState({
    tour_name: "",
    description: "",
    location: "",
    region_id: "",
    category_id: "",
    start_date: "",
    end_date: "",
    price: "",
    available_slots: "",
  });
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) {
      setImage(null);
      setPreview(null);
      return;
    }
    setImage(file);
    const reader = new FileReader();
    reader.onloadend = () => setPreview(reader.result);
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) return alert("Vui lòng đăng nhập trước!");

    // basic validation
    if (!form.tour_name || !form.location || !form.price) {
      return alert("Vui lòng điền tối thiểu tên tour, địa điểm và giá.");
    }

    const formData = new FormData();
    Object.keys(form).forEach((key) => formData.append(key, form[key]));
    if (image) formData.append("image", image);
    formData.append("created_by", user.user_id);
    formData.append("role", user.role); // backend quyết định status

    try {
      setLoading(true);
      const res = await fetch(`${API_URL}/tours`, {
        method: "POST",
        headers: { Authorization: `Bearer ${user.token}` },
        body: formData,
      });
      const data = await res.json();
      if (!res.ok) {
        alert(data.message || "Lỗi khi tạo tour");
      } else {
        alert(data.message || "Tạo tour thành công!");
        navigate("/partner/tours");
      }
    } catch (err) {
      console.error(err);
      alert("Lỗi server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="create-tour">
      <div className="create-inner">
        <h1>Create New Tour</h1>

        <form className="tour-form" onSubmit={handleSubmit}>

          <div className="form-row">
            <label>Tour name</label>
            <input type="text" name="tour_name" placeholder="Ex: Discover Hoi An" value={form.tour_name} onChange={handleChange} required />
          </div>

          <div className="form-row">
            <label>Description</label>
            <textarea name="description" placeholder="Short description" value={form.description} onChange={handleChange} rows={4} />
          </div>

          <div className="form-grid">
            <div className="form-col">
              <label>Location</label>
              <input type="text" name="location" placeholder="City / Province" value={form.location} onChange={handleChange} required />
            </div>

            <div className="form-col">
              <label>Region ID</label>
              <input type="number" name="region_id" placeholder="1" value={form.region_id} onChange={handleChange} />
            </div>

            <div className="form-col">
              <label>Category ID</label>
              <input type="number" name="category_id" placeholder="1" value={form.category_id} onChange={handleChange} />
            </div>

            <div className="form-col">
              <label>Available slots</label>
              <input type="number" name="available_slots" placeholder="10" value={form.available_slots} onChange={handleChange} />
            </div>
          </div>

          <div className="form-grid">
            <div className="form-col">
              <label>Start Date</label>
              <input type="date" name="start_date" value={form.start_date} onChange={handleChange} />
            </div>
            <div className="form-col">
              <label>End Date</label>
              <input type="date" name="end_date" value={form.end_date} onChange={handleChange} />
            </div>
            <div className="form-col">
              <label>Price (USD)</label>
              <input type="number" name="price" placeholder="0.00" value={form.price} onChange={handleChange} />
            </div>
            <div className="form-col file-col">
              <label>Image</label>
              <input type="file" accept="image/*" onChange={handleImage} />
            </div>
          </div>

          {preview && (
            <div className="image-preview">
              <img src={preview} alt="preview" />
            </div>
          )}

          <div className="form-actions">
            <button type="button" className="btn cancel" onClick={() => navigate(-1)}>Cancel</button>
            <button type="submit" className="btn primary" disabled={loading}>
              {loading ? "Creating..." : "Create Tour"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTour;
