import React from "react";
import { Link } from "react-router-dom";

import BadgesList from "../components/badgesList";
import PageLoading from '../components/pageLoading'
import PageError from '../components/pageError'

import api from "../api";

import "../styles/previewBadge.css";

class MostWanted extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      loading: true,
      error: null,
      data: undefined,
    };
  };
  componentDidMount() {
    this.fetchData();
  }
  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const data = await api.badges.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
      console.log("ya cague we");
    }
  };
  render() {
    if (this.state.loading) {
      return <PageLoading/>;
    }
    if (this.state.error) {
      return <PageError error={this.state.error}/>;
    }
    return (
      <div className="woodBackg">
        <div className="content">
          <h1>LOS BANDIDOS MAS BUSCADOS</h1>
          <button>
            <Link to="/Badges/new">Nuevo Badge</Link>
          </button>
        </div>
        <BadgesList badge={this.state.data} />
      </div>
    );
  }
}
export default MostWanted;
