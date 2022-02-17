import React, { useState, useEffect } from 'react';
import { Skeleton, Card, Avatar } from 'antd';
import PropTypes from "prop-types";


const { Meta } = Card;

function CardV1(props) {
  const {  } = props;
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }, [])

  return (
    <div>
      <Card
        {...props}
        style={{ width: 500, marginTop: 10, marginBottom: 10 }}
      >
        <Skeleton loading={loading} avatar active>
          <Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title="Card title"
            description="This is the description"
          />
        </Skeleton>
      </Card>
    </div>
  )
}
CardV1.propTypes = {};

CardV1.defaultProps = {}

export default CardV1;
