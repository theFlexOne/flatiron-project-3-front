import axios from "axios";
import constants from "./../helpers/constants";

const { BACKEND_BASE_URL } = constants;

class BackendInitializationError extends Error {
  constructor(err) {
    super(err);
    this.message =
      "An instance of 'Backend' already exists. THERE CAN BE ONLY ONE!.";
  }
}

const setupAxios = (baseURL) => {
  const axiosBackend = axios.create({ baseURL });
  return axiosBackend;
};

class Backend {
  static _exists = false;
  static _axiosBackend = setupAxios(BACKEND_BASE_URL);

  constructor(baseURL) {
    // to prevent a second instance of this class from being created (singleton)
    const isValid = !Backend._exists;
    try {
      if (!isValid) throw new BackendInitializationError();
      this.url = new URL(baseURL);
      this.axios = axios.create({ baseURL: this.url.origin });
    } catch (err) {
      console.error(err);
    } finally {
      Backend._exists = true;
    }
  }

  get = async function (model) {
    const { data } = await Backend._axiosBackend.get(model);
    return data;
  };

  post = async function (model, data) {
    const response = await Backend._axiosBackend.post(model, data);
    console.log(`response`, response);
  };

  axiosBaseURL() {
    return this.axios.defaults.baseURL;
  }
}

const setupBackend = () => {
  const backend = new Backend(BACKEND_BASE_URL);
  return backend;
};

export { setupBackend };
