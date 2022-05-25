import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setToken } from "../../store/tokenState/tokenSlice";
import Select from "react-select";
import { getPriceAction } from "../../store/async/getAllPlansSlice";
import { RootState } from "../../store/store";
import { AnyAction } from "@reduxjs/toolkit";

// TODO change it to request for api

const options = [
  { value: 2, label: 2 },
  { value: 3, label: 3 },
  { value: 4, label: 4 },
];

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [dddOrigin, setDddOrigin] = React.useState<number | undefined>();
  const [dddToCall, setDddToCall] = React.useState<number | undefined>();
  const [plan, setPlan] = React.useState<number | undefined>();

  const loginCallback = React.useCallback(() => {
    dispatch(setToken(null));
    localStorage.removeItem("@lol:logged");

    navigate("/login");
  }, []);
  const price = 2;
  const token = useSelector((state: RootState) => state.tokenReducer).value;
  const plansState = useSelector((state: RootState) => state.plansReducer);
  const requestPrice = React.useCallback(
    ({
      price,
      dddOrigin,
      dddToCall,
      token,
    }: {
      price: number;
      dddOrigin: number | undefined;
      dddToCall: number | undefined;
      token: string | null;
    }) => {
      if (dddOrigin && dddToCall) {
        dispatch(
          getPriceAction({
            price,
            dddOrigin,
            dddToCall,
            token,
          }) as unknown as AnyAction
        );
      }
    },
    []
  );

  return (
    <>
      <Select
        options={options}
        onChange={e => {
          setDddOrigin(e?.value);
        }}
      />
      <Select options={options} onChange={e => setDddToCall(e?.value)} />
      <Select options={options} onChange={e => setPlan(e?.value)} />
      <button onClick={loginCallback}>Logout</button>Home
      <button
        onClick={() =>
          requestPrice({
            price,
            dddOrigin,
            dddToCall,
            token,
          })
        }
      >
        get Prices
      </button>
      <div>prices:</div>
      <div>
        {plansState.status === "succeeded" && plansState.list ? (
          <ul>
            {plansState?.list.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        ) : null}
      </div>
    </>
  );
};

export default Home;
