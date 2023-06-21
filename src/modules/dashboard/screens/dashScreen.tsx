import { useNavigate } from "react-router-dom";
import { useEffect } from "react"
import { getAutorizationToken, unsetAutorizationToken } from "../../../shared/functions/connection/auth";
import { connectionAPIGet } from "../../../shared/functions/connection/connectionAPI";
import { GUIDE_URL, USER_URL } from "../../../shared/constants/urls";
import { UseRequest } from "../../../shared";
import { MethodsEnum } from "../../../shared/enums/method.enum";
import { useDataContext } from "../../../shared/hooks/useDataContext";
import { GuideType } from "../types/guidesType";

import DashTemplate from "../components/Dashboard";

const DashScreen = () => {
  const navigate = useNavigate();
  const { setGuides, guides } = useDataContext();
  const { request } = UseRequest();

  useEffect(() => {
    const verifyToken = async () => {
      const token = getAutorizationToken();
      if (token) {
        try {
          await connectionAPIGet(USER_URL);
          navigate("/dashboard");
        } catch (error) {
          unsetAutorizationToken();
          navigate("/login");
        }
      } else {
        navigate("/login");
      }
    };

    verifyToken();
  }, []);

  useEffect(() => {
    request<GuideType[]>(GUIDE_URL, MethodsEnum.GET, setGuides);
  }, []);

  return <DashTemplate/>;
};

export default DashScreen;