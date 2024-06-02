import React, { useEffect } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import rate from "../../images/rate.png";
import Pagination from "../Uitily/Pagination";
import RateItem from "./RateItem";
import RatePost from "./RatePost";
import useRates from "../../hook/rate/useRate";
import { useParams } from "react-router-dom";

const RateContainer = () => {
  const { fetchUser, fetchRates, rates, loading, addLoading } = useRates();
  const { id } = useParams();

  useEffect(() => {
    fetchRates(id);
  }, [id]);

  return (
    <Container>
      <Row>
        <Col className="d-flex">
          <div className="sub-tile d-inline p-1">Yorumlar</div>
          <img className="mt-2" src={rate} alt="" height="16px" width="16px" />
          <div className="cat-rate d-inline p-1 pt-2">4.3</div>
          <div className="rate-count d-inline p-1 pt-2">
            (160 değerlendirme)
          </div>
        </Col>
      </Row>
      <RatePost addLoading={addLoading} />
      {loading ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ minHeight: "200px" }}
        >
          <Spinner animation="border" />
        </div>
      ) : (
        rates.map((rate, index) => {
          return <RateItem rate={rate} key={index} />;
        })
      )}
      <Pagination />
    </Container>
  );
};

export default RateContainer;
