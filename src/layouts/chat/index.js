import PageLayout from "../../examples/LayoutContainers/PageLayout";
import tripleLinearGradient from "../../assets/theme/functions/tripleLinearGradient";
import colors from "../../assets/theme/base/colors";
import VuiBox from "../../components/VuiBox";
import VuiTypography from "../../components/VuiTypography";
import VuiInput from "../../components/VuiInput";
import { useLocation, useHistory} from "react-router-dom";
import { useVisionUIController, setLayout } from "context";
import { useEffect, useState } from "react";
import TextArea from "antd/es/input/TextArea";
import VuiButton from "../../components/VuiButton";
import CRadar from "./component/radar"
import Detail from "./component/detail"
import { AlertCircle, CheckCircle, XCircle } from 'lucide-react';
import Footer from "../../examples/Footer";
import Icon from "@mui/material/Icon";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


function Chat() {
  const [, dispatch] = useVisionUIController();
  const { pathname } = useLocation();
  const [feedback, setFeedback] = useState({
    valid: false,
    overall: "",
    details: [],
    suggestions: []
  });
  const history = useHistory();

  const historyButton = (
    <VuiBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="3.5rem"
      height="3.5rem"
      bgColor="info"
      shadow="sm"
      borderRadius="50%"
      position="fixed"
      right="2rem"
      bottom="2rem"
      zIndex={99}
      color="white"
      sx={{ cursor: "pointer", overflow: "hidden" }}
      onClick={handleHistoryPop}
    >
      <div style={{ display: "flex", justifyContent: "center", flexDirection: "row", alignItems: "center", transition: "ease-in-out 1s", transform: "translateX(2.5rem) translateY(0.3rem)", cursor: "pointer"}}>
        <div style={{ display: "block", justifyContent: "center", width: "3.5rem" }}>
            <ArrowBackIcon fontSize={"large"}/>
        </div>
        <div style={{ display: "block", justifyContent: "center", width: "3.5rem" }}>
            <ArrowBackIcon fontSize={"large"}/>
        </div>
      </div>
    </VuiBox>
  );

  function handleHistoryPop() {
    history.goBack();
  }

  useEffect(() => {
    setLayout(dispatch, "page");
  }, [pathname]);

  const showAssessment = () => {
    setFeedback({
      valid: true,
      overall: "教学设计在学生需求适应性、教学目标清晰度、互动性和参与度、多样化教学方法和创新性方面表现良好，但在评估和反馈机制方面存在不足。",
      details: [
        { title: "学生需求适应性", score: 4, comment: "教学设计充分考虑了不同学生的学习需求、兴趣和学习风格。" },
        { title: "教学目标清晰度", score: 5, comment: "教学目标明确，涵盖了观察、实验、分析和创新思考等各个层面。" },
        { title: "互动性和参与度", score: 4, comment: "通过分组实验和课堂互动提问等设计，促进了学生之间的参与和互动。" },
        { title: "评估和反馈机制", score: 2, comment: "缺乏明确的评估和反馈机制，需要加强。" },
        { title: "多样化教学方法", score: 4, comment: "采用了实验、探索、互动提问等多样化教学方法。" },
        { title: "创新性", score: 3, comment: "显示了一定的创新性，但可以进一步整合现代科技工具和资源。" }
      ],
      suggestions: [
        "增强评估和反馈机制",
        "设计更详细的个性化支持策略",
        "促进全员参与的活动设计",
        "融入现代科技以增加创新性",
        "丰富课程内容与学生兴趣相结合",
        "考虑经济和资源可访问性",
        "提供社交和情感学习支持"
      ]
    });
  }

  const assessment = () => {
    return feedback.valid ?
      (<VuiBox >
        <VuiBox mt={4} mb={4} px={1} py={1} borderRadius="lg" sx={{background: "rgba(47,46,131,0.7)", width: "80%", marginLeft: "auto", marginRight: "auto"}}>
          <VuiBox mb={2} >
            <VuiTypography variant="subtitle1" color="light">总体评估</VuiTypography>
            <VuiTypography variant="subtitle2" color="text">{feedback.overall}</VuiTypography>
          </VuiBox>
        </VuiBox>

        <VuiBox mb={4} px={1} py={1} borderRadius="lg" sx={{background: "rgba(47,46,131,0.7)", width: "80%", marginLeft: "auto", marginRight: "auto"}}>
          <VuiBox mb={2} >
            <VuiTypography variant="subtitle1" color="light" opacity={1}>
              评估结果可视化
            </VuiTypography>
          </VuiBox>
          <VuiBox mb={2} >
            <VuiTypography variant="subtitle2" color="text" opacity={1}>
              <CRadar details={feedback.details} />
            </VuiTypography>
          </VuiBox>
        </VuiBox>
        <VuiBox mb={4} px={1} py={1} borderRadius="lg" sx={{background: "rgba(47,46,131,0.7)", width: "80%", marginLeft: "auto", marginRight: "auto"}}>
          <VuiBox mb={2} >
            <VuiTypography variant="subtitle1" color="light" opacity={1}>
              详细评估
            </VuiTypography>
          </VuiBox>
          <VuiBox mb={2} >
            <Detail details={feedback.details} />
          </VuiBox>
        </VuiBox>
        <VuiBox mb={4} px={1} py={1} borderRadius="lg" sx={{background: "rgba(47,46,131,0.7)", width: "80%", marginLeft: "auto", marginRight: "auto"}}>
          <VuiBox mb={2} >
            <VuiTypography variant="subtitle1" color="light" opacity={1}>
              改进建议
            </VuiTypography>
          </VuiBox>
          <VuiBox mb={2} ml={5}>
            <VuiTypography variant="subtitle1" color="text" opacity={1}>
              <ul className="list-disc pl-5">
                {feedback.suggestions.map((suggestion, index) => (
                  <li key={index}>{suggestion}</li>
                ))}
              </ul>
            </VuiTypography>
          </VuiBox>
        </VuiBox>
      </VuiBox>) : (<VuiBox></VuiBox>)
  }

  return (
      <VuiBox
        justifyContent="center"
        alignItems="center"
        shadow="sm"
        sx={{height: "100vh", overflow: "scroll", scrollbarWidth: "none"}}
      >
        <VuiBox px={1} mt={4} mb={4} borderRadius="lg"
                shadow="lg"
                sx={feedback.valid ? {background: "rgba(47,46,131,0.7)", width: "80%", marginLeft: "auto", marginRight: "auto", transition: "ease 1s"} : { marginTop: "15vh", background: "rgba(47,46,131,0.7)", width: "80%", marginLeft: "auto", marginRight: "auto"}}
        >
          <VuiBox mb={3} >
            <VuiTypography
              variant="h1"
              color="text"
              opacity={1}
              fontWeight="medium"
              sx={{textAlign: "center"}}
            >
              教学评估平台
            </VuiTypography>
          </VuiBox>

          <VuiBox mb={3} >
            <VuiTypography variant="subtitle2" color="light">欢迎使用教学设计评估平台。请在下方输入您的教学设计,我们将为您提供专业的反馈建议。</VuiTypography>
          </VuiBox>

          <VuiBox mb={2} >
            <TextArea
              style={{background: "#03033a", scrollbarWidth: "none", height: "20vh", color: "white", fontSize: "14px"}}
            />
          </VuiBox>
          <VuiBox mb={3} pb={1} py={1}>
            <VuiButton onClick={showAssessment} color={"dark"} size="large" sx={{display: "block", margin: "auto"}}>提交</VuiButton>
          </VuiBox>
        </VuiBox>

        {assessment()}
        {historyButton}


        <div style={{position: "sticky", top: "100vh", width: "100vw"}} >
          <Footer/>
        </div>
      </VuiBox>

  );
}

export default Chat;