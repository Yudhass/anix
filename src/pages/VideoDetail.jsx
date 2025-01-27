import "../assets/detailVideo.css";
// import { useParams } from "react-router-dom";
import Header from "../components/user/Header";
import Sidebar from "../components/user/Sidebar";

const VideoDetail = () => {
//   const { id, slug } = useParams();
  return (
    <>
      <div>
        <Header />
        <Sidebar />
      </div>
      <div className="main-content pt-5 mt-4">
        <div className="container-fluid px-4">
          <div className="row">
            <div className="col-lg-8">
              <div className="video-container">
                <iframe
                  src="https://www.youtube.com/embed/your-video-id"
                  allowfullscreen
                ></iframe>
              </div>

              <div className="video-info-container">
                <h5>Contrary to popular belief, Lorem Ipsum (2020) is not.</h5>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="meta-info">
                    2,729,347 views • Aug 10, 2020
                  </span>
                  <div className="d-flex gap-3">
                    <button className="btn btn-dark">
                      <i className="fas fa-thumbs-up me-2"></i>Like
                    </button>
                    <button className="btn btn-dark">
                      <i className="fas fa-share me-2"></i>Share
                    </button>
                  </div>
                </div>

                <div className="channel-info">
                  <img
                    src="https://www.mediahijau.com/public/uploads/berita/Berita_241306110627_kuda-liar-kembali-ke-kazakhstan-setelah-menghilang-dua-abad.jpg"
                    width="48"
                    className="channel-avatar"
                    alt="Channel avatar"
                  />
                  <div className="flex-grow-1">
                    <h6 className="mb-0">
                      Osahan Channel{" "}
                      <i className="fas fa-check-circle verified-badge"></i>
                    </h6>
                    <span className="meta-info">1.4M subscribers</span>
                  </div>
                  <button className="btn btn-danger subscribe-btn">
                    Subscribe
                  </button>
                </div>

                <p className="video-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              <div className="row mt-4">
                <h6>More Videos</h6>
                <div className="col-6 mb-3">
                  <div className="card bg-dark text-white">
                    <img
                      src="https://www.mediahijau.com/public/uploads/berita/Berita_241306110627_kuda-liar-kembali-ke-kazakhstan-setelah-menghilang-dua-abad.jpg"
                      className="card-img-top"
                      alt="Video Thumbnail"
                    />
                    <div className="card-body">
                      <h6 className="card-title">Video Title 1</h6>
                      <p className="card-text">1.2M views • 2 months ago</p>
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="card bg-dark text-white">
                    <img
                      src="https://www.mediahijau.com/public/uploads/berita/Berita_241306110627_kuda-liar-kembali-ke-kazakhstan-setelah-menghilang-dua-abad.jpg"
                      className="card-img-top"
                      alt="Video Thumbnail"
                    />
                    <div className="card-body">
                      <h6 className="card-title">Video Title 1</h6>
                      <p className="card-text">1.2M views • 2 months ago</p>
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="card bg-dark text-white">
                    <img
                      src="https://www.mediahijau.com/public/uploads/berita/Berita_241306110627_kuda-liar-kembali-ke-kazakhstan-setelah-menghilang-dua-abad.jpg"
                      className="card-img-top"
                      alt="Video Thumbnail"
                    />
                    <div className="card-body">
                      <h6 className="card-title">Video Title 1</h6>
                      <p className="card-text">1.2M views • 2 months ago</p>
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="card bg-dark text-white">
                    <img
                      src="https://www.mediahijau.com/public/uploads/berita/Berita_241306110627_kuda-liar-kembali-ke-kazakhstan-setelah-menghilang-dua-abad.jpg"
                      className="card-img-top"
                      alt="Video Thumbnail"
                    />
                    <div className="card-body">
                      <h6 className="card-title">Video Title 1</h6>
                      <p className="card-text">1.2M views • 2 months ago</p>
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="card bg-dark text-white">
                    <img
                      src="https://www.mediahijau.com/public/uploads/berita/Berita_241306110627_kuda-liar-kembali-ke-kazakhstan-setelah-menghilang-dua-abad.jpg"
                      className="card-img-top"
                      alt="Video Thumbnail"
                    />
                    <div className="card-body">
                      <h6 className="card-title">Video Title 1</h6>
                      <p className="card-text">1.2M views • 2 months ago</p>
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="card bg-dark text-white">
                    <img
                      src="https://www.mediahijau.com/public/uploads/berita/Berita_241306110627_kuda-liar-kembali-ke-kazakhstan-setelah-menghilang-dua-abad.jpg"
                      className="card-img-top"
                      alt="Video Thumbnail"
                    />
                    <div className="card-body">
                      <h6 className="card-title">Video Title 1</h6>
                      <p className="card-text">1.2M views • 2 months ago</p>
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="card bg-dark text-white">
                    <img
                      src="https://www.mediahijau.com/public/uploads/berita/Berita_241306110627_kuda-liar-kembali-ke-kazakhstan-setelah-menghilang-dua-abad.jpg"
                      className="card-img-top"
                      alt="Video Thumbnail"
                    />
                    <div className="card-body">
                      <h6 className="card-title">Video Title 1</h6>
                      <p className="card-text">1.2M views • 2 months ago</p>
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="card bg-dark text-white">
                    <img
                      src="https://www.mediahijau.com/public/uploads/berita/Berita_241306110627_kuda-liar-kembali-ke-kazakhstan-setelah-menghilang-dua-abad.jpg"
                      className="card-img-top"
                      alt="Video Thumbnail"
                    />
                    <div className="card-body">
                      <h6 className="card-title">Video Title 1</h6>
                      <p className="card-text">1.2M views • 2 months ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="mb-0">Up Next</h6>
                <div className="dropdown">
                  <button
                    className="btn btn-dark btn-sm dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                  >
                    Sort by
                  </button>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li>
                      <a className="dropdown-item" href="#">
                        Most Recent
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Most Popular
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="row">
                <div className="col-6 mb-3">
                  <div className="card bg-dark text-white">
                    <img
                      src="https://www.mediahijau.com/public/uploads/berita/Berita_241306110627_kuda-liar-kembali-ke-kazakhstan-setelah-menghilang-dua-abad.jpg"
                      className="card-img-top"
                      alt="Video Thumbnail"
                    />
                    <div className="card-body">
                      <h6 className="card-title">Sidebar Video 1</h6>
                      <p className="card-text">500K views</p>
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="card bg-dark text-white">
                    <img
                      src="https://www.mediahijau.com/public/uploads/berita/Berita_241306110627_kuda-liar-kembali-ke-kazakhstan-setelah-menghilang-dua-abad.jpg"
                      className="card-img-top"
                      alt="Video Thumbnail"
                    />
                    <div className="card-body">
                      <h6 className="card-title">Sidebar Video 2</h6>
                      <p className="card-text">600K views</p>
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="card bg-dark text-white">
                    <img
                      src="https://www.mediahijau.com/public/uploads/berita/Berita_241306110627_kuda-liar-kembali-ke-kazakhstan-setelah-menghilang-dua-abad.jpg"
                      className="card-img-top"
                      alt="Video Thumbnail"
                    />
                    <div className="card-body">
                      <h6 className="card-title">Sidebar Video 1</h6>
                      <p className="card-text">500K views</p>
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="card bg-dark text-white">
                    <img
                      src="https://www.mediahijau.com/public/uploads/berita/Berita_241306110627_kuda-liar-kembali-ke-kazakhstan-setelah-menghilang-dua-abad.jpg"
                      className="card-img-top"
                      alt="Video Thumbnail"
                    />
                    <div className="card-body">
                      <h6 className="card-title">Sidebar Video 2</h6>
                      <p className="card-text">600K views</p>
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="card bg-dark text-white">
                    <img
                      src="https://www.mediahijau.com/public/uploads/berita/Berita_241306110627_kuda-liar-kembali-ke-kazakhstan-setelah-menghilang-dua-abad.jpg"
                      className="card-img-top"
                      alt="Video Thumbnail"
                    />
                    <div className="card-body">
                      <h6 className="card-title">Sidebar Video 1</h6>
                      <p className="card-text">500K views</p>
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="card bg-dark text-white">
                    <img
                      src="https://www.mediahijau.com/public/uploads/berita/Berita_241306110627_kuda-liar-kembali-ke-kazakhstan-setelah-menghilang-dua-abad.jpg"
                      className="card-img-top"
                      alt="Video Thumbnail"
                    />
                    <div className="card-body">
                      <h6 className="card-title">Sidebar Video 2</h6>
                      <p className="card-text">600K views</p>
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="card bg-dark text-white">
                    <img
                      src="https://www.mediahijau.com/public/uploads/berita/Berita_241306110627_kuda-liar-kembali-ke-kazakhstan-setelah-menghilang-dua-abad.jpg"
                      className="card-img-top"
                      alt="Video Thumbnail"
                    />
                    <div className="card-body">
                      <h6 className="card-title">Sidebar Video 1</h6>
                      <p className="card-text">500K views</p>
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="card bg-dark text-white">
                    <img
                      src="https://www.mediahijau.com/public/uploads/berita/Berita_241306110627_kuda-liar-kembali-ke-kazakhstan-setelah-menghilang-dua-abad.jpg"
                      className="card-img-top"
                      alt="Video Thumbnail"
                    />
                    <div className="card-body">
                      <h6 className="card-title">Sidebar Video 2</h6>
                      <p className="card-text">600K views</p>
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="card bg-dark text-white">
                    <img
                      src="https://www.mediahijau.com/public/uploads/berita/Berita_241306110627_kuda-liar-kembali-ke-kazakhstan-setelah-menghilang-dua-abad.jpg"
                      className="card-img-top"
                      alt="Video Thumbnail"
                    />
                    <div className="card-body">
                      <h6 className="card-title">Sidebar Video 1</h6>
                      <p className="card-text">500K views</p>
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="card bg-dark text-white">
                    <img
                      src="https://www.mediahijau.com/public/uploads/berita/Berita_241306110627_kuda-liar-kembali-ke-kazakhstan-setelah-menghilang-dua-abad.jpg"
                      className="card-img-top"
                      alt="Video Thumbnail"
                    />
                    <div className="card-body">
                      <h6 className="card-title">Sidebar Video 2</h6>
                      <p className="card-text">600K views</p>
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="card bg-dark text-white">
                    <img
                      src="https://www.mediahijau.com/public/uploads/berita/Berita_241306110627_kuda-liar-kembali-ke-kazakhstan-setelah-menghilang-dua-abad.jpg"
                      className="card-img-top"
                      alt="Video Thumbnail"
                    />
                    <div className="card-body">
                      <h6 className="card-title">Sidebar Video 1</h6>
                      <p className="card-text">500K views</p>
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="card bg-dark text-white">
                    <img
                      src="https://www.mediahijau.com/public/uploads/berita/Berita_241306110627_kuda-liar-kembali-ke-kazakhstan-setelah-menghilang-dua-abad.jpg"
                      className="card-img-top"
                      alt="Video Thumbnail"
                    />
                    <div className="card-body">
                      <h6 className="card-title">Sidebar Video 2</h6>
                      <p className="card-text">600K views</p>
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="card bg-dark text-white">
                    <img
                      src="https://www.mediahijau.com/public/uploads/berita/Berita_241306110627_kuda-liar-kembali-ke-kazakhstan-setelah-menghilang-dua-abad.jpg"
                      className="card-img-top"
                      alt="Video Thumbnail"
                    />
                    <div className="card-body">
                      <h6 className="card-title">Sidebar Video 1</h6>
                      <p className="card-text">500K views</p>
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="card bg-dark text-white">
                    <img
                      src="https://www.mediahijau.com/public/uploads/berita/Berita_241306110627_kuda-liar-kembali-ke-kazakhstan-setelah-menghilang-dua-abad.jpg"
                      className="card-img-top"
                      alt="Video Thumbnail"
                    />
                    <div className="card-body">
                      <h6 className="card-title">Sidebar Video 2</h6>
                      <p className="card-text">600K views</p>
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="card bg-dark text-white">
                    <img
                      src="https://www.mediahijau.com/public/uploads/berita/Berita_241306110627_kuda-liar-kembali-ke-kazakhstan-setelah-menghilang-dua-abad.jpg"
                      className="card-img-top"
                      alt="Video Thumbnail"
                    />
                    <div className="card-body">
                      <h6 className="card-title">Sidebar Video 1</h6>
                      <p className="card-text">500K views</p>
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="card bg-dark text-white">
                    <img
                      src="https://www.mediahijau.com/public/uploads/berita/Berita_241306110627_kuda-liar-kembali-ke-kazakhstan-setelah-menghilang-dua-abad.jpg"
                      className="card-img-top"
                      alt="Video Thumbnail"
                    />
                    <div className="card-body">
                      <h6 className="card-title">Sidebar Video 2</h6>
                      <p className="card-text">600K views</p>
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="card bg-dark text-white">
                    <img
                      src="https://www.mediahijau.com/public/uploads/berita/Berita_241306110627_kuda-liar-kembali-ke-kazakhstan-setelah-menghilang-dua-abad.jpg"
                      className="card-img-top"
                      alt="Video Thumbnail"
                    />
                    <div className="card-body">
                      <h6 className="card-title">Sidebar Video 1</h6>
                      <p className="card-text">500K views</p>
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="card bg-dark text-white">
                    <img
                      src="https://www.mediahijau.com/public/uploads/berita/Berita_241306110627_kuda-liar-kembali-ke-kazakhstan-setelah-menghilang-dua-abad.jpg"
                      className="card-img-top"
                      alt="Video Thumbnail"
                    />
                    <div className="card-body">
                      <h6 className="card-title">Sidebar Video 2</h6>
                      <p className="card-text">600K views</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoDetail;
