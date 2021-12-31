import * as React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import { GatsbyImage } from "gatsby-plugin-image";

const Gallery = ({ images }) => (
  <div>
    {images.map((image) => (
      <div key={v4()}>
        {image?.url ? (
          <img
            src={image}
            objectFit={"cover"}
            objectPosition={"top left"}
            style={{
              gridArea: "1/1",
              // You can set a maximum height for the image, if you wish.
              height: "400px",
              width: "100%",
            }}
            // You can optionally force an aspect ratio for the generated image
            aspectratio={3 / 1}
            // This is a presentational image, so the alt should be an empty string
            alt=""
            formats={["auto", "webp", "avif"]}
          />
        ) : (
          <GatsbyImage
            image={image}
            objectFit={"cover"}
            objectPosition={"top left"}
            style={{
              gridArea: "1/1",
              // You can set a maximum height for the image, if you wish.
              maxHeight: "400px",
            }}
            layout="fullWidth"
            // You can optionally force an aspect ratio for the generated image
            aspectratio={3 / 1}
            // This is a presentational image, so the alt should be an empty string
            alt=""
            formats={["auto", "webp", "avif"]}
          />
        )}
      </div>
    ))}
  </div>
);

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object, PropTypes.string])),
  title: PropTypes.string,
  discription: PropTypes.string,
};

export default Gallery;
