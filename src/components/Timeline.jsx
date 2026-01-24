import { useState } from "react";
import TimelineDetail from "./TimelineDetail.jsx";
import timelineDetailData from "../data/time-line.js";

export default function Timeline() {
  const [timelineDetail, setTimelineDetail] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const getCompany = (id) => {
    const detail = timelineDetailData.find((item) => item.id === id) ?? null;
    setTimelineDetail(detail);
    setShowModal(true);
  };

  return (
    <>
      <TimelineDetail
        timelineDetail={timelineDetail}
        showModal={showModal}
        onClose={() => setShowModal(false)}
      />
      <br />
      <div className="timeline_container">
        <h3>BC</h3>
        <div className="gap"></div>
        <div onClick={() => getCompany(5)}>
          <img
            src="/yeo.jpg"
            alt=""
            className="rounded_img company_icon img_contain"
          />
          <p>2016</p>
        </div>
        <div className="gap"></div>
        <div onClick={() => getCompany(4)}>
          <img
            src="/aselsan.jpeg"
            alt=""
            className="rounded_img company_icon img_contain"
          />
          <p>2017</p>
        </div>
        <div className="gap"></div>
        <div onClick={() => getCompany(3)}>
          <img src="/iu.png" alt="" className="rounded_img company_icon img_contain" />
          <p>2017</p>
        </div>
        <div className="gap"></div>
        <div onClick={() => getCompany(2)}>
          <img
            src="/nebim.webp"
            alt=""
            className="rounded_img company_icon img_contain"
          />
          <p>2018</p>
        </div>
        <div className="gap"></div>
        <div onClick={() => getCompany(1)}>
          <img
            src="/mercedes-benz.jpeg"
            alt=""
            className="rounded_img company_icon last_border"
          />
          <p>2022</p>
        </div>
        <div className="gap last"></div>
        <h3>&#8734;</h3>
      </div>
    </>
  );
}
