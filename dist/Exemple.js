"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Exemple;

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const headCells = [{
  id: "email",
  numeric: false,
  label: "Email",
  width: 200
}, {
  id: "name",
  numeric: false,
  label: "Name",
  width: 150
}, {
  id: "phone",
  numeric: false,
  label: "Phone",
  width: 100
}, {
  id: "subject",
  numeric: false,
  label: "Subject",
  width: 300
}, {
  id: "message",
  numeric: false,
  label: "Message",
  width: 700
}];
const data = [{
  _id: "6144e83a966145976c75cdfe",
  email: "minagerges123@gmail.com",
  name: "Mina",
  phone: "+96170345114",
  subject: "test",
  message: "ahlannn",
  date: "2021-09-17 19:10:50"
}, {
  _id: "61439914086a4f4e9f9d87cd",
  email: "amineamine1996@gmail.com",
  name: "amine amine",
  phone: "+96176466341",
  subject: "12121",
  message: "121212121212121",
  date: "2021-09-16 22:20:52"
}, {
  _id: "61439887086a4f4e9f9d87cc",
  email: "as@a.com",
  name: "as",
  phone: "+96176466341",
  subject: "as",
  message: "as",
  date: "2021-09-16 22:18:31"
}, {
  _id: "6143985d086a4f4e9f9d87cb",
  email: "amineamine19961996@gmail.com",
  name: "amine amine",
  phone: "+96176466341",
  subject: "1234",
  message: "sdsdsd",
  date: "2021-09-16 22:17:49"
}, {
  _id: "614397edcbfc69177da008c8",
  email: "amine@amine.com",
  name: "amine",
  phone: "+334343439393993",
  subject: "1234",
  message: "3434",
  date: "2021-09-16 22:15:57"
}, {
  _id: "6143b810d713e67dfca4985c",
  email: "dominique.amine@gmail.com",
  name: "Dominique",
  phone: "+96181304686",
  subject: "Dev ",
  message: "Ohmaga",
  date: "2021-09-16 21:33:04"
}, {
  _id: "61439b2f0b93c171aa1cf475",
  email: "amineamine19961996@gmail.com",
  name: "Jean Claude Samaha Bartender",
  phone: "+96170492931",
  subject: "cv application",
  message: "hello amine this a test email ",
  date: "2021-09-16 19:29:51"
}, {
  _id: "6117aeca1e925fd9dbc2bc6d",
  email: "amineamine19961996@gmail.com",
  name: "amine amine",
  phone: "+96176466341",
  subject: "1234",
  message: "wwww",
  date: "2021-08-14 14:53:46"
}, {
  _id: "61141f32cbfa7dbd8dba189f",
  email: "amineamine19961996@gmail.com",
  name: "amine amine",
  phone: "+96176466341",
  subject: "aa",
  message: "23232",
  date: "2021-08-11 22:04:18"
}, {
  _id: "61141e57cbfa7dbd8dba189e",
  email: "amineamine19961996@gmail.com",
  name: "amine amine",
  phone: "+96176466341",
  subject: "qw",
  message: "qw",
  date: "2021-08-11 22:00:39"
}];

function Exemple() {
  return /*#__PURE__*/React.createElement(_index.default, {
    title: "Emails",
    data: data,
    headCells: headCells // url="/api/admin/emails"
    // searchDebounceTime={800}
    // noPagination

  });
}