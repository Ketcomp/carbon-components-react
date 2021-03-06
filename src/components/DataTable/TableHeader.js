import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../Icon';
import { sortStates } from './state/sorting';

const translationKeys = {
  iconDescription: 'carbon.table.header.icon.description',
};

const translateWithId = (key, { sortDirection, isSortHeader, sortStates }) => {
  if (key === translationKeys.iconDescription) {
    if (isSortHeader) {
      const order =
        sortDirection === sortStates.DESC ? 'descending' : 'ascending';
      return `Sort rows by this header in ${order} order`;
    }
    return `Sort rows by this header in descending order`;
  }

  return '';
};

const TableHeader = ({
  className: headerClassName,
  children,
  isSortHeader,
  onClick,
  scope,
  sortDirection,
  translateWithId: t,
  ...rest
}) => {
  const className = cx(headerClassName, {
    'bx--table-sort-v2': true,
    'bx--table-sort-v2--active':
      isSortHeader && sortDirection !== sortStates.NONE,
    'bx--table-sort-v2--ascending':
      isSortHeader && sortDirection === sortStates.ASC,
  });
  return (
    <th scope={scope}>
      <button className={className} onClick={onClick} {...rest}>
        <span className="bx--table-header-label">{children}</span>
        <Icon
          className="bx--table-sort-v2__icon"
          name="caret--down"
          description={t('carbon.table.header.icon.description', {
            header: children,
            sortDirection,
            isSortHeader,
            sortStates,
          })}
        />
      </button>
    </th>
  );
};

TableHeader.propTypes = {
  /**
   * Specify an optional className to be applied to the container node
   */
  className: PropTypes.string,

  /**
   * Pass in children that will be embedded in the table header label
   */
  children: PropTypes.string,

  /**
   * Specify whether this header is the header by which a table is being sorted
   * by
   */
  isSortHeader: PropTypes.bool,

  /**
   * Hook that is invoked when the header is clicked
   */
  onClick: PropTypes.func,

  /**
   * Specify the scope of this table header. You can find more info about this
   * attribute at the following URL:
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th#attr-scope
   */
  scope: PropTypes.string.isRequired,

  /**
   * Specify which direction we are currently sorting by, should be one of DESC,
   * NONE, or ASC.
   */
  sortDirection: PropTypes.oneOf(Object.values(sortStates)),

  /**
   * Supply a method to translate internal strings with your i18n tool of
   * choice. Translation keys are avabile on the `translationKeys` field for
   * this component.
   */
  translateWithId: PropTypes.func,
};

TableHeader.defaultProps = {
  scope: 'col',
  translateWithId,
};

TableHeader.translationKeys = Object.values(translationKeys);

export default TableHeader;
