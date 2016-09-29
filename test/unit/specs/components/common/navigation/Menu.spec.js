import Vue from 'vue';
import Menu from 'src/components/common/navigation/Menu';

describe('Menu.vue', () => {
  const vm = new Vue({
    template: '<div><menu team-name="foo"></menu></div>',
    components: {
      Menu,
    },
  }).$mount();

  it('should render correct menu container', () => {
    expect(vm.$el.querySelectorAll('.menu-hamburguer').length).to.eq(1);
  });

  it('should render correct icon text', () => {
    expect(vm.$el.querySelector('i').textContent).to.contain('menu');
  });

  it('should render correct team name passed', () => {
    expect(vm.$el.querySelector('.menu-team-name').textContent).to.contain('foo');
  });
});
