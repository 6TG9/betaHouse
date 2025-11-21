// General purpose hook to get  any protected endpoint, handling loading, errors token

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosConfig";
import toast from "react-hot-toast";

const useFetch = (url, token) => {
  const [data, setData] = useState(null); // Fetch data here
  const [error, setError] = useState(null); // Any error message comes here
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axiosInstance.get(url, {
          headers: {
            Authorization: token ? `Bearer ${token}` : null,
          },
        });
        setData(data.data);
      } catch (error) {
        // if unauthorized, prompt login and redirect
        if (err.message === "Network Error") {
          setError("Server is down, please refresh");
        }

        if (err.response?.status === 401) {
          toast.error("Login to view this page", {
            id: "auth",
          });
          navigate("/signin");
        }

        setError("something went wrong");
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [url, token, navigate]);

  return { data, error, loading };
};

export default useFetch;
