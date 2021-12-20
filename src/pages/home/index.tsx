import { behindList, columns, faqItems, rows } from "./contents";
import "./style.scss";
import React, { Fragment } from "react";
import { Button } from "src/widgets";
import { Icon } from "src/widgets";
import { Table } from "src/components/table";
import { Accordian } from "src/widgets/accordian";
import { useHistory } from "react-router";
export const HomePage: React.FC = () => {
  const history = useHistory();
  return (
    <Fragment>
      <section className="didyou">
        <div className="overlay"></div>
        <img src="title.png" />
        <div className="content">
          <div className="text">
            <p className="caption">
              <span className="big-text-white">Did you </span>
              <span className="big-text-transparent sp-br">cop</span>
              <span className="big-text-white pc-br">a </span>
              <span className="big-text-transparent">Tikket </span>
              <span className="big-text-white">Yet?</span>
            </p>
            <p>
              <span>
                Imagine having the chance to own an iconinc NFT? Tikkets allows
                everyone to win an rare non-fungible token for a fraction of the
                price.
              </span>
            </p>
          </div>
          <div className="btns">
            <Button
              borderRadius={0}
              color="#040519"
              textColor="white"
              borderColor="white"
              onClick={() => history.push("/ticket-buy")}
            >
              Buy a Tikket
            </Button>
            <Button
              borderRadius={0}
              color="white"
              textColor="#040519"
              borderColor="white"
            >
              Connect
            </Button>
          </div>
        </div>
      </section>
      <section className="winmutant">
        <div className="left">
          <div className="text">
            <p className="caption">
              <span className="big-text-white">Win </span>
              <span className="big-text-transparent">mutant ape </span>
              <span className="big-text-white">#2535</span>
            </p>
            <p className="desc">
              <span>
                Think of <span className="bold">Tikkets</span> as a giveaway,
                but different. You can buy a<span className="bold">tikket</span>{" "}
                which gives you the chance of winning a specific NFT. Through
                our randomized picking process, a{" "}
                <span className="bold">tikket</span> will be chosen which will
                be awarded as the winner. Immediately after, the NFT will be
                transferred to the wallet of which the
                <span className="bold">tikket</span> was purchased with. Easy.
              </span>
            </p>
          </div>
          <div className="action">
            <div className="price">
              <div className="price-text">
                <span>Tikket price:</span>
              </div>
              <div className="price-value">
                <span>0.0062 </span>
                <span className="icon-wrapper">
                  <Icon name="eth" color="white" />
                </span>
              </div>
            </div>
            <div className="btn">
              <Button
                borderRadius={0}
                color="#040519"
                textColor="white"
                borderColor="white"
                onClick={() => history.push("/ticket-buy")}
              >
                Buy a Tikket
              </Button>
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
      <section className="showoff">
        <div className="text">
          <p className="caption">
            <span className="big-text-white">
              show off <br />
              your{" "}
            </span>
            <span className="big-text-transparent">tikkets </span>
          </p>
          <p className="desc">
            <span>
              Want to flex how many tikkets you have? Easy, each NFT giveaway
              has a leaderboard where you can see exactly who owns what{" "}
              <span className="bold">tikket</span> and how many. It’s all
              transparent, there for everyone to see.
            </span>
          </p>
        </div>
        <Table columns={columns} rows={rows} />
      </section>
      <section className="faq">
        <div className="left text">
          <div className="caption">
            <span className="big-text-white">FAQ</span>
          </div>
        </div>
        <div className="right">
          <Accordian items={faqItems} />
        </div>
      </section>
      <section className="whois">
        <div className="text">
          <p className="caption">
            <span className="big-text-white">
              who is <br />
              behind{" "}
            </span>
            <span className="big-text-transparent">tikkets </span>
          </p>
          <p className="desc">
            <span>
              As you know, the team behind the project is everything. Each of us
              behind <span className="bold">tikket</span> bring something unique
              and different to the table allowing us to execute in the best way
              possible.
            </span>
          </p>
        </div>
        <div className="list-view">
          {behindList.map((item, index) => (
            <div className="card" key={index}>
              <img src={item.img} />
              <div className="name">{item.name}</div>
              <div className="socials">
                <span className="icon-wrapper">
                  <Icon name="twitter" />
                </span>
                <span className="icon-wrapper">
                  <Icon name="instagram" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="whattf">
        <div className="text">
          <p className="caption">
            <span className="big-text-white">
              what tf do I<br />
              do with my{" "}
            </span>
            <span className="big-text-transparent">tikkets </span>
            <span className="big-text-white">?</span>
          </p>
          <p className="desc">
            <span>
              The unsed Tikkets will have a use-case in the near future. We’re
              working on this as you’re reading this and can promise you. It’s
              big. We’ll be annoucing this thourgh our social channels so make
              sure to follow us on Twitter.
            </span>
          </p>
        </div>
        <div className="btns">
          <Button
            borderRadius={0}
            color="white"
            textColor="#040519"
            borderColor="white"
          >
            Follow us on Twitter
          </Button>
        </div>
      </section>
    </Fragment>
  );
};

export default HomePage;
