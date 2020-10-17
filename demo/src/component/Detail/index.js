import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getDetail from '../../server/getDetail';

export default function Detail() {
  const { id } = useParams();
  const [detail, setDetail] = useState({});

  //mock to call back-end to init
  useEffect(() => {
    setDetail(getDetail(id));
  }, [id]);

  return (
    <div>
      <h3>
        {detail.title} {detail.id}
      </h3>
      <p>{detail.description}</p>
      <img src={detail.image} alt="" />
    </div>
  );
}
