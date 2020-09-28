import React, { Component } from "react";
import "../static/css/SearchBox.css";

const SearchButton = (props) => (
  <button
    className={`search_box__button ${props.active ? "active" : ""}`}
    onClick={() => props.toggleActive()}
  >
    <img
      style={{ width: "40px", height: "40px", color: "white" }}
      className="search_box__button_img"
      src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMS4xLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI1MC4zMTMgMjUwLjMxMyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjUwLjMxMyAyNTAuMzEzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPGcgaWQ9IlNlYXJjaCI+Cgk8cGF0aCBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7IiBkPSJNMjQ0LjE4NiwyMTQuNjA0bC01NC4zNzktNTQuMzc4Yy0wLjI4OS0wLjI4OS0wLjYyOC0wLjQ5MS0wLjkzLTAuNzYgICBjMTAuNy0xNi4yMzEsMTYuOTQ1LTM1LjY2LDE2Ljk0NS01Ni41NTRDMjA1LjgyMiw0Ni4wNzUsMTU5Ljc0NywwLDEwMi45MTEsMFMwLDQ2LjA3NSwwLDEwMi45MTEgICBjMCw1Ni44MzUsNDYuMDc0LDEwMi45MTEsMTAyLjkxLDEwMi45MTFjMjAuODk1LDAsNDAuMzIzLTYuMjQ1LDU2LjU1NC0xNi45NDVjMC4yNjksMC4zMDEsMC40NywwLjY0LDAuNzU5LDAuOTI5bDU0LjM4LDU0LjM4ICAgYzguMTY5LDguMTY4LDIxLjQxMyw4LjE2OCwyOS41ODMsMEMyNTIuMzU0LDIzNi4wMTcsMjUyLjM1NCwyMjIuNzczLDI0NC4xODYsMjE0LjYwNHogTTEwMi45MTEsMTcwLjE0NiAgIGMtMzcuMTM0LDAtNjcuMjM2LTMwLjEwMi02Ny4yMzYtNjcuMjM1YzAtMzcuMTM0LDMwLjEwMy02Ny4yMzYsNjcuMjM2LTY3LjIzNmMzNy4xMzIsMCw2Ny4yMzUsMzAuMTAzLDY3LjIzNSw2Ny4yMzYgICBDMTcwLjE0NiwxNDAuMDQ0LDE0MC4wNDMsMTcwLjE0NiwxMDIuOTExLDE3MC4xNDZ6IiBmaWxsPSIjMDAwMDAwIi8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg=="
    />
  </button>
);

const SearchInput = (props) => (
  <div className={`search_box__input_wrap ${props.active ? "active" : ""}`}>
    <input
      className="search_box__input"
      type="text"
      placeholder="Type to filter..."
    />
  </div>
);

class SearchArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
    this.toggleActive = this.toggleActive.bind(this);
  }

  toggleActive() {
    this.setState({
      active: !this.state.active,
    });
  }

  render() {
    return (
      <div className="search_box">
        <SearchInput active={this.state.active} />
        <SearchButton
          active={this.state.active}
          toggleActive={this.toggleActive}
        />
      </div>
    );
  }
}

export default SearchArea;
