import React from 'react'
import { Table } from 'antd';
import classNames from "classnames";
import PropTypes from "prop-types";

import "./HorizontalTable.scss"

const HorizontalTable = (props) => {
  const { id, className, pagination, dataSource, columns, showHeader } = props;

  return (
    <div className={classNames(className)}>
      <Table
        {...props}
        id={id}
        showHeader={showHeader}
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
  showHeader:PropTypes.bool,
};

HorizontalTable.defaultProps = {
  className: 'horizontal-table',
  pagination: false,
  showHeader: false
}

export default HorizontalTable;