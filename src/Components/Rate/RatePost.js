import React, { useEffect, useState } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import useRates from "../../hook/rate/useRate";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const RatePost = ({ addLoading }) => {
  const { fetchUser, user, postRate } = useRates();
  const { id } = useParams();
  const [comment, setComment] = useState("");
  const [stars, setStars] = useState(5);
  const handleForm = (e) => {
    e.preventDefault();
    if (comment.trim() === "") {
      toast.error("Comment cannot be empty.");
      return;
    }
    postRate(comment, stars, id);
    setComment("");
    setStars(5);
  };

  const setting = {
    size: 20,
    count: 5,
    color: "#979797",
    activeColor: "#ffc107",
    value: 7.5,
    a11y: true,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
    onChange: (newValue) => {
      setStars(newValue);
    },
  };

  return (
    <div>
      <Row className="mt-3 ">
        <Col sm="12" className="me-5 d-flex">
          <div className="rate-name  d-inline ms-2 mt-1 ">kullanici adi</div>
          <ReactStars {...setting} />
        </Col>
      </Row>
      <Row className="border-bottom mx-2">
        <Col className="d-felx me-4 pb-2">
          <form onSubmit={handleForm}>
            <textarea
              className="form-control"
              id="textAreaExample"
              rows="4"
              style={{ background: "#fff" }}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
            <div className=" d-flex justify-content-start al">
              <button
                type="submit"
                className="btn btn-lg mt-3"
                style={{ background: "#1ececa", color: "white" }}
              >
                {addLoading ? (
                  <Spinner animation="border" size="sm" />
                ) : (
                  "Yorum Ekle"
                )}
              </button>
            </div>
          </form>
        </Col>
      </Row>
    </div>
  );
};

export default RatePost;
