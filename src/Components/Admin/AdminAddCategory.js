import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import avatar from "../../images/avatar.png";
import { v4 as uuidv4 } from "uuid"; // Import the uuid library
import useCategory from "../../hook/category/useCategory";

const AdminAddCategory = () => {
  const [categoryName, setCategoryName] = useState("");
  const [description, setDescription] = useState("");
  const { postCategory } = useCategory();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const categoryId = uuidv4();
    const formData = {
      categoryName,
      description,
      categoryId: categoryId,
    };
    postCategory(formData);
  };

  return (
    <div>
      <div className="row">
        <div>
          <div className="card mb-4">
            <div className="card-body">
              <form onSubmit={handleFormSubmit}>
                <div className="form-outline mb-4 d-grid">
                  <label className="form-label mb-3" htmlFor="form7Example7">
                    Kategorinin Resmi
                  </label>
                  <img src={avatar} alt="" height="100px" width="120px" />
                </div>
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form7Example3">
                    Katagorinin adı
                  </label>
                  <input
                    type="text"
                    id="form7Example3"
                    className="form-control"
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                  />
                </div>
                <label className="form-label" htmlFor="form7Example7">
                  description
                </label>
                <textarea
                  className="form-control"
                  id="form7Example7"
                  rows="4"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                <div className="text-center text-lg-start mt-2 pt-2">
                  <button
                    type="submit"
                    className="btn btn-lg"
                    style={{
                      paddingLeft: "2.5rem",
                      paddingRight: "2.5rem",
                      background: "#1ececa",
                      color: "white",
                    }}
                  >
                    Kaydet
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAddCategory;
