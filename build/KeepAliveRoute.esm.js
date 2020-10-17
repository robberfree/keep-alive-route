import React, { useState } from 'react';
import { useRouteMatch, useLocation, Route } from 'react-router-dom';

/**
 * Same as Route except that KeepAliveRoute will reuse old mounted component
 */

function KeepAliveRoute(props) {
  //is the component mounted?
  const [isMounted, setIsMounted] = useState(false);
  const [visible, setVisible] = useState(true); //is route matched?

  const match = useRouteMatch(props); //current path

  const {
    ptahName
  } = useLocation();

  if (isMounted) {
    const _visible = !!match;

    if (visible !== _visible) {
      setVisible(_visible);
    } //hack:set path to current path to keep old mounted component


    props = Object.assign({}, props, {
      path: ptahName
    });
  } else {
    if (match) {
      setIsMounted(true);
    }
  }

  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: visible ? "block" : "none"
    }
  }, /*#__PURE__*/React.createElement(Route, props));
}

export default KeepAliveRoute;
