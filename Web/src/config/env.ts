declare const process: {
  env: {
    REACT_API_URL: string;
  };
};

export const REACT_API_URL: string = process.env.REACT_API_URL;
