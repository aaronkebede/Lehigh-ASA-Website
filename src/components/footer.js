/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { RiHeart2Line } from "react-icons/ri"

const Footer = () => (
  <footer
    className="site-footer"
    sx={{
      bg: "siteColor",
    }}
  >
    <div className="container">
      <p>
        A Lehigh ASA Production, Made with{" "}
        <span className="icon -love">
          <RiHeart2Line />
        </span>{" "}
        at <Link to="/">www.lehighasa.org</Link>
      </p>
    </div>
  </footer>
)

export default Footer
