import "./sidebar.scss";

const Sidebar = () => {
  return (
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block sidebar collapse shadow-sm bg-white">
      <div className="position-sticky pt-3">
        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 py-2 mt-4 text-uppercase">Navigation</h6>
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              <i class="bi bi-columns-gap me-3"></i>
              Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i class="bi bi-card-checklist me-3"></i>
              Orders
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i class="bi bi-box-seam me-3"></i>
              Products
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i class="bi bi-people me-3"></i>
              Customers
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i class="bi bi-clipboard2-data me-3"></i>
              Reports
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i class="bi bi-puzzle me-3"></i>
              Integrations
            </a>
          </li>
        </ul>
        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 py-2 mt-4 text-uppercase">Apps</h6>
        <ul className="nav flex-column mb-2">
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i class="bi bi-calendar-week me-3"></i>
              Calendar
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i class="bi bi-chat-left-dots me-3"></i>
              Chat
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i class="bi bi-shop me-3"></i>
              Ecommerce
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i class="bi bi-envelope me-3"></i>
              Email
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
