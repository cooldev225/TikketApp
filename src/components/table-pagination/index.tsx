import { Fragment, useEffect, useState } from "react";
import { Icon } from "src/widgets";
import "./style.scss";
interface TableType {
  columns: any;
  rows: any;
  pagination: {
    page: any;
    total_pages: any;
    total: any;
    page_size: any;
  };
}
export const TablePagination: React.FC<TableType> = (props) => {
  const [state, setState] = useState<any>({
    pagination: {},
    rows: [],
  });
  useEffect(() => {
    const list = getItems(props.pagination.page);
    console.log([props, list]);
    setState({
      pagination: props.pagination,
      rows: list,
    });
  }, [props]);
  const getItems = (pg) => {
    const items = [];
    for (
      let p = pg * props.pagination.page_size, i = 0;
      i < props.pagination.page_size && p + i < props.pagination.total;
      i++
    ) {
      items.push(props.rows[p + i]);
    }
    return items;
  };
  const nextAction = (dir) => {
    if (state.pagination.page < 1) return;
    setState({
      ...state,
      pagination: {
        page: state.pagination.page + dir,
        total_pages: state.pagination.total_pages,
        total: state.pagination.total,
        page_size: state.pagination.page_size,
      },
      rows: getItems(state.pagination.page + dir),
    });
  };
  const gotoAction = (p) => {
    setState({
      ...state,
      pagination: {
        page: p,
        total_pages: state.pagination.total_pages,
        total: state.pagination.total,
        page_size: state.pagination.page_size,
      },
      rows: getItems(p),
    });
  };
  return (
    <Fragment>
      <div className="table-part">
        <div className="overlay"></div>
        <div className="th">
          {props.columns.map((column, ci) => (
            <div className="td" key={"column-" + ci}>
              {column}
            </div>
          ))}
        </div>
        {state.rows.map((row, ri) => (
          <div className="tr" key={ri}>
            {props.columns.map((column, ci) => (
              <div className="td" key={ri + "-" + ci}>
                <p
                  dangerouslySetInnerHTML={{
                    __html: row[ci],
                  }}
                ></p>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="pagination-box">
        <a onClick={() => nextAction(-1)}>
          <Icon name="prev" /> Prev
        </a>
        <ul>
          <li>
            <a onClick={() => gotoAction(1)}>1</a>
          </li>
          {state.pagination.total_pages > 1 && (
            <Fragment>
              <li>
                <a onClick={() => gotoAction(1)}>2</a>
              </li>
              {state.pagination.total_pages > 2 && (
                <Fragment>
                  <li>
                    <a onClick={() => gotoAction(3)}>3</a>
                  </li>
                  {state.pagination.total_pages === 4 && (
                    <li>
                      <a onClick={() => gotoAction(4)}>4</a>
                    </li>
                  )}
                  {state.pagination.total_pages > 4 && (
                    <Fragment>
                      <li>
                        <a>...</a>
                      </li>
                      <li>
                        <a
                          onClick={() =>
                            gotoAction(state.pagination.total_pages)
                          }
                        >
                          {state.pagination.total_pages}
                        </a>
                      </li>
                    </Fragment>
                  )}{" "}
                </Fragment>
              )}{" "}
            </Fragment>
          )}
        </ul>
        <a onClick={() => nextAction(1)}>
          Next <Icon name="next" />
        </a>
      </div>
    </Fragment>
  );
};
