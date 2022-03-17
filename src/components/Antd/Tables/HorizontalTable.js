import React from 'react'
import { Table } from 'antd';
import classNames from "classnames";
import PropTypes from "prop-types";

import "./HorizontalTable.scss"

const HorizontalTable = (props) => {
  const { id, className, pagination, dataSource, columns } = props;

  return (
    <div className={classNames(className)}>
      <Table
        {...props}
        id={id}
        pagination={pagination}
        dataSource={dataSource}
        columns={columns} />
    </div>
  )
}
HorizontalTable.propTypes = {
  className: PropTypes.string,
  id: PropTypes.any,
  pagination: PropTypes.bool,
};

HorizontalTable.defaultProps = {
  className: 'horizontal-table',
  pagination: false
}

export default HorizontalTable;