import Image from "next/image";
import Header from "../common/header";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faEye } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <section className="container">
      <Header />
      <div className="container mt-5">
        <div className="col-lg-6 mx-auto">
          <div className="card rounded-4 shadow border-light">
            <div className="card-body">
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
                <Link href="#" className="btn btn-primary shadow-none">Submit</Link>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-5 card rounded-4 shadow border-light p-3">
          <h3 className="mb-3 text-center">Results</h3>
          <div className="table-responsive">
            <table className="table table-dark table-striped table-bordered mb-0">
              <thead>
                <tr>
                  <th>#</th>
                  <th>First</th>
                  <th>Last</th>
                  <th>Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th>2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th>3</th>
                  <td>Larry the Bird</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
