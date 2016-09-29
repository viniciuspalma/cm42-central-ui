import Vue from 'vue';
import Navigation from 'src/components/common/Navigation';

describe('Navigation.vue', () => {
  const vm = new Vue({
    template: '<div><navigation team-name="foo"></navigation></div>',
    components: { Navigation },
  }).$mount();

  it('should render correct team name passed', () => {
    expect(vm.$el.querySelector('.menu-container').textContent).to.contain('foo');
  });

  it('should render childrens', () => {
    expect(vm.$children[0].$children.length).to.eq(4);
  });
});
