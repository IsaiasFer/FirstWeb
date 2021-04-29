import React from "react";

import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import api from "../api";

import "../styles/badge.css";
import PageLoading from "../components/pageLoading";

class BadgeEdit extends React.Component {
  state = {
    loading: true,
    error: null,
    form: {
      firstName: "",
      lastName: "",
      city: "",
      apodo: "",
      email: "",
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
      const data = await api.badges.read(this.props.match.params.badgeId);
      this.setState({
        loading: false,
        form: data
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
    }
  };
  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loading: true, error: null });
    try {
      await api.badges.update(this.props.match.params.badgeId,this.state.form);
      this.setState({ loading: false });
      this.props.history.push("/Badges");
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }
    return (
      <React.Fragment>
        <div className="BadgeContainer woodBackg">
          <BadgeForm
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
            formValues={this.state.form}
            error={this.state.error}
          />
          <Badge
            firstName={this.state.form.firstName || "Howard"}
            lastName={this.state.form.lastName || "Jhonson"}
            city={this.state.form.city || "Pensilvania"}
            apodo={this.state.form.apodo || "El fuletero"}
            email={this.state.form.email}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeEdit;
