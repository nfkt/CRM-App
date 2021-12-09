import Dashboard from "../../Components/Dashboard/Dashboard";
import Chart from "./Chart/DonoughtChart";
import PieChart from "./Chart/PieChart";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


function SitesVisitsChartView() {

  const navigate = useNavigate();
  const goBack = () => {
    navigate('/manager/')
  }
  return (
    <div>
      <div>
        <Dashboard />
      </div>
      <div className="container-fluid">
        {/* <h3 className={styles.headerText}>Dashboard</h3> */}
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 p-1">
            <div className="card shadow mb-xl-2 mb-lg-2 mg-md-2 mb-sm-2 mb-2">
              <h4>Course Chart</h4>
              <PieChart />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 p-1">
            <div className="card shadow mb-xl-2 mb-lg-2 mg-md-2 mb-sm-2 mb-2">
              <h4>Resourse Chart</h4>
              <Chart />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 p-1">
            <div className="card shadow mb-xl-2 mb-lg-2 mg-md-2 mb-sm-2 mb-2">
              {/* <h4>Bar Chart</h4> */}
              {/* <BarChart /> */}
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 p-1">
            <div className="card shadow mb-xl-2 mb-lg-2 mg-md-2 mb-sm-2 mb-2">
              {/* <h4>Graph Chart</h4>
              <BarChart /> */}
            </div>
          </div>

          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 p-1">
            <div className="card shadow mb-xl-2 mb-lg-2 mg-md-2 mb-sm-2 mb-2">
              {/* <h4>Pie Chart</h4>
              <LineChartScreen /> */}
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 p-1">
            <div className="card shadow mb-xl-2 mb-lg-2 mg-md-2 mb-sm-2 mb-2">
              {/* <h4>Pie Chart</h4>
              <BarChart /> */}
            </div>
          </div>
        </div>
        <center>
        <Button className="right" variant="primary" type="reset" onClick={() => goBack()}>
          Go Back
        </Button></center>
      </div>
    </div>
  );
}

export default SitesVisitsChartView;
