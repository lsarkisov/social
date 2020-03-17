import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logInAction } from "../../actions/auth";

export default function LogIn(props) {
  const dispatch = useDispatch();
  const { userLogIn } = useSelector(state => state.login);

  useEffect(() => {
    dispatch(logInAction.request());
  }, [dispatch]);

  return (
    <div>
      <ul>
        {userLogIn && userLogIn.map(element => {
          return (<li key={element.id}>{element.title}</li>)
        })}
      </ul>
    </div>
  );
}
