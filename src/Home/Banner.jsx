import { Box, Card, Grid } from "@mui/material";
import "../App.css";
const Banner = () => {
  return (
    <div>
      <div container>
        <div xs={12} item>
          <div className="mainContainerBanner">
            <div
              className="bannerdiv1"
              xs={8}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <h1 className="text1banner">
                Unlock Your Business's Potential with Our Blog Posting
              </h1>
              <p className="text2banner">
                Easily grow your business and reach new audiences by posting
                your blogs on our website. With our SEO optimisation and
                targeted traffic, your business will get the online exposure it
                needs to thrive. Contact us & Start blogging your way to success
                now!
              </p>
            </div>
            <div className="bannerdiv2" xs={12}>
              <div className="contactus">
                <p>Contact us</p>
              </div>
              <div className="exploreblogs">
                <p>Explore Blogs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
