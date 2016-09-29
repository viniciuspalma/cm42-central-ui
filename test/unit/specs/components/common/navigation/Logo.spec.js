import Vue from 'vue';
import Logo from 'src/components/common/navigation/Logo';

describe('Logo.vue', () => {
  const vm = new Vue({
    template: '<div><logo></logo></div>',
    components: { Logo },
  }).$mount();

  it('should render correct link', () => {
    expect(vm.$el.querySelectorAll('.logo-link').length).to.eq(1);
  });

  it('should render correct img', () => {
    expect(vm.$el.querySelectorAll('.logo-image').length).to.eq(1);
  });
});
