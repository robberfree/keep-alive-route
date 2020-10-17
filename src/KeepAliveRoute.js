import React, { useState } from "react";
import { Route, useLocation, useRouteMatch } from "react-router-dom";

/**
 * Same as Route except that KeepAliveRoute will reuse old mounted component
 */
export default function KeepAliveRoute(props) {
  //is the component mounted?
  const [isMounted, setIsMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  //is route matched?
  const match = useRouteMatch(props);

  //current path
  const { ptahName } = useLocation();

  if (isMounted) {
    const _visible = !!match;
    if (visible !== _visible) {
      setVisible(_visible);
    }
    //hack:set path to current path to keep old mounted component
    props = Object.assign({}, props, { path: ptahName });
  } else {
    if (match) {
      setIsMounted(true);
    }
  }

  return isMounted ? (
    <div style={{ display: visible ? "block" : "none" }}>
      <Route {...props}></Route>
    </div>
  ) : (
    <Route {...props}></Route>
  );
}
