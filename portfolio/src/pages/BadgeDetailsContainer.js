import React from "react";
import api from "../api";
import PageError from "../components/pageError";
import PageLoading from "../components/pageLoading";
import BadgeDetails from "./BadgeDetails";

class BadgeDetailsContainer extends React.Component {
  state = {
    loading: true,
    error: null,
    dataBadge: {
      firstName: "",
      lastName: "",
      city: "",
      apodo: "",
      email: "",
      modalIsOpen:false,
    },
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async (e) => {
    this.setState({
      loading: true,
      error: null,
    });
    try {
      const datos = await api.badges.read(this.props.match.params.badgeId);
      console.table(datos);
      this.setState({
        loading: false,
        dataBadge: datos,
      });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };
  handleCloseModal=e=>{
    this.setState({
      modalisOpen:false
    })
  }
  handleOpenModal=e=>{
    this.setState({
      modalisOpen:true
    })
  }
  handleDeleteBadge=async e=>{
    this.setState({
      loading:true,error:null,
    })
    try{
      api.badges.remove(this.props.match.params.badgeId)
      this.props.history.push('/Badges')
      this.setState({loading:false})
    }catch(error){
      this.setState({loading:false,error:error})
    }
  }
  render() {
    if (this.state.loading) {
      <PageLoading />;
    }
    if (this.state.error) {
      <PageError error={this.state.error} />;
    }
    return (
      <BadgeDetails onDeleteBadge={this.handleDeleteBadge} onCloseModal={this.handleCloseModal} onOpenModal={this.handleOpenModal} modalIsOpen={this.state.modalisOpen} badge={this.state.dataBadge}/>
    ); 
  }
}
export default BadgeDetailsContainer;
