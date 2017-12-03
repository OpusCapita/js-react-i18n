import { expect } from 'chai';
import PropTypes from 'prop-types';
import React from 'react';
import { I18nManager } from '@opuscapita/i18n';
import FormattedMessage from './FormattedMessage.react';
import { render } from 'enzyme';

class TestComponent extends React.Component {

  static propTypes = {
    message: PropTypes.string,
  };

  static childContextTypes = {
    i18n: PropTypes.object.isRequired,
  };

  getChildContext() {
    const i18n = new I18nManager('en-US');

    i18n.register('TextComponent', [{
      locales: ['en-US'],
      messages: {
        logo: 'They shall not pass',
      },
    }]);

    return {
      i18n,
    };
  }

  render() {
    return (
      <FormattedMessage locale="en-US" message={this.props.message} />
    );
  }
}

describe('FormattedMessage', () => {
  it('render translation', () => {
    expect(render(<TestComponent message="logo"/>).html()).to.equal("They shall not pass");
  });

  it('render nothing', () => {
    expect(render(<TestComponent/>).html()).to.equal("");
  });
});
