import React from "react";

const BannerItem = ({ slide }) => {
  const { image, prev, id, next } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full ">
      <div className="carousel-img">
        <img className="w-full rounded-xl" src={image} alt="" />
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
        <h1 className="text-6xl font-bold text-white">
          Affordable <br /> Price For Car <br /> Servicing
        </h1>
      </div>
      <div className="absolute flex justify-end w-2/5 transform -translate-y-1/2 left-24 top-1/2">
        <p className="text-xl text-white">
          There are many variations of passages of available, but the majority
          have suffered alteration in some form
        </p>
      </div>
      <div className="absolute flex justify-start w-2/5 transform -translate-y-1/2 left-24 top-3/4">
        <button style={{ background: "#FF3811" }} className="btn mr-5">
          Discover More
        </button>
        <button class="btn btn-outline btn-warning">Latest Project</button>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href={`#slide${prev}`} className="btn btn-circle mr-5">
          ❮
        </a>
        <a
          style={{ background: "#FF3811" }}
          href={`#slide${next}`}
          className="btn btn-circle"
        >
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
