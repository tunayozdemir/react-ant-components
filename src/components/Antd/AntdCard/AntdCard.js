import React, { useState, useEffect } from 'react';
import { Skeleton, Card, Avatar } from 'antd';
import PropTypes from "prop-types";

const { Meta } = Card;

function AntdCard(props) {
  const { avatar, title, subtitle, load, description } = props;
  const [loading, setLoading] = useState(load)

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
        <Skeleton loading={loading} avatar active title={title}>
          <Meta
            title={subtitle}
            avatar={avatar}
            description={description}
          />
        </Skeleton>
      </Card>
    </div>
  )
}
AntdCard.propTypes = {
  avatar: PropTypes.any,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  load: PropTypes.bool,
  description: PropTypes.string,
};

AntdCard.defaultProps = {
  avatar: <Avatar src="https://joeschmoe.io/api/v1/random" />,
  title: "Card title",
  subtitle: "This is the subtitle",
  load: true,
  description: "This is the description"
}

export default AntdCard;
