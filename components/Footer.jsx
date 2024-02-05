/** @format */
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function Footer() {
  return (
    <div className='container flex flex-col gap-2 p-4 font-normal'>
      <div className='flex flex-row gap-2'>
        <div>
          <InstagramIcon />
        </div>
        <div>
          <TwitterIcon />
        </div>
        <div>
          <FacebookIcon />
        </div>
      </div>
      <div>
        <p>© 2024 ReelViews Ltd. All rights reserved.</p>
      </div>
    </div>
  );
}
