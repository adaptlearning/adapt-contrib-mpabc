import Handlebars from 'handlebars';

const helpers = {

  /**
   * Allow components to fetch their component description.
   *
   * Creates an aria label using the `a11y_aria_label` helper containing
   * the component description specified in the
   * `_globals._component[componentName].ariaRegion`. This value is defined
   * in the `properties.schema:globals.ariaRegion`.
   *
   * @param {string} [override]
   * @returns {string}
   */
  component_description(override, context) {
    if (!this._isA11yComponentDescriptionEnabled) {
      return;
    }
    const isNotDefined = !this._globals._components?.['_' + this._component];
    if (isNotDefined) {
      return;
    }
    const hasOverride = (arguments.length > 1);
    let description;
    if (hasOverride) {
      description = override;
      description = helpers.compile(description, context);
    } else {
      description = this._globals._components['_' + this._component].ariaRegion;
      description = helpers.compile(description, override);
    }
    if (!description) {
      return;
    }
    return new Handlebars.SafeString('<div class="aria-label">' + description + '</div>');
  }

};

for (const name in helpers) {
  Handlebars.registerHelper(name, helpers[name]);
}

export default helpers;
