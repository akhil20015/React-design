import React from "react";
import { Button } from "react-bootstrap";

import './button.css'

const button = (props) => {
  return (
    <div className="button">
      <>
        <style type="text/css">
        {`
            .btn-flat {
            background-color: rgb(52, 102, 95);;
            color: white;
            border-radius: 12px
            }

            .btn-xl {
            padding: 8px;
            font-size: 1rem;
            }
        `}
        </style>

        <Button variant="flat" size="xxl">{props.text}</Button>
      </>
    </div>
  );
};

export default button;