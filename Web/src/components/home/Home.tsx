import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setToken } from "../../store/tokenState/tokenSlice";
import Select from "react-select";
import { getPriceAction } from "../../store/async/getPriceSlice";
import { RootState } from "../../store/store";
import { AnyAction } from "@reduxjs/toolkit";
import { GetRequest } from "../../services/requests/GetRequest";

// TODO change it to request for api

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [dddOrigin, setDddOrigin] = React.useState<number | undefined>();
  const [dddToCall, setDddToCall] = React.useState<number | undefined>();
  const [allDDD, setAllDDD] = React.useState<any[]>();
  const [allMinutes, setAllMinutes] = React.useState<any[]>();
  const [planMinutes, setPlanMinutes] = React.useState<number | undefined>();

  const loginCallback = React.useCallback(() => {
    dispatch(setToken(null));
    localStorage.removeItem("@lol:logged");

    navigate("/login");
  }, []);

  const token = useSelector((state: RootState) => state.tokenReducer).value;
  const plansState = useSelector((state: RootState) => state.priceReducer);

  React.useEffect(() => {
    const fetchData = async () => {
      const ddd = (await GetRequest.getDDDs(token)) as unknown as any[];
      const plans = (await GetRequest.getPlans(token)) as unknown as any[];
      if (ddd) {
        const dddSelectOptions = ddd.map(item => {
          return { value: item.ddd_origin, label: item.ddd_origin };
        });
        setAllDDD(dddSelectOptions);
      }

      if (plans) {
        const allMinutesPlanOption = plans.map(item => {
          return { value: item.minute, label: item.minute };
        });
        setAllMinutes(allMinutesPlanOption);
      }
    };
    fetchData();
  }, []);

  const requestPrice = React.useCallback(
    ({
      price,
      dddOrigin,
      dddToCall,
      token,
    }: {
      price: number | undefined;
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
        options={allDDD}
        onChange={e => {
          setDddOrigin(e?.value);
        }}
      />
      <Select options={allDDD} onChange={e => setDddToCall(e?.value)} />
      <Select options={allMinutes} onChange={e => setPlanMinutes(e?.value)} />
      <button onClick={loginCallback}>Logout</button>Home
      <button
        onClick={() =>
          requestPrice({
            price: planMinutes,
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
