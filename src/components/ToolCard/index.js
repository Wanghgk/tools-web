import { Button, Card, CardActions, CardContent, CardMedia } from "@mui/material";
import VuiBox from "../VuiBox";
import VuiTypography from "../VuiTypography";
import { Link } from "react-router-dom";

function ToolCard({image, name, description, }) {

  return (
    <Card sx={{ maxWidth: 290 , maxHeight: 350, minWidth: 250, minHeight: 210,width: "25vw", height: "60vh"}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={image}
      />
      <CardContent>
        <VuiBox mb={1} >
          <VuiTypography variant="lg" color="white" fontWeight="bold" mb="0px">
            {name}
          </VuiTypography>
        </VuiBox>
        <VuiBox mb={1} sx={{ maxHeight: 33, overflow: "hidden", padding: 0 }}>
          <VuiTypography variant="lg" color="secondery" fontWeight="bold" mb="0px">
            {description}
          </VuiTypography>
        </VuiBox>
      </CardContent>
      <CardActions>
        <Button color="success" size="large">收藏</Button>
        <Link to={"/chat"}>
          <Button color={"error"} size="large">详情</Button>
        </Link>
      </CardActions>
    </Card>
  )
}

export default ToolCard;