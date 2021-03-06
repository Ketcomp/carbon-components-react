import React from 'react';
import { mount } from 'enzyme';
import { Table, TableHead, TableHeader, TableRow } from '../';

describe('DataTable.TableHeader', () => {
  let mockProps;

  beforeEach(() => {
    mockProps = {
      isSortHeader: false,
      onClick: jest.fn(),
      sortDirection: 'NONE',
    };
  });

  it('should render', () => {
    const wrapper = mount(
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader {...mockProps}>Header</TableHeader>
          </TableRow>
        </TableHead>
      </Table>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should have an active class if it is the sort header and the sort state is not NONE', () => {
    const wrapper = mount(
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader {...mockProps} isSortHeader>
              Header
            </TableHeader>
          </TableRow>
        </TableHead>
      </Table>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should have an active and ascending class if sorting by ASC', () => {
    const wrapper = mount(
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader {...mockProps} isSortHeader sortDirection="ASC">
              Header
            </TableHeader>
          </TableRow>
        </TableHead>
      </Table>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
