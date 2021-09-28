"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.promise.js");

require("core-js/modules/es.string.includes.js");

require("core-js/modules/es.array.sort.js");

var _react = require("react");

var _SVGArrowDown = _interopRequireDefault(require("./icons/SVGArrowDown"));

var _SVGArrowUp = _interopRequireDefault(require("./icons/SVGArrowUp"));

var _SVGChevronLeft = _interopRequireDefault(require("./icons/SVGChevronLeft"));

var _SVGChevronRight = _interopRequireDefault(require("./icons/SVGChevronRight"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SmartTable(props) {
  var _props$data,
      _props$rowsPerPage,
      _props$rowsPerPageOpt,
      _this = this,
      _props$searchDebounce;

  const [loading, setLoading] = (0, _react.useState)(false);
  const [sortDesc, setSortDesc] = (0, _react.useState)({});
  const [tableWidth, setTableWidth] = (0, _react.useState)(1000);
  const [data, setData] = (0, _react.useState)((_props$data = props.data) !== null && _props$data !== void 0 ? _props$data : []);
  const [search, setSearch] = (0, _react.useState)("");
  const [rowsPerPage, setRowsPerPage] = (0, _react.useState)((_props$rowsPerPage = props.rowsPerPage) !== null && _props$rowsPerPage !== void 0 ? _props$rowsPerPage : 10);
  const [rowsPerPageOptions] = (0, _react.useState)((_props$rowsPerPageOpt = props.rowsPerPageOptions) !== null && _props$rowsPerPageOpt !== void 0 ? _props$rowsPerPageOpt : [5, 10, 25, 50]);
  const [page, setPage] = (0, _react.useState)(1);
  const [total, setTotal] = (0, _react.useState)(0);
  const fetchData = (0, _react.useCallback)(async queryString => {
    setLoading(true);

    try {
      const response = await fetch(props.url + (queryString ? queryString : ""), {
        method: "get"
      });
      const data = await response.json();

      if (data && data.data) {
        var _data$data$result;

        setData((_data$data$result = data.data.result) !== null && _data$data$result !== void 0 ? _data$data$result : []);
        setTotal(data.data.total, 0);
      }
    } catch (e) {
      console.log("Fetch error", e.message);
    }

    setLoading(false);
  }, [props.url]);
  const tableWidthFunc = (0, _react.useCallback)(() => {
    let tempTableWidth = 0;
    props.headCells.map(cell => tempTableWidth += cell.width);
    if (tempTableWidth) setTableWidth(tempTableWidth);
  }, [props.headCells]);
  (0, _react.useEffect)(() => {
    var _props$rowsPerPage2;

    tableWidthFunc();
    if (props.url && !props.data) fetchData("?limit=".concat((_props$rowsPerPage2 = props.rowsPerPage) !== null && _props$rowsPerPage2 !== void 0 ? _props$rowsPerPage2 : 10));
  }, [props.url, props.data, props.rowsPerPage, props.headCells, tableWidthFunc, fetchData]);

  const buildQueryString = (search, page, rowsPerPage) => {
    const queries = [];
    if (page) queries.push("page=".concat(page));
    if (rowsPerPage) queries.push("limit=".concat(rowsPerPage));
    if (search) queries.push("search=".concat(search.toLowerCase()));
    const queryString = queries.join("&");
    return queryString ? "?".concat(queryString) : "";
  };

  const debounce = function debounce(func) {
    let timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
    let timer;
    return function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(_this, args);
      }, timeout);
    };
  };

  const handleSearch = debounce(event => {
    const {
      value
    } = event.target;
    setSearch(value);

    if (props.data) {
      let bool = false;
      let tempData = props.data.filter(row => {
        bool = false;
        Object.keys(row).forEach(key => {
          if (row[key].toLowerCase().includes(value.toLowerCase())) bool = true;
        });
        return bool;
      });
      setData(tempData);
    } else if (props.url) {
      fetchData(buildQueryString(value, page, rowsPerPage));
    }
  }, (_props$searchDebounce = props.searchDebounceTime) !== null && _props$searchDebounce !== void 0 ? _props$searchDebounce : 800);

  const sortData = cell => {
    let tempData = [...data];
    tempData.sort((a, b) => {
      if (sortDesc[cell]) {
        return a[cell].toLowerCase() < b[cell].toLowerCase() ? 1 : -1;
      } else {
        return a[cell].toLowerCase() > b[cell].toLowerCase() ? 1 : -1;
      }
    });
    setSortDesc({
      [cell]: !sortDesc[cell]
    });
    setData(tempData);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "col-12 p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "smartTable-container row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-12"
  }, loading && /*#__PURE__*/React.createElement("div", {
    className: "smartTable-loaderContainer text-primary"
  }, /*#__PURE__*/React.createElement("div", {
    className: "spinner-border",
    role: "status"
  })), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-6 h3"
  }, props.title), /*#__PURE__*/React.createElement("div", {
    className: "col-6 text-end"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Search...",
    onChange: handleSearch
  }))), data.length > 0 ? /*#__PURE__*/React.createElement("div", {
    className: "row mt-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "smartTable-tableContainer"
  }, /*#__PURE__*/React.createElement("table", {
    className: "smartTable-table table table-striped border",
    style: {
      minWidth: tableWidth
    }
  }, /*#__PURE__*/React.createElement("thead", {
    className: "smartTable-thead"
  }, /*#__PURE__*/React.createElement("tr", null, props.headCells.map(headCell => {
    var _headCell$width;

    return /*#__PURE__*/React.createElement("th", {
      id: headCell.id,
      key: headCell.id,
      scope: "col",
      style: {
        width: (_headCell$width = headCell.width) !== null && _headCell$width !== void 0 ? _headCell$width : "auto"
      },
      className: headCell.sortable !== false ? "smartTable-pointer" : "",
      onClick: () => headCell.sortable !== false ? sortData(headCell.id) : {}
    }, headCell.label, sortDesc[headCell.id] ? /*#__PURE__*/React.createElement(_SVGArrowDown.default, null) : sortDesc[headCell.id] === undefined ? "" : /*#__PURE__*/React.createElement(_SVGArrowUp.default, null));
  }))), /*#__PURE__*/React.createElement("tbody", null, data.map((row, idx) => {
    return /*#__PURE__*/React.createElement("tr", {
      key: "tr_" + idx
    }, props.headCells.map((headCell, idxx) => {
      return /*#__PURE__*/React.createElement("td", {
        key: "td_" + idx + "_" + idxx
      }, headCell.render ? headCell.render(row) : row[headCell.id]);
    }));
  }))))) : /*#__PURE__*/React.createElement("div", {
    className: "row p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "smartTable-noDataFound col-12"
  }, /*#__PURE__*/React.createElement("h4", null, "NO DATA FOUND"))), props.noPagination || data.length === 0 || !props.url || props.data ? /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-12 text-end p-3"
  }, data.length > 0 ? data.length : 0, " Rows")) : /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-12 text-end p-3"
  }, /*#__PURE__*/React.createElement("span", null, "Rows per page:", " ", /*#__PURE__*/React.createElement("select", {
    name: "rowsPerPage",
    value: rowsPerPage,
    onChange: e => {
      setRowsPerPage(e.target.value);
      fetchData(buildQueryString(search, page, e.target.value));
    }
  }, rowsPerPageOptions.map((nbr, idx) => {
    return /*#__PURE__*/React.createElement("option", {
      key: "rowsPerPageOptions_" + idx,
      value: nbr
    }, nbr);
  }))), /*#__PURE__*/React.createElement("span", {
    className: "ms-4"
  }, (page - 1) * rowsPerPage + 1, "-", (page - 1) * rowsPerPage + data.length, " of ", total), /*#__PURE__*/React.createElement("span", {
    className: page === 1 ? "ms-4" : "smartTable-pointer ms-4",
    onClick: e => {
      e.preventDefault();
      if (page === 1) return;
      setPage(page - 1);
      fetchData(buildQueryString(search, page - 1, rowsPerPage));
    }
  }, /*#__PURE__*/React.createElement(_SVGChevronLeft.default, {
    color: page === 1 ? "lightgray" : undefined
  })), /*#__PURE__*/React.createElement("span", {
    className: page * rowsPerPage >= total ? "ms-4" : "smartTable-pointer ms-4",
    onClick: e => {
      e.preventDefault();
      if ((page - 1) * rowsPerPage > total) return;
      setPage(page + 1);
      fetchData(buildQueryString(search, page + 1, rowsPerPage));
    }
  }, /*#__PURE__*/React.createElement(_SVGChevronRight.default, {
    color: page * rowsPerPage >= total ? "lightgray" : undefined
  })))))));
}

var _default = SmartTable;
exports.default = _default;