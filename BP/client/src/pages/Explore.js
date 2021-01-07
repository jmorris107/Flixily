import React, { useEffect, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Card from "../components/Card";
import API from "../utils/OLDAPI";
import ReactCardFlip from 'react-card-flip';

import SwipingCard from "../components/SwipingCard"


function Explore() {
  const [comment, setComment] = useState({})
  // When this component mounts, grab the comment with the _id of props.match.params.id
  // e.g. localhost:3000/comments/599dcb67f0f16317844583fc  

  return (
      <SwipingCard />
    );
  }


export default Explore;