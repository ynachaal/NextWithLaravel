import Header from "../common/header";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faTrash } from '@fortawesome/free-solid-svg-icons'
import { faEye } from "@fortawesome/free-solid-svg-icons/faEye";

export default function Home() {
  return (
    <section className="container">
      <Header />
      <div className="container mt-5">
        <div className="col-lg-6 mx-auto">
          <div className="card rounded-4 shadow border-light">
            <div className="card-body">
              <h3 className="mb-4 text-center text-primary fw-bold">Create Form</h3>
              <form>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-floating mb-3">
                      <input type="text" className="form-control shadow-none" id="floatingName" placeholder="name" />
                      <label htmlFor="floatingName">Name</label>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-floating mb-3">
                      <input type="email" className="form-control shadow-none" id="floatingInput" placeholder="name@example.com" />
                      <label htmlFor="floatingInput">Email address</label>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-floating mb-3">
                      <input type="number" className="form-control shadow-none" id="floatingPhone" placeholder="Phone Number" />
                      <label htmlFor="floatingPhone">Phone Number</label>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-floating mb-3">
                      <input type="password" className="form-control shadow-none" id="floatingPassword" placeholder="Password" />
                      <label htmlFor="floatingPassword">Password</label>
                    </div>
                  </div>
                </div>
                <Link href="#" className="btn btn-primary primary_btn shadow-none col-md-4 mx-auto d-block"><FontAwesomeIcon icon={faPaperPlane} className="me-2 fa-paper-plane" /> Submit</Link>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-5 card rounded-4 shadow border-light p-3">
          <h3 className="mb-4 text-center text-primary fw-bold">Results</h3>
          <div className="table-responsive">
            <table className="table table-bordered mb-0 table-hover">
              <thead className="table-dark">
                <tr>
                  <th className="col">#</th>
                  <th className="col-3">Name</th>
                  <th className="col-3">Email Address</th>
                  <th className="col-3">Phone Number</th>
                  <th className="col-auto text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>0987654321</td>
                  <td>
                    <div className="d-flex gap-2 justify-content-center">
                      <button className="btn btn-sm btn-success bg-success shadow-none rounded-pill bg-gradient">
                        <FontAwesomeIcon icon={faEye} />
                      </button>
                      <button className="btn btn-sm btn-danger bg-danger shadow-none rounded-pill bg-gradient">
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>0987654321</td>
                  <td>
                    <div className="d-flex gap-2 justify-content-center">
                      <button className="btn btn-sm btn-success bg-success shadow-none rounded-pill bg-gradient">
                        <FontAwesomeIcon icon={faEye} />
                      </button>
                      <button className="btn btn-sm btn-danger bg-danger shadow-none rounded-pill bg-gradient">
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>3</th>
                  <td>Larry the Bird</td>
                  <td>@twitter</td>
                  <td>0987654321</td>
                  <td>
                    <div className="d-flex gap-2 justify-content-center">
                      <button className="btn btn-sm btn-success bg-success shadow-none rounded-pill bg-gradient">
                        <FontAwesomeIcon icon={faEye} />
                      </button>
                      <button className="btn btn-sm btn-danger bg-danger shadow-none rounded-pill bg-gradient">
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
