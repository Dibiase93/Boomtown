import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Form, Field, FormSpy } from "react-final-form";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import { ADD_ITEM_MUTATION } from "../../apollo/queries";
import { Mutation } from "react-apollo";

import {
  updateItem,
  resetItem,
  resetItemImage,
  addItem
} from "../../redux/ShareItemPreview/reducer";
import { connect } from "react-redux";

class ShareItemForm extends Component {
  constructor({ props }) {
    super(props);
    this.state = {
      fileSelected: false,
      done: false,
      selectedTags: []
    };
    this.fileInput = React.createRef();
  }

  onSubmit(formState) {
    console.log(formState);
  }
  validate(formState) {
    // console.log("validating");
  }

  //returns a promise which takes something from a FIleReader and changes into a base 64string
  //Takes the entire image and encodes it into a 64bit string. To describes the image.
  getBase64Url() {
    return new Promise(resolve => {
      const reader = new FileReader();
      reader.onload = e => {
        resolve(
          `data:${this.state.fileSelected.type};base64, ${btoa(
            e.target.result
          )}`
        );
      };
      reader.readAsBinaryString(this.state.fileSelected);
    });
  }

  //Picks selected tags from dropdown menu which is an object selecting title and id
  applyTags(tags) {
    return (
      tags &&
      tags
        .filter(t => this.state.selectedTags.indexOf(t.id) > -1)
        .map(t => ({ title: t.title, id: t.id }))
    );
  }

  //calls updateItem prop that dispatches action so the preview gets updated
  dispatchUpdate(values, tags, updateItem) {
    if (!values.imageurl && this.state.fileSelected) {
      this.getBase64Url().then(imageurl => {
        updateItem({
          imageurl
        });
      });
    }
    updateItem({
      ...values,
      tags: this.applyTags(tags)
    });
  }
  handleSelectTag(event) {
    this.setState({ selectedTags: event.target.value });
  }

  generateTagsText(tags, selected) {
    return tags
      .map(t => (selected.indexOf(t.id) > -1 ? t.title : false))
      .filter(e => e)
      .join(", ");
  }

  handleSelectFile(event) {
    this.setState({
      fileSelected: this.fileInput.current.files[0]
    });
  }

  resetFileInput() {
    this.props.resetItemImage();
    this.fileInput.current.value = "";
    this.setState({ fileSelect: false });
  }

  saveItem = async (values, tags, addItem) => {
    try {
      await addItem({
        variables: {
          item: {
            ...values,
            tags: this.applyTags(tags)
          }
        }
      });
    } catch (e) {
      throw new Error(e);
    }
  };

  render() {
    const { tags, classes, updateItem } = this.props;
    return (
      <Mutation mutation={ADD_ITEM_MUTATION}>
        {addItem => (
          <Card>
            <CardContent>
              <Form
                // validate={formState => this.validate(formState)}
                onSubmit={values => this.saveItem(values, tags, addItem)}
                render={({ handleSubmit, pristine, invalid }) => (
                  <form onSubmit={handleSubmit}>
                    <FormSpy
                      subscription={{ values: true }}
                      component={({ values }) => {
                        if (values) {
                          this.dispatchUpdate(values, tags, updateItem);
                        }
                        return "";
                      }}
                    />
                    <h1>Share. Borrow. Prosper.</h1>

                    <FormControl fullWidth className={classes.formControl}>
                      <Field name="imageurl">
                        {({ input, meta }) => {
                          return (
                            <React.Fragment>
                              {!this.state.fileSelected ? (
                                <Button
                                  size="medium"
                                  color="primary"
                                  variant="contained"
                                  onClick={() => {
                                    this.fileInput.current.click();
                                  }}
                                >
                                  <Typography>Select an Image</Typography>
                                </Button>
                              ) : (
                                <Button
                                  size="medium"
                                  color="primary"
                                  variant="outlined"
                                  onClick={() => {
                                    this.resetFileInput();
                                  }}
                                >
                                  <Typography>Reset image</Typography>
                                </Button>
                              )}
                              <input
                                ref={this.fileInput}
                                hidden
                                type="file"
                                accept="image/*"
                                id="fileInput"
                                onChange={e => this.handleSelectFile(e)}
                              />
                            </React.Fragment>
                          );
                        }}
                      </Field>
                    </FormControl>

                    <div>
                      <Field
                        name="title"
                        render={({ input, meta }) => (
                          <TextField
                            id="standard-name"
                            inputProps={{ ...input }}
                            label="Name your Item"
                            value={input.value}
                            margin="normal"
                            className={classes.inputfield}
                          />
                        )}
                      />
                    </div>
                    <Field
                      name="description"
                      render={({ input, meta }) => (
                        <TextField
                          id="title"
                          inputProps={{ ...input }}
                          label="Describe your Item"
                          value={input.value}
                          margin="normal"
                          className={classes.inputfield}
                        />
                      )}
                    />
                    <div>
                      <FormControl fullWidth className={classes.formControl}>
                        <InputLabel htmlFor="Tags">Add some tags</InputLabel>
                        <Field name="tags">
                          {({ input, meta }) => {
                            return (
                              <Select
                                multiple
                                value={this.state.selectedTags}
                                onChange={e => this.handleSelectTag(e)}
                                renderValue={selected => {
                                  return this.generateTagsText(tags, selected);
                                }}
                              >
                                {tags &&
                                  tags.map(tag => (
                                    <MenuItem key={tag.id} value={tag.id}>
                                      <Checkbox
                                        checked={
                                          this.state.selectedTags.indexOf(
                                            tag.id
                                          ) > -1
                                        }
                                      />
                                      <ListItemText primary={tag.title} />
                                    </MenuItem>
                                  ))}
                              </Select>
                            );
                          }}
                        </Field>
                      </FormControl>
                    </div>
                    <button type="submit" disabled={pristine || invalid}>
                      Submit
                    </button>
                  </form>
                )}
              />
            </CardContent>
          </Card>
        )}
      </Mutation>
    );
  }
}

//converts dispatch functions into props
const mapDispatchToProps = dispatch => ({
  updateItem(item) {
    dispatch(updateItem(item));
  },
  resetItem() {
    dispatch(resetItem());
  },
  resetItemImage() {
    dispatch(resetItemImage());
  }
});

export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(ShareItemForm));
