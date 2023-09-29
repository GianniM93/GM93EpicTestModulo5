import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNavbar from './comps/navbar/MyNav';
import { navLinks } from './data/myNavData';
import MyFooter from './comps/footer/MyFooter';
import Welcome from './comps/jumbotron/MyJumbo';
import fantasyBooks from "./data/fantasy.json";
import Main from './comps/main/Main';
import SingleBook from './comps/singlebook/SingleBook';
import CommentArea from './comps/commentArea/CommentArea';
import { SelectedBooksProvider } from './comps/bookContext/BookContext';
import NotFound from './comps/notFound/NotFound';
import BookDetails from './comps/bookDetails/BookDetails';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '', 
    };
  }

  setQuery = (newQuery) => {
    this.setState({ query: newQuery });
  }

  render() {
    return (
      <BrowserRouter>
      <SelectedBooksProvider>
        <Welcome />
          <MyNavbar appQuery={this.state.query} appSetQuery={this.setQuery} links={navLinks} />
          <div className="container mt-4">
            <div className="row">
              <div className="col-md-8">
              <Routes>
              <Route path="/" element={<Main data={fantasyBooks} appQuery={this.state.query} />} />
              <Route path="*" element={<NotFound />} /> 
              <Route path="/book/:id" element={<BookDetails data={fantasyBooks} />} />
              </Routes>
              </div>
              <div className="col-md-4">
                <CommentArea />
              </div>
            </div>
          </div>
          <Routes>
          <Route path="/" element={<SingleBook data={fantasyBooks} />} /> 
          </Routes>
          <MyFooter />
        </SelectedBooksProvider>
        </BrowserRouter>     
    );
  }
}
