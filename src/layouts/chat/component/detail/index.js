import VuiTypography from "../../../../components/VuiTypography";
import { AlertCircle, CheckCircle, XCircle } from "lucide-react";


function Detail({details}) {

  const ScoreIcon = ({ score }) => {
    if (score >= 4) return <CheckCircle color={"green"} className="text-green-500" />;
    if (score <= 2) return <XCircle color={"red"} className="text-red-500" />;
    return <AlertCircle color={"orange"} className="text-yellow-500" />;
  };

  return (
    <div >
      {details.map((item, index) => (
        <div key={index} className="mb-4">
          <h3 className="font-bold flex items-center">
            <VuiTypography variant="body1" color="light">
              <ScoreIcon score={item.score} />
              <span className="ml-2"> {item.title} (得分: {item.score}/5)</span>
            </VuiTypography>

          </h3>
          <VuiTypography color="text" >
            {item.comment}
          </VuiTypography>
        </div>
      ))}
    </div>
  )
}

export default Detail