import Common from '../Common';

export default class Men extends Common {
  get title() {
    return this.page.locator('#page-title-heading');
  }
}
