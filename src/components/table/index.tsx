import "./style.scss";
export const Table: React.FC<{ columns: any; rows: any }> = (props) => {
  return (
    <div className="table-part">
      <div className="overlay"></div>
      <div className="th">
        {props.columns.map((column, ci) => (
          <div className="td" key={"column-" + ci}>
            {column}
          </div>
        ))}
      </div>
      {props.rows.map((row, ri) => (
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
  );
};
