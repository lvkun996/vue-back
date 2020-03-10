import Vue from 'vue'
import {
  Button, Form, FormItem, Input, Message, Container, Header, Aside, Main,
  Menu, Submenu, MenuItem, MenuItemGroup, Breadcrumb, BreadcrumbItem, Card,
  Autocomplete, Table, TableColumn, Switch, pagination, Dialog, MessageBox, Row, Col,
  Tag
} from 'element-ui'

Vue.prototype.$message = Message
Vue.prototype.$messageBox = MessageBox

Vue.use(Button)
  .use(Form)
  .use(FormItem)
  .use(Input)
  .use(Container)
  .use(Header)
  .use(Aside)
  .use(Main)
  .use(Menu)
  .use(Submenu)
  .use(MenuItemGroup)
  .use(MenuItem)
  .use(Breadcrumb)
  .use(BreadcrumbItem)
  .use(Card)
  .use(Autocomplete)
  .use(Table)
  .use(TableColumn)
  .use(Switch)
  .use(pagination)
  .use(Dialog)
  .use(Row)
  .use(Col)
  .use(Tag)
