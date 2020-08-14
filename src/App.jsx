import React, { Component } from "react";
import { IntlProvider } from "react-intl";
import mondaySdk from "monday-sdk-js";
import { ThemeProvider, CssBaseline, responsiveFontSizes } from "@material-ui/core";
import messages from "./static/messages/messages";
import generateTheme from "./styles/theme";

const monday = mondaySdk();

class App extends Component {
  static theme;

  constructor(props) {
    super(props);
    this.setTheme();
    this.state = {
      settings: {},
      name: "",
      context: {},
      boardData: {},
    };
  }

  componentDidMount() {
    // TODO: set up event listeners
    monday.listen("settings", res => {
      this.setState({ settings: res.data });
    });
    monday.listen("context", res => {
      this.setState({ context: res.data });
      monday
        .api(
          `query ($boardIds: [Int]) { boards (ids:$boardIds) { name items(limit:1) { name column_values { title text } } } }`,
          { variables: { boardIds: this.state.context.boardIds } }
        )
        .then(res => {
          this.setState({ boardData: res.data });
        });
    });
  }

  setTheme() {
    App.theme = generateTheme();
    App.theme = responsiveFontSizes(App.theme);
  }

  render() {
    return (
      <IntlProvider locale="en-US" defaultLocale="en-US" messages={messages["en-US"]}>
        <ThemeProvider theme={App.theme}>
          <CssBaseline />
          <div className="App" style={{ background: this.state.settings.background }}>
            Hello, monday Apps!
            {JSON.stringify(this.state.boardData, null, 2)}
          </div>
        </ThemeProvider>
      </IntlProvider>
    );
  }
}

export default App;
