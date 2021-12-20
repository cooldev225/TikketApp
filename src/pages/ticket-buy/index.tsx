import "./style.scss";
import React, { Fragment, useState } from "react";
import { Button } from "src/widgets";
import { Icon } from "src/widgets";
import { Table } from "src/components/table";
import { columns, ticket_rows } from "../home/contents";
import { TablePagination } from "src/components/table-pagination";
export const TicketBuyPage: React.FC = () => {
  const [cnt_ticket, setCntTicket] = useState<any>(1);
  return (
    <Fragment>
      <section className="winmutant ticket">
        <div className="left">
          <div className="text">
            <div className="ago">
              <span>Ends in: </span>
              <span>5d 10h 30m 13s</span>
            </div>
            <p className="caption">
              <span className="big-text-white">Win </span>
              <span className="big-text-transparent">
                Board
                <br />
                ape{" "}
              </span>
              <span className="big-text-white">#4252</span>
            </p>
            <p className="desc">
              We want everyone to have equal opportunity, especially those who'd
              normally wouldn't have a change or voice in this space to own a
              iconic NFT.
            </p>
          </div>
          <div className="action">
            <div className="btn">
              <input
                type="number"
                name="ticket_num"
                id="ticket_num"
                value={cnt_ticket}
                onChange={(e) => setCntTicket(e.target.value)}
              />
              <Button
                borderRadius={0}
                color="#040519"
                textColor="white"
                borderColor="white"
              >
                Buy a Tikket
              </Button>
            </div>
            <div className="price">
              <div className="price-text">
                <span>Price</span>
              </div>
              <div className="price-value">
                <span>0.0062 </span>
                <span className="icon-wrapper">
                  <Icon name="eth" color="white" />
                </span>
              </div>
            </div>
            <div className="price bar"></div>
            <div className="price">
              <div className="price-text">
                <span>Odds</span>
              </div>
              <div className="price-value">
                <span>0.01%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <img src="img1.png" />
          <div className="desc">
            <span>Tikkets sold:</span>
            <span>
              <span className="grey">2,000</span> / 10,000
            </span>
          </div>
        </div>
      </section>
      <section className="showoff ticket">
        <TablePagination
          columns={columns}
          rows={ticket_rows}
          pagination={{
            page: 0,
            total_pages: Math.ceil(ticket_rows.length / 10),
            total: ticket_rows.length,
            page_size: 10,
          }}
        />
      </section>
    </Fragment>
  );
};

export default TicketBuyPage;
