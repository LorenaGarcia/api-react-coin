import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { renderChangePercent } from "../../helpers";
import "./Table.css";

const Table = props => {
  const { currencies, history } = props;

  return (
    <div className="Table-container">
      <thead className="Table-head">
        <tr>
          <th>cryptocurrencies</th>
          <th>Price</th>
          <th>Market Cap</th>
          <th>24H Change</th>
        </tr>
      </thead>
      <tbody className="Table-body">
        {currencies.map(currency => (
          <tr
            key={currency.id}
            onClick={() => history.push(`/currency/${currency.id}`)}
          >
            <td>
              <span className="Table-rank">{currency.rank}</span>
              {currency.name}
            </td>
            <td>
              <span className="Table-dollar">$ {currency.price}</span>
            </td>
            <td>
              <span className="Table-dollar">$ {currency.marketCap}</span>
            </td>
            <td>{renderChangePercent(currency.percentChange24h)}</td>
          </tr>
        ))}
      </tbody>
    </div>
  );

  Table.PropTypes = {
    currencies: PropTypes.array.isRequired,
    history: PropTypes.object.isRequired
  };
};

export default withRouter(Table);