import { useEffect } from "react";


import { initMarqueeeSlider } from "marqueee";
import "marqueee/style.css";

const Marquee = () => {
  useEffect(() => {
    initMarqueeeSlider("second-marquee-slider", {
      stopOnHover: true,
      dir: "right",
    }); // takes the marqee parent id.
  }, []);

  return (
    <div className="mt-[5rem]">
      <div
        id="second-marquee-slider"
        data-speed="5"
        data-space="4"
        style={{ marginTop: 30, }}
      >
        <div className="marquee-slider-wrapper">
          <div className="marquee-slider-slides-wrapper">
            <div className="marquee-slider-slide mx-[2rem]">
              <img
                width="200"
                height="200"
                src='https://imgs.search.brave.com/L22vpBZ7ArM6HUyVxsBkHcdkCzyVACL-6uGDOUUzg-s/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5naXRlbS5jb20v/cGltZ3MvbS8zLTMx/NDQ5X2ZsaXBrYXJ0/LWxvZ28tdHJhbnNw/YXJlbnQtcG5nLWZy/ZWUtZG93bmxvYWQt/c2VhcmNocG5nLWZs/aXBrYXJ0LnBuZw'
                alt="marqueee demo"
              />
            </div>
            <div className="marquee-slider-slide mx-[2rem]">
              <img
                width="200"
                height="200"
                src='https://imgs.search.brave.com/NfklA3GdKUHIhejnwdNZrVu0udo_so_x5qPitnZzZ1M/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLmtp/bmphLWltZy5jb20v/aW1hZ2UvdXBsb2Fk/L2NfZml0LHFfNjAs/d182NDUvODdmYzhh/NjVhNjMzM2MxYjZh/OTI3NzVjZDQ1MzQ4/NmIuanBn'
                alt="marqueee demo"
              />
            </div>
            <div className="marquee-slider-slide mx-[2rem]">
              <img
                 width="200"
                height="200"
                src='https://imgs.search.brave.com/tojJD9_CTMczQzLW1f5rNmM5XXivMCGdfUNy-Zgp3Fs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/YnVzaW5lc3NpbnNp/ZGVyLmluL3RodW1i/L21zaWQtNjAwODUz/MTgsd2lkdGgtNjAw/LGhlaWdodC00MjAv/NjAwODUzMTguanBn'
                alt="marqueee demo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Marquee;
