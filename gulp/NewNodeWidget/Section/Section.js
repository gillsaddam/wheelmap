const React = require('react');
const I18n = require('../../common/I18n');

const { string, func } = React.PropTypes;

class Section extends React.Component {
  static propTypes = {
    actionLabel: string.isRequired, // @TODO Use scope,
    section: string.isRequired,
    onClickAction: func.isRequired
  };

  static defaultProps = {
    actionLabel: 'Weiter'
  };

  onClickAction = (event) => {
    event.preventDefault();

    this.props.onClickAction(this.props.section);
  };

  render() {
    const { section , children, actionLabel, onClickAction } = this.props;

    const sectionForms = React.Children.map(children, child => {
      return (
        <div className="nodes-new-content-section-form">
          {child}
        </div>
      )
    });

    return (
      <section className="nodes-new-content-section">
        <h2><I18n scope={`nodes.new.form.section.${section}.title`}/></h2>
        {sectionForms}
        <div className="form-actions">
          <button className="btn btn-primary pull-right submit" onClick={this.onClickAction}>{actionLabel}</button>
        </div>
      </section>
    );
  }
}

module.exports = Section;