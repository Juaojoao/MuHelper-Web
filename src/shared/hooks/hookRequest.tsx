import axios from "axios";
const UseRequest = () => {
    const getRequest = async (url: string) => {

      try {
        const result = await axios.get(url);
        alert("Requisição GET feita com sucesso");
        return result.data;
      } catch {
        alert("Erro ao fazer requisição GET");
      }
    };
  
    const postRequest = async (url: string, data: any) => {
  
      try {
        const result = await axios.post(url, data);
        alert("Requisição POST feita com sucesso");
        return result.data;
      } catch {
        alert("Erro ao fazer requisição POST");
      }
    };
  
    return { getRequest, postRequest };
  };

export default UseRequest