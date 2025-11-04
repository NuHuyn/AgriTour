import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PartnerTours.css"; // dùng chung CSS

const CreateTour = ({ user }) => {
  const navigate = useNavigate();
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
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleImage = (e) => setImage(e.target.files[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) return alert("Vui lòng đăng nhập trước!");

    const formData = new FormData();
    Object.keys(form).forEach((key) => formData.append(key, form[key]));
    formData.append("image", image);
    formData.append("created_by", user.user_id);
    formData.append("status", "pending");

    try {
      setLoading(true);
      const res = await fetch("http://localhost:8081/api/tours", {
        method: "POST",
        headers: { Authorization: `Bearer ${user.token}` },
        body: formData,
      });
      const data = await res.json();
      alert(data.message || "Tour created successfully!");
      setLoading(false);
      navigate("/partner/tours"); // quay lại trang partner tours
    } catch (err) {
      console.error(err);
      alert("Lỗi khi tạo tour");
      setLoading(false);
    }
  };

  return (
    <div className="create-tour">
      <h1>Create New Tour</h1>
      <form className="tour-form" onSubmit={handleSubmit}>
        <input type="text" name="tour_name" placeholder="Tour name" onChange={handleChange} required />
        <textarea name="description" placeholder="Description" onChange={handleChange} required />
        <input type="text" name="location" placeholder="Location" onChange={handleChange} required />
        <input type="number" name="region_id" placeholder="Region ID" onChange={handleChange} required />
        <input type="number" name="category_id" placeholder="Category ID" onChange={handleChange} required />
        <input type="date" name="start_date" onChange={handleChange} required />
        <input type="date" name="end_date" onChange={handleChange} required />
        <input type="number" name="price" placeholder="Price" onChange={handleChange} required />
        <input type="number" name="available_slots" placeholder="Available Slots" onChange={handleChange} required />
        <input type="file" accept="image/*" onChange={handleImage} />

        <button type="submit" disabled={loading}>
          {loading ? "Uploading..." : "Create Tour"}
        </button>
      </form>
    </div>
  );
};

export default CreateTour;
